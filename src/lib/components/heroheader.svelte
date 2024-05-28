<script>
	export let data;
	import { WhatsApp, Instagram, FaceBook } from '$lib/index.js';
</script>

<section>
	<div class="colored-bg"></div>
	<img src="assets/heroheader.jpg" alt="" />
	<article>
		<h1>Nadine<span>Beauty</span></h1>
		<em>
			{data.nadineBeauties[0].quote}
		</em>
		<ul>
			<li>
				<a href="https://www.instagram.com/nadiiine.beauty?igsh=b3BqbDN5ZzR4MHYw" target="_blank"
					><img src={Instagram} width="25" height="25" alt="Click to go to my instagram" /></a
				>
			</li>
			<li>
				<a href="https://www.facebook.com/nadina.saleh" target="_blank"
					><img src={FaceBook} width="25" height="25" alt="Click to go to my facebook" /></a
				>
			</li>
			<li>
				<a href="06" target="_blank"
					><img src={WhatsApp} width="25" height="25" alt="Click to go to my whatsapp" /></a
				>
			</li>
		</ul>
	</article>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		position: relative;
		width: 100%;
	}

	article {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		width: 75%;
		height: max-content;
		background-color: black;
	}

	article::before {
		position: absolute;
		top: -2em;
		left: -2.2em;
		content: url(assets/crown.svg);
	}

	h1 {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		font-weight: 400;
		font-size: 2.5em;
		background: var(--gradient-bg);
		background: var(--text-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: aliceblue;
	}

	h1 span {
		font-size: 0.5em;
		letter-spacing: 0.2rem;
		margin-top: -0.5em;
	}

	em {
		margin-top: 1em;
		font-weight: 500;
		font-size: 0.8em;
	}

	ul {
		display: flex;
		margin-top: 0.5em;
	}

	li {
		list-style: none;
		margin: 0.5em;
	}

	@media only screen and (min-width: 37.5em) {
		h1 {
			font-size: 3em;
		}
		h1 span {
			font-size: 0.6em;
		}
		em {
			font-size: 1em;
		}
		li {
			margin-top: 1em;
			scale: 1.2;
		}
	}

	@media only screen and (min-width: 53.1em) {
		article {
			justify-content: center;
			height: 20em;
		}
		article::before {
			scale: 1.5;
			left: -2em;
		}

		h1 {
			font-size: 4em;
		}
		h1 span {
			font-size: 0.7em;
		}
		em {
			font-size: 1.2em;
		}
		li {
			margin-top: 1em;
			margin-left: 1.5em;
			scale: 1.8;
		}
	}
</style>
