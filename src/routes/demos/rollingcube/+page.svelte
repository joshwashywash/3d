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

	let x = HALF_BOX_SIZE;
	let xx = 0;

	let rz = 0;

	const rotate = (size = 1) => {
		let rolling = false;
		const rotate = async (dir: -1 | 1) => {
			if (!rolling) {
				rolling = true;

				if (Math.sign(x) === dir) {
					xx += dir * size;
					x *= -1;
				}

				const adjusted = Math.sign(x);

				await degrees.update((u) => u + adjusted * 90);

				xx -= adjusted * size;

				await degrees.set(0, { duration: 0 });

				rz += adjusted * 0.5 * Math.PI;
				rolling = false;
			}
		};
		return {
			left() {
				rotate(-1);
			},
			right() {
				rotate(1);
			}
		};
	};

	const { left, right } = rotate(BOX_SIZE);

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

<T.Group on:click={left} on:contextmenu={right} rotation.z={$radians} position.x={xx}>
	{#await texture then map}
		<T.Mesh position.x={x} position.y={HALF_BOX_SIZE} rotation.z={rz}>
			<T.MeshStandardMaterial {map} color="#ff00ff" />
			<T.BoxGeometry />
		</T.Mesh>
	{/await}
</T.Group>
