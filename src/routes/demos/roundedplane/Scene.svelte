<script lang="ts">
	import RoundedPlaneGeometry from './RoundedPlaneGeometry.svelte';
	import useClamp from '$lib/hooks/clamp';
	import { OrbitControls } from '@threlte/extras';
	import { T } from '@threlte/core';

	import { get } from './context';

	const { width, height, radius } = get();

	const clamp = useClamp(0, 0.5);
	$: clampedRadius = clamp($radius);
</script>

<T.AmbientLight intensity={0.5} />

<T.PerspectiveCamera position.z={5} makeDefault>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.Mesh>
	<RoundedPlaneGeometry width={$width} height={$height} radius={clampedRadius} />
	<T.MeshNormalMaterial />
</T.Mesh>
