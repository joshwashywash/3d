<script lang="ts">
	import Controls from '$lib/components/camera/Controls.svelte';
	import draw from './draw';
	import portal from '$lib/actions/portal';
	import type { SuzanneGLTF } from './types';
	import { PerspectiveCamera } from 'three';
	import { T } from '@threlte/core';
	import { base } from '$app/paths';
	import { get as getPortalContext } from '../portalContext';
	import { useGltf } from '@threlte/extras';

	export let width = 128;
	export let height = width;

	let canvas: HTMLCanvasElement;
	const portal$ = getPortalContext();

	const gltf = useGltf<SuzanneGLTF>(`${base}/suzanne/Suzanne.gltf`);
	const camera = new PerspectiveCamera();
</script>

<div class="flex flex-col gap-2 items-center" use:portal={$portal$}>
	<p class="text-blue">draw in the white square</p>
	<canvas
		on:touchstart|preventDefault
		{width}
		{height}
		use:draw={{ lineWidth: 2 }}
		bind:this={canvas}
	/>
</div>

<T.Color args={['black']} attach="background" />

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
				{#if canvas !== undefined}
					<T.CanvasTexture
						image={canvas}
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
				{/if}
			</T.MeshStandardMaterial>
		</T.Mesh>
	{/await}
</Controls>
