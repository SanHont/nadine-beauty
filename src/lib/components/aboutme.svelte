<script>
	export let data;
</script>

<section>
	<div class="image">
		<div class="image-bg">
			<img src={data.nadineBeauties[0].aboutMeImage.url} alt="" />
		</div>
	</div>
	<div class="text-section">
		<h2>{data.nadineBeauties[0].aboutMeTitle}</h2>
		<p>{data.nadineBeauties[0].aboutMeText}</p>
		<p>{data.nadineBeauties[0].aboutMeText2}</p>
		<button>Contact Me</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 3em 0;
	}

	.image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.image-bg {
		background-color: var(--lines-color);
		width: 70%;
		padding-left: 0.4em;
	}

	img {
		width: 100%;
	}

	.text-section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		font-size: 1.5em;
		margin: 0.7em 0;
		font-weight: 500;
		color: var(--about-me-text-color);
	}

	p {
		margin-bottom: 1em;
		width: 70%;
		color: var(--about-me-text-color);
	}

	button {
		padding: 0.5em 0.7em;
		margin: 0.7em 0;
		background-color: var(--lines-color);
		font-weight: 600;
		border: none;
	}

	@media only screen and (min-width: 34em) {
		.image-bg {
			width: 60%;
		}
	}

	@media only screen and (min-width: 48em) {
		section {
			display: flex;
			flex-direction: row;
		}

		.image {
			margin: 1em;
		}

		.image-bg {
			width: 80%;
		}

		h2 {
			font-size: 1.7em;
		}

		p {
			width: 70%;
			font-size: 0.8em;
		}

		button {
			padding: 0.3em 0.5em;
			margin: 0.5em 0;
			font-size: 0.8em;
		}
	}

	@media only screen and (min-width: 53em) {
		h2 {
			font-size: 1.9em;
		}

		p {
			width: 80%;
			font-size: 0.9em;
		}
	}

	@media only screen and (min-width: 62.5em) {
		h2{
			font-size: 2em;
		}

		p {
			width: 80%;
			line-height: 1.5;
			font-size: 1em;
		}

		button {
			font-size: 0.9em;
		}
	}

	@media only screen and (min-width: 75em) {
		section {
			margin-left: 3em;
			margin-right: 3em;
		}

		h2 {
			font-size: 2.3em;
		}

		p {
			width: 75%;
			line-height: 1.6;
			font-size: 1.1em;
		}
		button {
			font-size: 1em;
		}
	}

	@media only screen and (min-width: 87em) {
		p {
			width: 75%;
			font-size: 1.1em;
		}
	}
</style>
