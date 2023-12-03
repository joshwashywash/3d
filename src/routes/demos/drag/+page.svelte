<script lang="ts">
	import { Vector3 } from 'three';
	import { T, useThrelte } from '@threlte/core';
	import { interactivity, OrbitControls } from '@threlte/extras';
	import { writable } from 'svelte/store';
	import useDrag from '$lib/hooks/drag';

	const {
		camera,
		renderer: { domElement: canvas }
	} = useThrelte();

	// put into a context if you don't want to import canvas and camera everywhere
	const { enabled, createOnDown } = useDrag(canvas, camera);
	const direction = new Vector3(0, 0, 1);
	const position = writable(new Vector3());

	const down = createOnDown(direction, position);

	interactivity();
</script>

<T.AmbientLight />

<T.PerspectiveCamera makeDefault position.z={5} position.x={3} position.y={2}>
	<OrbitControls enabled={!$enabled} />
</T.PerspectiveCamera>

<T.Mesh
	position.x={$position.x}
	position.y={$position.y}
	position.z={$position.z}
	on:pointerdown={down}
>
	<T.BoxGeometry />
</T.Mesh>

<T.Mesh scale={4}>
	<T.PlaneGeometry />
	<T.MeshBasicMaterial color="blue" transparent opacity={0.5} />
</T.Mesh>
