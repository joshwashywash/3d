import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async () => {
	return {
		imgSrc: `${base}/me.jpeg`,
		scale: 100,
		meta: {
			description: 'images in 3d',
			instructions:
				'drag in the scene to orbit the camera. mouse wheel or pinch to zoom in and out. right pointer or double drag to pan the scene.',
			title: 'image'
		}
	};
};
