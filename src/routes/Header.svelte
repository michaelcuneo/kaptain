<script lang="ts">
	import BurgerMenu from "$lib/components/BurgerMenu.svelte";
</script>

<header>
    <span class="title">R A PRODUCTIONS</span>
    <div class="burger">
        <BurgerMenu />
    </div>
</header>

<style>
    header {
        padding: 1.5rem;
        background: var(--color-primary);
    }
    .title {
        font-family: 'Bank Gothic Medium';
        font-size: 1.5rem;
        color: var(--color-black);
    }
</style>