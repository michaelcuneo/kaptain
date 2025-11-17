<script lang="ts">
	import '@fontsource/material-icons';
	import 'reset.css';
	import 'sanitize.css';
	import './app.css';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import favicon from '$lib/assets/favicon.svg';
	import Overlay from '$lib/components/Overlay.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="main">
	<Overlay />
	<Header />
	<div class="content">
		{@render children()}
	</div>
	<Footer />
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100%;
	}
	.content {
		flex: 1 1 auto;
	}
</style>