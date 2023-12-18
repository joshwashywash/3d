<script lang="ts">
	import useDrag from '$lib/hooks/drag';
	import { T, useThrelte } from '@threlte/core';
	import { Vector3 } from 'three';
	import { interactivity, OrbitControls, useCursor } from '@threlte/extras';
	import { writable } from 'svelte/store';

	export let data;

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

<T.AmbientLight {...data.ambientLight} />

<T.PerspectiveCamera makeDefault {...data.camera}>
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
	<T.Mesh {...data.plane.props}>
		<T.PlaneGeometry />
		<T.MeshBasicMaterial {...data.plane.material} />
	</T.Mesh>
{/if}
