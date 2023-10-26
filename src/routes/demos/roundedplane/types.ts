import type { Writable } from 'svelte/store';

export type Context = {
	height: Writable<number>;
	radius: Writable<number>;
	width: Writable<number>;
};
