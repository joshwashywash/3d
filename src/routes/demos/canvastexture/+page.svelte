<script lang="ts">
	import Scene from './Scene.svelte';
	import type { Action } from 'svelte/action';
	import { Canvas } from '@threlte/core';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let width = 128;
	export let height = width;

	const draw: Action<HTMLCanvasElement, { lineWidth: number }> = (canvas, options) => {
		const context = canvas.getContext('2d');
		if (context !== null) {
			context.fillStyle = 'white';
			context.lineWidth = options.lineWidth;
			context.fillRect(0, 0, context.canvas.width, context.canvas.height);

			let downX: number | null = null;
			let downY: number | null = null;

			const onPointerMove = (e: PointerEvent) => {
				const { offsetX, offsetY } = e;
				if (downX !== null && downY !== null) {
					context.moveTo(downX, downY);
					context.lineTo(offsetX, offsetY);
					context.stroke();
					canvas.dispatchEvent(new CustomEvent('draw'));
					downX = offsetX;
					downY = offsetY;
				}
			};

			const onPointerUp = () => {
				downX = null;
				downY = null;
				canvas.removeEventListener('pointermove', onPointerMove);
			};

			const onPointerDown = (e: PointerEvent) => {
				downX = e.offsetX;
				downY = e.offsetY;
				canvas.addEventListener('pointermove', onPointerMove);
				canvas.addEventListener('pointerup', onPointerUp, { once: true });
			};

			canvas.addEventListener('pointerdown', onPointerDown);
			return {
				destroy() {
					canvas.removeEventListener('pointerdown', onPointerDown);
				}
			};
		}
	};

	const canvas = setContext('canvas', writable<HTMLCanvasElement | null>(null));

	const canvasContext: Action<HTMLCanvasElement, Writable<HTMLCanvasElement | null>> = (
		canvas,
		store
	) => {
		store.set(canvas);
	};
</script>

<div class="relative h-full w-full">
	<Canvas>
		<Scene />
	</Canvas>
	<div class="absolute left-4 top-4 space-y-2">
		<p class="text-yellow">draw in the white square</p>
		<canvas
			on:touchstart|preventDefault
			{width}
			{height}
			use:draw={{ lineWidth: 2 }}
			use:canvasContext={canvas}
		/>
	</div>
</div>
