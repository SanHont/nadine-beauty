<script>
	import Menu from '$lib/components/menu.svelte';
	import HeroHeader from '$lib/components/heroheader.svelte';

	export let data;
</script>

<Menu {data} />
<HeroHeader {data} />
