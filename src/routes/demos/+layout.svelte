<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { page } from '$app/stores';

	$page.data.setContext?.();
</script>

<div class="h-screen grid grid-rows-3">
	<div class="row-span-2">
		<Canvas>
			<svelte:component this={$page.data.scene} />
		</Canvas>
	</div>
	<div class="p-2 grid justify-center items-center bg-yellow">
		<slot />
	</div>
</div>
