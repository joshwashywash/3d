import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		ambientLight: {
			intensity: 0.2
		},
		camera: {
			position: [5, 5, 5] as const
		},
		directionalLight: {
			color: '#ff0000',
			position: [-2, 2, -2] as const
		},
		grid: {
			cellColor: '#00ffff',
			infiniteGrid: true,
			sectionColor: '#00ffff'
		},
		meta: {
			description: 'Rolling a cube on a flat surface is more complex than it sounds',
			title: 'Rolling a Cube'
		}
	};
};
