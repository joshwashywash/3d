import { writable } from 'svelte/store';
import type { PageLoad } from './$types';
import scene from './Scene.svelte';
import { set as setContext } from './context';
import type { Context } from './context';

export const load: PageLoad = ({ data }) => {
	const context: Context = {
		width: writable(2),
		height: writable(2),
		radius: writable(0.5)
	};
	return {
		...data,
		scene,
		setContext,
		context
	};
};
