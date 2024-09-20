import type { Events, Props, Slots } from '@threlte/core';
import { SvelteComponent } from 'svelte';
import type { LOD } from 'three';

export type DetailedProps = Props<LOD> & {
	distances: number[];
	hysteresis?: number;
};

export type DetailedEvents = Events<LOD>;
export type DetailedSlots = Slots<LOD>;

export default class Detailed extends SvelteComponent<
	DetailedProps,
	DetailedEvents,
	DetailedSlots
> {}
