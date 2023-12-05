<script lang="ts">
	import useDrag from '$lib/hooks/drag';
	import { T, useThrelte } from '@threlte/core';
	import { Vector3 } from 'three';
	import { interactivity, OrbitControls, useCursor } from '@threlte/extras';
	import { writable } from 'svelte/store';

	const pointer = writable('move');
	const { onPointerEnter, onPointerLeave } = useCursor(pointer);

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

<T.AmbientLight intensitiy={0.5} />

<T.PerspectiveCamera makeDefault position.x={3} position.y={2} position.z={5}>
	<OrbitControls enabled={!$enabled} />
	<T.DirectionalLight />
</T.PerspectiveCamera>

<T.Mesh
	on:pointerenter={onPointerEnter}
	on:ponterleave={onPointerLeave}
	position.x={$position.x}
	position.y={$position.y}
	position.z={$position.z}
	on:pointerdown={down}
>
	<T.BoxGeometry />
	<T.MeshStandardMaterial />
</T.Mesh>

{#if $enabled}
	<T.Mesh scale={4}>
		<T.PlaneGeometry />
		<T.MeshBasicMaterial color="#00ffff" transparent opacity={0.5} />
	</T.Mesh>
{/if}
