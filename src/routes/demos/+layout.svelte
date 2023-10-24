<script lang="ts">
	import { set } from './portalContext';
	import { writable } from 'svelte/store';
	import { Canvas } from '@threlte/core';

	const portal = set(writable());
</script>

<div class="h-screen">
	<div class="h-full grid grid-rows-3">
		<div class="row-span-2">
			<Canvas>
				<slot />
			</Canvas>
		</div>
		<div class="p-2 grid items-center justify-center bg-yellow" bind:this={$portal} />
	</div>
</div>
