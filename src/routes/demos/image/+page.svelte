<script lang="ts">
	import Points from './Points.svelte';
	import { OrbitControls } from '@threlte/extras';
	import { T } from '@threlte/core';

	export let data;

	let context: null | OffscreenCanvasRenderingContext2D = null;

	const image = new Image();
	image.src = data.imgSrc;
	image.addEventListener(
		'load',
		() => {
			const canvas = new OffscreenCanvas(image.width, image.height);
			context = canvas.getContext('2d');
			if (context !== null) {
				context.drawImage(image, 0, 0);
			}
		},
		{ once: true }
	);
</script>

<T.AmbientLight />

<T.PerspectiveCamera makeDefault position.z={100}>
	<OrbitControls />
</T.PerspectiveCamera>

{#if context !== null}
	<Points {context} />
{/if}
