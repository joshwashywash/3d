import type { Actions, PageServerLoad } from './$types';
import { base } from '$app/paths';
import { fail } from '@sveltejs/kit';
import { instance, maxSize, mimeType, object } from 'valibot';
import { superValidate, withFiles } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';

const imageSchema = instance(File, [
	mimeType(['image/jpeg', 'image/png']),
	maxSize(1024 * 1024 * 10)
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

export const actions: Actions = {
	async default(event) {
		const form = await superValidate(event.request, valibot(schema));
		if (form.valid) {
			return withFiles({ form });
		}
		return fail(400, withFiles({ form }));
	}
};
