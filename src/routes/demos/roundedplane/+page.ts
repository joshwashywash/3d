import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		camera: {
			position: [0, 0, 5] as const
		},
		plane: {
			width: 2,
			height: 2,
			radius: 0.5
		},
		meta: {
			description: 'Implementation of a rounded plane geometry in Threlte',
			title: 'Rounded Plane Geometry Example'
		}
	};
};
