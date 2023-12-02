<script lang="ts">
	import type { OrthographicCamera, PerspectiveCamera } from 'three';
	import { HierarchicalObject, T, useTask, useThrelte } from '@threlte/core';
	import { Scene, WebGLRenderTarget } from 'three';
	import { onDestroy } from 'svelte';

	export let width = 512;
	export let height = 512;

	export let camera: OrthographicCamera | PerspectiveCamera;

	const ref = new Scene();

	const target = new WebGLRenderTarget();
	$: target.setSize(width, height);

	const { renderer } = useThrelte();

	useTask(() => {
		renderer.setRenderTarget(target);
		renderer.render(ref, camera);
		renderer.setRenderTarget(null);
	});

	onDestroy(() => {
		target.dispose();
	});
</script>

<T is={target.texture} attach="map" />

<HierarchicalObject>
	<T is={ref}>
		<slot ref={target.texture} />
	</T>
</HierarchicalObject>
