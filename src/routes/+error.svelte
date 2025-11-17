<script>
	import { page } from '$app/state';
</script>

<div class="wrapper">
	<h1>{page.status}: {page.error?.message}</h1>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
</style>
