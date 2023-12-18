<script lang="ts">
	import RenderTexture from './RenderTexture.svelte';
	import { ContactShadows, OrbitControls, Text } from '@threlte/extras';
	import { T, useTask } from '@threlte/core';

	export let data;

	let _delta = 0;
	let x = 0;
	let y = 0;

	useTask((delta) => {
		_delta += delta;
		x = 2 * Math.sin(_delta);
		y = 2 * Math.cos(_delta);
	});
</script>

<T.PerspectiveCamera {...data.camera} makeDefault>
	<OrbitControls />
</T.PerspectiveCamera>

<T.AmbientLight {...data.ambientLight} />
<T.DirectionalLight {...data.directionalLight} />

<T.Mesh>
	<T.MeshStandardMaterial>
		<RenderTexture {...data.renderTexture.props}>
			<T.Color attach="background" args={[data.renderTexture.scene.background.color]} />
			<Text anchorX="center" anchorY="middle" {...data.renderTexture.scene.text} position.x={x} />
			<T.AmbientLight {...data.renderTexture.scene.ambientLight} />
			<T.DirectionalLight {...data.renderTexture.scene.directionalLight} />
			<T.Mesh position.y={y}>
				<T.DodecahedronGeometry />
				<T.MeshStandardMaterial />
			</T.Mesh>
		</RenderTexture>
	</T.MeshStandardMaterial>
	<T.BoxGeometry />
</T.Mesh>
<ContactShadows {...data.contactShadows} />
