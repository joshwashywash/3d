<script lang="ts">
	import RoundedPlaneGeometry from './RoundedPlaneGeometry.svelte';
	import { OrbitControls } from '@threlte/extras';
	import { T, useTask } from '@threlte/core';

	let d = 0;
	let ry = 0;
	useTask((delta) => {
		d += delta;
		ry = 0.5 * Math.sin(d);
	});
</script>

<T.AmbientLight intensity={1} />

<T.PerspectiveCamera makeDefault position.z={5}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.Mesh rotation.y={ry}>
	<RoundedPlaneGeometry width={2} height={2} radius={0.5} />
	<T.MeshNormalMaterial />
</T.Mesh>
