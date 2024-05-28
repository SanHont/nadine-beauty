<script>
	export let data;
	import { WhatsApp, Instagram, FaceBook } from '$lib/index.js';
</script>

<section>
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
		margin: 0.5em;
	}
</style>
