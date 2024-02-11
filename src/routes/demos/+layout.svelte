<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { base } from '$app/paths';

	export let data;
</script>

<div class="flex">
	<aside
		class="p-4 sm:flex flex-col gap-2 w-full max-w-[20rem] bg-yellow hidden"
	>
		{#each data.links as link}
			<a class="underline" href={`${base}/demos/${link.href}`}>{link.text}</a>
		{/each}
	</aside>
	<main class="h-screen flex-grow">
		<Canvas>
			<T.Color args={['black']} attach="background" />
			<slot />
		</Canvas>
	</main>
</div>
