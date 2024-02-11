<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let data;
</script>

<div class="flex">
	<aside
		class="p-4 sm:flex flex-col gap-2 w-full max-w-[20rem] bg-yellow hidden"
	>
		<div class="flex-grow flex flex-col">
			{#each data.links as link}
				<a class="underline" href={`${base}/demos/${link.href}`}>{link.text}</a>
			{/each}
		</div>
		{#if $page.data.meta.instructions !== undefined}
			<p>{$page.data.meta.instructions}</p>
		{/if}
	</aside>
	<main class="h-screen flex-grow">
		<Canvas>
			<T.Color args={['black']} attach="background" />
			<slot />
		</Canvas>
	</main>
</div>
