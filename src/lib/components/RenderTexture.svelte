<script lang="ts">
	import type { OrthographicCamera, PerspectiveCamera } from 'three';
	import { HierarchicalObject, T, useTask, useThrelte } from '@threlte/core';
	import { Scene, WebGLRenderTarget } from 'three';

	export let width: number;
	export let height: number;

	export let camera: OrthographicCamera | PerspectiveCamera;

	let scene: Scene;

	const target = new WebGLRenderTarget();
	$: target.setSize(width, height);

	const { renderer } = useThrelte();

	useTask(() => {
		renderer.setRenderTarget(target);
		renderer.render(scene, camera);
		renderer.setRenderTarget(null);
	});
</script>

<HierarchicalObject>
	<T.Scene bind:ref={scene}>
		<slot ref={target.texture} />
	</T.Scene>
</HierarchicalObject>

<T is={target.texture} attach="map" />
