import type { PageServerLoad } from './$types';
import { base } from '$app/paths';
import { instance, maxSize, mimeType, object } from 'valibot';

const MAX_SIZE = 1024 * 1024 * 10;

const imageSchema = instance(File, [
	mimeType(['image/jpeg', 'image/png']),
	maxSize(MAX_SIZE)
]);

const schema = object({
	image: imageSchema
});

export const load: PageServerLoad = async () => {
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
