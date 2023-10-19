<script lang="ts">
	import portal from '$lib/actions/portal';
	import useClamp from '$lib/hooks/clamp';
	import { Shape } from 'three';
	import { T } from '@threlte/core';
	import { derived, writable } from 'svelte/store';
	import { get as getContext } from '../portalContext';

	const portal$ = getContext();

	const width$ = writable(1);
	const height$ = writable(1);

	const radius$ = writable(0.5);

	const clamp = useClamp(0, 0.5);
	const clampedRadius$ = derived(radius$, clamp);

	const w$ = derived(width$, (width) => 0.5 * width);
	const h$ = derived(height$, (height) => 0.5 * height);

	const shape = derived([w$, h$, clampedRadius$], ([w, h, radius]) =>
		new Shape()
			.moveTo(w - radius, h)
			.lineTo(-w + radius, h)
			.arc(0, -radius, radius, 0.5 * Math.PI, Math.PI)
			.lineTo(-w, -h + radius)
			.arc(radius, 0, radius, Math.PI, 1.5 * Math.PI)
			.lineTo(w - radius, -h)
			.arc(0, radius, radius, 1.5 * Math.PI, 0)
			.lineTo(w, h - radius)
			.arc(-radius, 0, radius, 0, 0.5 * Math.PI)
	);
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

<T.OrthographicCamera position.z={1} makeDefault zoom={100}></T.OrthographicCamera>

<T.Mesh>
	<T.MeshBasicMaterial color="blue"></T.MeshBasicMaterial>
	<T.PlaneGeometry args={[$width$, $height$]}></T.PlaneGeometry>
</T.Mesh>

<T.Mesh>
	<T.MeshBasicMaterial color="orange"></T.MeshBasicMaterial>
	<T.ShapeGeometry args={[$shape]}></T.ShapeGeometry>
</T.Mesh>
