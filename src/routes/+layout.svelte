<script lang="ts">
	import 'reset.css';
	import 'sanitize.css';
	import './app.css';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="main">
	<Header />
	<div class="content">
		{@render children()}
	</div>
	<Footer />
</div>