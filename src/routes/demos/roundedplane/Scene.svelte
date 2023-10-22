<script lang="ts">
	import RoundedPlaneGeometry from './RoundedPlaneGeometry.svelte';
	import portal from '$lib/actions/portal';
	import useClamp from '$lib/hooks/clamp';
	import { OrbitControls } from '@threlte/extras';
	import { T } from '@threlte/core';
	import { derived, writable } from 'svelte/store';
	import { get as getContext } from '../portalContext';

	const portal$ = getContext();

	const width$ = writable(1);
	const height$ = writable(1);

	const radius$ = writable(0.5);

	const clamp = useClamp(0, 0.5);
	const clampedRadius$ = derived(radius$, clamp);
</script>

<div class="flex flex-col gap-2" use:portal={$portal$}>
	<label class="flex items-center gap-2">
		width
		<input type="text" pattern="\d+" class="rounded-md px-1" bind:value={$width$} />
	</label>
	<label class="flex items-center gap-2">
		height
		<input type="text" pattern="\d+" class="rounded-md px-1" bind:value={$height$} />
	</label>
	<label class="flex items-center gap-2">
		radius
		<input type="text" pattern="\d+" class="rounded-md px-1" bind:value={$radius$} />
	</label>
</div>

<T.AmbientLight intensity={0.5} />

<T.PerspectiveCamera position.z={5} makeDefault>
	<OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.Mesh>
	<RoundedPlaneGeometry width={$width$} height={$height$} radius={$clampedRadius$} />
	<T.MeshNormalMaterial />
</T.Mesh>
