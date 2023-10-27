import scene from './Scene.svelte';
import type { PageLoad } from './$types';
import { set } from './context';
import { writable } from 'svelte/store';

export const load: PageLoad = ({ data }) => {
	return {
		...data,
		scene,
		setContext() {
			set({
				width: writable(2),
				height: writable(2),
				radius: writable(0.5)
			});
		}
	};
};
