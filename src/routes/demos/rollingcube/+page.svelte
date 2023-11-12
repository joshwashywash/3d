<script lang="ts">
	import { Grid, OrbitControls, Portal, interactivity, useTexture } from '@threlte/extras';
	import { T, useThrelte } from '@threlte/core';
	import { base } from '$app/paths';
	import { rotate } from './rotate';

	const BOX_SIZE = 1;

	const HALF_BOX_SIZE = 0.5 * BOX_SIZE;

	const { scene } = useThrelte();

	const { left, right, radians, rotation, position, groupPosition } = rotate(BOX_SIZE);

	const texture = useTexture(`${base}/spiral.png`);

	interactivity();
</script>

<T.AmbientLight />

<Grid sectionColor="#00ffff" infiniteGrid cellColor="#00ffff" />

<T.PerspectiveCamera makeDefault position.x={5} position.y={5} position.z={5}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight color="#ff0000" let:ref position.x={-2} position.y={2} position.z={-2}>
	<Portal object={scene}>
		<T.DirectionalLightHelper args={[ref]} />
	</Portal>
</T.DirectionalLight>

<T.Group on:click={left} on:contextmenu={right} rotation.z={$radians} position.x={$groupPosition}>
	{#await texture then map}
		<T.Mesh position.x={$position} position.y={HALF_BOX_SIZE} rotation.z={$rotation}>
			<T.MeshStandardMaterial {map} />
			<T.BoxGeometry />
		</T.Mesh>
	{/await}
</T.Group>
