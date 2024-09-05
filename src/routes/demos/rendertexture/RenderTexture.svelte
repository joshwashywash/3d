<script lang="ts">
	import type {
		OrthographicCamera,
		PerspectiveCamera,
		Scene,
		Texture,
	} from 'three';
	import type { Props } from '@threlte/core';
	import { HierarchicalObject, T, useTask, useThrelte } from '@threlte/core';
	import { WebGLRenderTarget } from 'three';
	import { onDestroy } from 'svelte';

	type $$Props = Props<Texture> & {
		width: number;
		height: number;
		camera: OrthographicCamera | PerspectiveCamera;
	};

	export let width: $$Props['width'];
	export let height: $$Props['height'];
	export let camera: $$Props['camera'];

	let scene: Scene;

	const target = new WebGLRenderTarget();
	$: target.setSize(width, height);

	const { renderer } = useThrelte();

	// start when texture is added
	const { start, stop } = useTask(
		() => {
			const last = renderer.getRenderTarget();
			renderer.setRenderTarget(target);
			renderer.render(scene, camera);
			renderer.setRenderTarget(last);
		},
		{ autoStart: false },
	);

	onDestroy(target.dispose);
</script>

<HierarchicalObject>
	<T.Scene bind:ref={scene}>
		<slot ref={target.texture} />
	</T.Scene>
</HierarchicalObject>

<T
	is={target.texture}
	{...$$restProps}
	on:create={({ cleanup }) => {
		start();
		return cleanup(stop);
	}}
/>
