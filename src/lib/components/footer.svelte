<script>
	// Import the necessary modules
	import { Instagram, FaceBook, WhatsApp } from '$lib/index.js';
	import { enhance } from '$app/forms';

	// Declare reactive variables to track submission state and messages
	let isSubmitting = false;
	let successMessage = '';
	let errorMessage = '';

	// Function to handle the form enhancement
	function handleEnhance({ formElement }) {
		// Handle the form submission
		const handleSubmit = async ({ result }) => {
			// Reset submission state and messages
			isSubmitting = false;
			successMessage = '';
			errorMessage = '';

			// Handle the result of the form submission
			if (result.type === 'failure') {
				// Set error message if the submission failed
				errorMessage = result.data.error;
			} else if (result.type === 'success') {
				// Reset the form and set success message if the submission succeeded
				formElement.reset();
				successMessage = result.data.message;
			}
		};

		// Return the handleSubmit function to be used by the form
		return handleSubmit;
	}
</script>

<section>
	<iframe
		title="My location"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79001.8700630503!2d19.39800241523938!3d51.77310907161038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb24754556af%3A0xcb7cae639b21dbac!2zxYHDs2TFuiwgUG9sZW4!5e0!3m2!1snl!2snl!4v1717159886093!5m2!1snl!2snl"
		width="400"
		height="300"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>

	<img
		src="assets/NadineBeautyLogo.svg"
		alt="Nadine beauty"
		width="200"
		height="200"
		class="logo"
	/>

	<ul>
		<li>
			<a href="https://www.instagram.com/nadiiine.beauty?igsh=b3BqbDN5ZzR4MHYw" target="_blank"
				><img src={Instagram} width="35" height="35" alt="Click to go to my instagram" /></a
			>
		</li>
		<li>
			<a href="https://www.facebook.com/nadina.saleh" target="_blank"
				><img src={FaceBook} width="35" height="35" alt="Click to go to my facebook" /></a
			>
		</li>
		<li>
			<a href="06" target="_blank"
				><img src={WhatsApp} width="35" height="35" alt="Click to go to my whatsapp" /></a
			>
		</li>
	</ul>

	<section>
		<h2>Make an appointment</h2>

		<form
			method="POST"
			use:enhance={handleEnhance}
			on:submit={() => (isSubmitting = true)}
			class="contact-form"
		>
			<input type="hidden" name="subject" value="You have received a new message from your form." />
			<input type="text" name="name" placeholder="Joe Burger" required />
			<input type="email" name="email" placeholder="joeburger@gmail.com" required />
			<input type="message" name="message" placeholder="Message" required />

			{#if successMessage}
				<p class="success-message">{successMessage}</p>
			{/if}

			{#if errorMessage}
				<p class="error-message">{errorMessage}</p>
			{/if}

			<button type="submit" class="submit-button" disabled={isSubmitting}>
				{#if isSubmitting}
					Sending...
				{:else}
					Send
				{/if}
			</button>
		</form>
	</section>

	<div class="line"></div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	iframe {
		margin-top: 5em;
	}

	img {
		margin-top: -1em;
	}

	ul {
		display: flex;
		margin-top: -2em;
		margin-bottom: 2em;
	}

	li {
		padding: 0.5em;
	}

	h2 {
		font-size: 1.3em;
		margin: 0 1em;
		color: var(--text-color);
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 0.3em;
		width: 100%;
		margin: 1em;
	}

	input:nth-child(4) {
		height: 3em;
	}

	input,
	button {
		margin: 0.2em;
	}

	button {
		margin-top: 1em;
		padding: 0.5em 0.7em;
		width: max-content;
		background-color: var(--lines-color);
		font-weight: 600;
		border: none;
	}

	.line {
		background-color: var(--lines-color);
		width: 100%;
		height: 0.8em;
	}
</style>
