<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { ContactShadows, Text } from '@threlte/extras';
	import useControls from '$lib/hooks/controls';
	import { PerspectiveCamera } from 'three';
	import RenderTexture from './RenderTexture.svelte';

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
</script>

<T is={controls.camera} makeDefault />

<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[10, 10, 5]} />

<T.Mesh>
	<T.MeshStandardMaterial>
		<RenderTexture {camera}>
			<T.Color attach="background" args={['orange']} />
			<Text
				position.x={x}
				text="hello"
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
<ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
