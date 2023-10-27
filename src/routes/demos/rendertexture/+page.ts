import { writable } from 'svelte/store';
import type { PageLoad } from './$types';
import scene from './Scene.svelte';
import { set } from './context';

export const load: PageLoad = ({ data }) => {
	return {
		...data,
		scene,
		setContext() {
			set({
				color: writable('#11aaff'),
				text: writable('hello')
			});
		}
	};
};
