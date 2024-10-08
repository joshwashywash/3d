import { base } from '$app/paths';

export const load = () => {
	const pointRadius = 0.01;
	return {
		svg: {
			image: {
				src: base + '/uv_grid.jpg',
			},
			point: {
				radius: pointRadius,
			},
			triangle: {
				strokeWidth: 0.5 * pointRadius,
			},
			viewBox: {
				padding: 1 / 10,
			},
		},
		meta: {
			title: 'UV mapping tool',
			description: 'a work-in-progress uv mapping tool in threlte',
		},
	};
};
