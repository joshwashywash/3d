import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		imgSrc: '/rosetti_pia_de_tolomei.jpeg',
		meta: {
			description: 'images in 3d',
			instructions:
				'drag in the scene to orbit the camera. mouse wheel/pinch zooms in and out. right pointer to pan the scene.',
			title: 'image'
		}
	};
};
