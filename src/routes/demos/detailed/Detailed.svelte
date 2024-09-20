<script lang="ts">
	import type {
		DetailedProps,
		DetailedEvents,
		DetailedSlots,
	} from './Detailed.svelte';
	import { LOD } from 'three';
	import { forwardEventHandlers, injectPlugin, T } from '@threlte/core';
	import { onMount } from 'svelte';

	type $$Props = Required<DetailedProps>;
	type $$Events = DetailedEvents;
	type $$Slots = DetailedSlots;

	export let distances: $$Props['distances'];
	export let hysteresis: $$Props['hysteresis'] = 0;

	const lod = new LOD();

	injectPlugin('detailed', ({ ref }) => {
		onMount(() => {
			if (ref.parent === lod) {
				lod.levels.length = 0;
				lod.children.forEach((object, index) => {
					lod.levels.push({ object, hysteresis, distance: distances[index] });
				});
			}
		});
	});

	const component = forwardEventHandlers();
</script>

<T is={lod} let:ref bind:this={$component} {...$$restProps}>
	<slot {ref} />
</T>
