<script lang="ts">
	import { Grid, OrbitControls, Portal, interactivity, useTexture } from '@threlte/extras';
	import { T, useThrelte } from '@threlte/core';
	import { derived } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { base } from '$app/paths';

	const BOX_SIZE = 1;

	const HALF_BOX_SIZE = 0.5 * BOX_SIZE;

	const { scene } = useThrelte();

	const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);

	const degrees = tweened(0);
	const radians = derived(degrees, degreesToRadians);

	let xx = 0;

	let x = HALF_BOX_SIZE;
	let dir: 'left' | 'right' = 'left';
	let rz = 0;

	let rolling = false;

	const rotateLeft = async () => {
		if (!rolling) {
			rolling = true;
			if (dir !== 'left') {
				dir = 'left';
				xx -= BOX_SIZE;
				x = HALF_BOX_SIZE;
			}
			await degrees
				.update((u) => u + 90)
				.then(() => {
					xx -= BOX_SIZE;
					degrees.set(0, { duration: 0 });
					rz += 0.5 * Math.PI;
					rolling = false;
				});
		}
	};

	const rotateRight = async () => {
		if (!rolling) {
			rolling = true;
			if (dir !== 'right') {
				dir = 'right';
				xx += BOX_SIZE;
				x = -HALF_BOX_SIZE;
			}
			await degrees
				.update((u) => u - 90)
				.then(() => {
					xx += BOX_SIZE;
					degrees.set(0, { duration: 0 });
					rz -= 0.5 * Math.PI;
					rolling = false;
				});
		}
	};

	const texture = useTexture(`${base}/uv_grid.jpeg`);

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

<T.Group on:click={rotateLeft} on:contextmenu={rotateRight} rotation.z={$radians} position.x={xx}>
	{#await texture then map}
		<T.Mesh position.x={x} position.y={HALF_BOX_SIZE} rotation.z={rz}>
			<T.MeshStandardMaterial {map} color="ff00ff" />
			<T.BoxGeometry />
		</T.Mesh>
	{/await}
</T.Group>
