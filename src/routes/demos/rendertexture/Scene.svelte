<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { OrbitControls, Text } from '@threlte/extras';
	import RenderTexture from './RenderTexture.svelte';
	import { PerspectiveCamera } from 'three';

	const width = 512;
	const height = 512;

	let x = 0;
	let _delta = 0;
	useTask((delta) => {
		_delta += delta;
		x = 2 * Math.sin(_delta);
	});

	const camera = new PerspectiveCamera();
	camera.position.setZ(5);
</script>

<T.PerspectiveCamera makeDefault position={2}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.AmbientLight />

<T.Mesh>
	<T.BoxGeometry />
	<T.MeshStandardMaterial>
		<RenderTexture {width} {height} {camera} attach="map">
			<T.Color args={['blue']} attach="background" />
			<Text
				anchorX="center"
				anchorY="middle"
				text="hello"
				fontSize={3}
				position.x={x}
			/>
			<T.AmbientLight intensity={0.5} />
			<T.DirectionalLight position.x={10} position.y={10} position.z={10} />
		</RenderTexture>
	</T.MeshStandardMaterial>
</T.Mesh>
