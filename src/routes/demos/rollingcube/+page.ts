import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		description: 'Rolling a cube on a flat surface is more complex than it sounds',
		title: 'Rolling a Cube'
	};
};
