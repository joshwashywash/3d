import type { Writable } from 'svelte/store';

export type Context = {
	color: Writable<string>;
	text: Writable<string>;
};
