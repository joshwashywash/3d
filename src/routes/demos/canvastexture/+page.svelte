<script lang="ts">
	import Scene from './Scene.svelte';
	import type { Action } from 'svelte/action';
	import { Canvas } from '@threlte/core';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import portal from '$lib/actions/portal';
	import { get as getPortalContext } from '../portalContext';
	import draw from './draw';

	export let width = 128;
	export let height = width;

	const canvas = setContext('canvas', writable<HTMLCanvasElement | null>(null));

	const canvasContext: Action<HTMLCanvasElement, Writable<HTMLCanvasElement | null>> = (
		canvas,
		store
	) => {
		store.set(canvas);
	};

	const portal$ = getPortalContext();
</script>

<div class="flex flex-col gap-2 items-center" use:portal={$portal$}>
	<p class="text-blue">draw in the white square</p>
	<canvas
		on:touchstart|preventDefault
		{width}
		{height}
		use:draw={{ lineWidth: 2 }}
		use:canvasContext={canvas}
	/>
</div>

<Canvas>
	<Scene />
</Canvas>
