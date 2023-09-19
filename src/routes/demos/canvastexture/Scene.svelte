<script lang="ts">
	import Controls from '$lib/components/camera/Controls.svelte';
	import type { SuzanneGLTF } from './types';
	import type { Writable } from 'svelte/store';
	import { PerspectiveCamera } from 'three';
	import { T } from '@threlte/core';
	import { getContext } from 'svelte';
	import { useGltf } from '@threlte/extras';

	const canvas = getContext<Writable<HTMLCanvasElement | null>>('canvas');

	const gltf = useGltf<SuzanneGLTF>('/suzanne/Suzanne.gltf');
	const camera = new PerspectiveCamera();
</script>

<T is={camera} position.z={10} makeDefault />

<T.DirectionalLight position={[10, 10, 10]} />
<T.AmbientLight intensity={0.3} />

<Controls {camera} let:controls>
	{#await gltf then suzanne}
		<T.Mesh
			on:create={({ ref }) => {
				controls.fitToBox(ref, true);
			}}
			geometry={suzanne.nodes.Suzanne.geometry}
		>
			<T.MeshStandardMaterial>
				<T.CanvasTexture
					image={$canvas}
					attach="map"
					on:create={({ cleanup, ref }) => {
						const update = () => {
							ref.needsUpdate = true;
						};
						ref.image.addEventListener('draw', update);
						cleanup(() => {
							ref.image.removeEventListener('draw', update);
						});
					}}
				/>
			</T.MeshStandardMaterial>
		</T.Mesh>
	{/await}
</Controls>
