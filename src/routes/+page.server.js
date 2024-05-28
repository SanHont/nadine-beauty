import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			nadineBeauties {
				aboutMeText
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

	return await hygraph.request(query);
}
