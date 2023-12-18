import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		ambientLight: {
			intensity: 0.5
		},
		camera: {
			position: [3, 2, 5] as const
		},
		plane: {
			material: {
				transparent: true,
				color: '#00ffff',
				opacity: 0.5
			},
			props: {
				scale: 4
			}
		},
		meta: {
			description: 'Demo showing how to drag an object in particular plane.',
			title: 'Drag Object in a Plane'
		}
	};
};
