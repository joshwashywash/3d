import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		imgSrc: '/rosetti_pia_de_tolomei.jpeg',
		meta: {
			description: '2d images in 3d',
			title: 'image'
		}
	};
};
