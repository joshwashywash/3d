<script lang="ts">
	import RoundedPlaneGeometry from './RoundedPlaneGeometry.svelte';
	import useClamp from '$lib/hooks/clamp';
	import { T, useFrame } from '@threlte/core';
	import { get } from './context';
	import { derived } from 'svelte/store';
	import { OrbitControls } from '@threlte/extras';

	const { width, height, radius } = get();

	const clamp = useClamp(0, 0.5);
	const clampedRadius = derived(radius, clamp);

	let d = 0;
	let ry = 0;
	useFrame((_, delta) => {
		d += delta;
		ry = 0.5 * Math.sin(d);
	});
</script>

<T.AmbientLight intensity={0.5} />

<T.PerspectiveCamera makeDefault position.z={5}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.Mesh rotation.y={ry}>
	<RoundedPlaneGeometry width={$width} height={$height} radius={$clampedRadius} />
	<T.MeshNormalMaterial />
</T.Mesh>
