<script lang="ts">
	import type { PerspectiveCamera } from 'three';
	import { T, useTask, useThrelte } from '@threlte/core';
	import { onMount } from 'svelte';

	let leftCamera: PerspectiveCamera;
	let rightCamera: PerspectiveCamera;

	const { autoRender, renderStage, renderer, scene, size } = useThrelte();

	onMount(() => {
		const before = autoRender.current;
		autoRender.set(false);
		return () => {
			autoRender.set(before);
		};
	});

	$: halfWidth = 0.5 * $size.width;

	$: aspect = halfWidth / $size.height;

	$: if (leftCamera !== undefined) {
		leftCamera.aspect = aspect;
		leftCamera.updateProjectionMatrix();
	}

	$: if (rightCamera !== undefined) {
		rightCamera.aspect = aspect;
		rightCamera.updateProjectionMatrix();
	}

	useTask(
		() => {
			const before = renderer.getScissorTest();
			renderer.setScissorTest(true);
			renderer.setViewport(0, 0, halfWidth, $size.height);
			renderer.setScissor(0, 0, halfWidth, $size.height);
			renderer.render(scene, leftCamera);
			renderer.setViewport(halfWidth, 0, halfWidth, $size.height);
			renderer.setScissor(halfWidth, 0, halfWidth, $size.height);
			renderer.render(scene, rightCamera);
			renderer.setScissorTest(before);
		},
		{ stage: renderStage, autoInvalidate: false },
	);
</script>

<T.PerspectiveCamera
	position={5}
	bind:ref={leftCamera}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
/>
<T.PerspectiveCamera position.z={5} bind:ref={rightCamera} />

<T.Mesh>
	<T.BoxGeometry />
	<T.MeshNormalMaterial />
</T.Mesh>
