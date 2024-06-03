<script>
	import Menu from '$lib/components/menu.svelte';
	import AboutMe from '$lib/components/aboutme.svelte';
	import HeroHeader from '$lib/components/heroheader.svelte';


	export let data;
</script>

<Menu {data} />
<AboutMe {data} />
<HeroHeader {data} />
