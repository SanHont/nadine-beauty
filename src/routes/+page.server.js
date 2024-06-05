// Import statements
import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
import { fail } from '@sveltejs/kit';
import fetch from 'node-fetch';

// GraphQL query to fetch data from Hygraph
const query = gql`
	query MyQuery {
		nadineBeauties {
			aboutMeText
			aboutMeText2
			aboutMeTitle
			browsTitle
			eyelashesTitle
			galleryTitle
			quote
			aboutMeImage {
				url
			}
			galleryImage {
				url
			}
		}
	}
`;

// Load function to fetch data from Hygraph
export async function load() {
	return await hygraph.request(query);
}

// Actions object to handle form submission
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		// Validate form data
		const validationResult = validateFormData(name, email, message);
		if (validationResult.error) {
			return fail(400, {
				error: validationResult.error,
				values: { name, email, message }
			});
		}

		// Prepare payload
		const payload = preparePayload(name, email, message);

		try {
			// Send API request
			const result = await sendApiRequest(payload);

			if (result.success) {
				return {
					success: true,
					message: 'Your message has been sent successfully!',
					values: { name: '', email: '', message: '' }
				};
			} else {
				return fail(500, {
					error: 'Something went wrong. Please try again!',
					values: { name, email, message }
				});
			}
		} catch (err) {
			return fail(500, {
				error: 'Something went wrong. Please try again!',
				values: { name, email, message }
			});
		}
	}
};

// Function to validate form data
function validateFormData(name, email, message) {
	if (!name || !email || !message) {
		return { error: 'Form incorrectly filled out!' };
	}
	return { error: null };
}

// Function to prepare payload for the API request
function preparePayload(name, email, message) {
	return {
		access_key: '4eec04be-f0f8-4133-92b1-7f8ba059c9c9',
		name: name,
		email: email,
		message: message
	};
}

// Function to send API request
async function sendApiRequest(payload) {
	const response = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});

	const result = await response.json();

	return {
		success: response.ok,
		result
	};
}
