<script lang="ts">
	import Detailed from './Detailed.svelte';
	import { OrbitControls, interactivity } from '@threlte/extras';
	import { T } from '@threlte/core';

	let show = false;
	interactivity();
</script>

<T.PerspectiveCamera makeDefault position.z={5}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.Mesh
	position.x={2}
	position.y={2}
	on:click={() => {
		show = !show;
	}}
>
	<T.BoxGeometry />
</T.Mesh>

<Detailed distances={[0, 10]}>
	<T.Mesh>
		<T.SphereGeometry />
	</T.Mesh>
	<T.Mesh>
		<T.BoxGeometry />
	</T.Mesh>
</Detailed>
