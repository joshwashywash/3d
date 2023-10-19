<script lang="ts">
	import RenderTexture from './RenderTexture.svelte';
	import useControls from '$lib/hooks/controls';
	import { ContactShadows, Text, interactivity } from '@threlte/extras';
	import { PerspectiveCamera } from 'three';
	import { T, useFrame } from '@threlte/core';
	import { get } from '../portalContext';
	import { writable } from 'svelte/store';
	import portal from '$lib/actions/portal';

	const mainCamera = new PerspectiveCamera();
	mainCamera.position.set(5, 5, 5);
	mainCamera.fov = 25;

	const controls = useControls(mainCamera);

	const camera = new PerspectiveCamera();
	camera.position.setZ(10);

	let _delta = 0;
	let x = 0;
	let y = 0;

	useFrame((_, delta) => {
		controls.update(delta);
		_delta += delta;
		x = 2 * Math.sin(_delta);
		y = 2 * Math.cos(_delta);
	});

	interactivity();

	const portal$ = get();

	const color$ = writable('#33ff00');
	const text$ = writable('hello');
</script>

<T is={controls.camera} makeDefault />

<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[10, 10, 5]} />

<div class="flex flex-col gap-2" use:portal={$portal$}>
	<label class="flex items-center gap-2">
		color
		<input type="color" class="rounded-md px-1" bind:value={$color$} />
	</label>
	<label class="flex items-center gap-2">
		text
		<input class="px-3 py-2 rounded-md" bind:value={$text$} />
	</label>
</div>

<T.Mesh>
	<T.MeshStandardMaterial>
		<RenderTexture {camera}>
			<T.Color attach="background" args={[$color$]} />
			<Text
				position.x={x}
				text={$text$}
				color="#555"
				fontSize={4}
				anchorX="center"
				anchorY="middle"
			/>
			<T.AmbientLight intensity={0.5} />
			<T.DirectionalLight position={[10, 10, 5]} />
			<T.Mesh position.y={y}>
				<T.DodecahedronGeometry />
				<T.MeshStandardMaterial />
			</T.Mesh>
		</RenderTexture>
	</T.MeshStandardMaterial>
	<T.BoxGeometry />
</T.Mesh>
<ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
