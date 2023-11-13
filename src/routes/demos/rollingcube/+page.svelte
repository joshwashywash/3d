<script lang="ts">
	import { Grid, OrbitControls, Portal, useTexture } from '@threlte/extras';
	import { T, useThrelte } from '@threlte/core';
	import { base } from '$app/paths';
	import { rotate } from './rotate';

	const BOX_SIZE = 1;

	const HALF_BOX_SIZE = 0.5 * BOX_SIZE;

	const { scene } = useThrelte();

	const {
		left,
		right,
		up,
		down,
		radiansX,
		radiansZ,
		rotationX,
		rotationZ,
		positionX,
		positionZ,
		groupPositionX,
		groupPositionZ
	} = rotate(BOX_SIZE);

	const texture = useTexture(`${base}/spiral.png`);
</script>

<svelte:document
	on:keydown={({ key }) => {
		switch (true) {
			case key === 'ArrowUp':
				up();
				break;
			case key === 'ArrowDown':
				down();
				break;
			case key === 'ArrowLeft':
				left();
				break;
			case key === 'ArrowRight':
				right();
				break;
		}
	}}
/>

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

<T.Group
	rotation.x={-$radiansX}
	rotation.z={$radiansZ}
	position.x={$groupPositionX}
	position.z={$groupPositionZ}
>
	{#await texture then map}
		<T.Mesh
			position.x={$positionX}
			position.y={HALF_BOX_SIZE}
			position.z={$positionZ}
			rotation.x={-$rotationX}
			rotation.z={$rotationZ}
		>
			<T.MeshStandardMaterial {map} />
			<T.BoxGeometry />
		</T.Mesh>
	{/await}
</T.Group>
