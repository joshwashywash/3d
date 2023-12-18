<script lang="ts">
	import RoundedPlaneGeometry from './RoundedPlaneGeometry.svelte';
	import { OrbitControls } from '@threlte/extras';
	import { T, useTask } from '@threlte/core';

	export let data;

	let d = 0;
	let ry = 0;
	useTask((delta) => {
		d += delta;
		ry = 0.5 * Math.sin(d);
	});
</script>

<T.AmbientLight />

<T.PerspectiveCamera makeDefault {...data.camera}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.Mesh rotation.y={ry}>
	<RoundedPlaneGeometry {...data.plane} />
	<T.MeshNormalMaterial />
</T.Mesh>
