<script lang="ts">
	import { T, forwardEventHandlers } from '@threlte/core';
	import { Shape, ShapeGeometry } from 'three';
	import type { Events, Props, Slots } from '@threlte/core';

	type $$Props = Props<ShapeGeometry> & {
		width: number;
		height: number;
		radius: number;
	};

	type $$Slots = Slots<ShapeGeometry>;
	type $$Events = Events<ShapeGeometry>;

	export let width: $$Props['width'];
	export let height: $$Props['height'];
	export let radius: $$Props['radius'];

	$: w = 0.5 * width;

	$: h = 0.5 * height;

	$: shape = new Shape()
		.moveTo(w - radius, h)
		.lineTo(-w + radius, h)
		.arc(0, -radius, radius, 0.5 * Math.PI, Math.PI)
		.lineTo(-w, -h + radius)
		.arc(radius, 0, radius, Math.PI, 1.5 * Math.PI)
		.lineTo(w - radius, -h)
		.arc(0, radius, radius, 1.5 * Math.PI, 0)
		.lineTo(w, h - radius)
		.arc(-radius, 0, radius, 0, 0.5 * Math.PI);

	const component = forwardEventHandlers();
</script>

<T.ShapeGeometry {...$$restProps} bind:this={$component} let:ref args={[shape]}>
	<slot {ref} />
</T.ShapeGeometry>
