import scene from './Scene.svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		description: 'Demo using a render target as a texture in three.js.',
		title: 'Render Texture Example',
		scene
	};
};
