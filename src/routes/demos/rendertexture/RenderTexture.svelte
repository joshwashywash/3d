<script lang="ts">
	import type { OrthographicCamera, PerspectiveCamera, Texture } from 'three';
	import type { Props } from '@threlte/core';
	import { HierarchicalObject, T, useTask, useThrelte } from '@threlte/core';
	import { Scene, WebGLRenderTarget } from 'three';
	import { onDestroy } from 'svelte';

	type $$Props = Props<Texture> & {
		width: number;
		height: number;
		camera: OrthographicCamera | PerspectiveCamera;
	};

	export let width: $$Props['width'];
	export let height: $$Props['height'];
	export let camera: $$Props['camera'];

	const scene = new Scene();

	const target = new WebGLRenderTarget();
	$: target.setSize(width, height);

	const { renderer } = useThrelte();

	const { start, stop } = useTask(() => {
		const last = renderer.getRenderTarget();
		renderer.setRenderTarget(target);
		renderer.render(scene, camera);
		renderer.setRenderTarget(last);
	});

	onDestroy(target.dispose);
</script>

<HierarchicalObject>
	<T is={scene}>
		<slot ref={target.texture} />
	</T>
</HierarchicalObject>

<T
	is={target.texture}
	{...$$restProps}
	on:create={({ cleanup }) => {
		start();
		return cleanup(stop);
	}}
/>
