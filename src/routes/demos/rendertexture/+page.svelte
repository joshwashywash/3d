<script lang="ts">
	import RenderTexture from './RenderTexture.svelte';
	import { ContactShadows, OrbitControls, Text } from '@threlte/extras';
	import { PerspectiveCamera } from 'three';
	import { T, useFrame } from '@threlte/core';

	const camera = new PerspectiveCamera();
	camera.position.setZ(10);

	let _delta = 0;
	let x = 0;
	let y = 0;

	useFrame((_, delta) => {
		_delta += delta;
		x = 2 * Math.sin(_delta);
		y = 2 * Math.cos(_delta);
	});
</script>

<T.PerspectiveCamera makeDefault position.x={5} position.y={5} position.z={5} fov={25}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[10, 10, 5]} />

<T.Mesh>
	<T.MeshStandardMaterial>
		<RenderTexture {camera}>
			<T.Color attach="background" args={['11aaff']} />
			<Text
				position.x={x}
				text={'hello'}
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
