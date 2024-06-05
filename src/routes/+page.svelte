<script>
	import Menu from '$lib/components/menu.svelte';
	import AboutMe from '$lib/components/aboutme.svelte';
	import HeroHeader from '$lib/components/heroheader.svelte';
	import Footer from '$lib/components/footer.svelte';

	export let data;
</script>

<Menu {data} />
<HeroHeader {data} />
<AboutMe {data} />
<Footer {data} />
