import { writable } from 'svelte/store';
import type { PageLoad } from './$types';
import scene from './Scene.svelte';
import { set as setContext } from './context';
import type { Context } from './context';

export const load: PageLoad = ({ data }) => {
	const context: Context = {
		color: writable('#11aaff'),
		text: writable('hello')
	};
	return {
		...data,
		scene,
		setContext,
		context
	};
};
