import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async () => {
	return {
		imgSrc: `${base}/me.jpeg`,
		scaleZ: 50,
		meta: {
			description: 'images in 3d',
			instructions:
				'drag in the scene to orbit the camera. mouse wheel/pinch zooms in and out. right pointer to pan the scene.',
			title: 'image'
		}
	};
};
