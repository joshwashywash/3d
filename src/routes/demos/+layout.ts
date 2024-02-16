import type { LayoutLoad } from './$types';

type Link = {
	href: string;
	text: string;
};

const links: Link[] = [
	{ href: 'image', text: 'image' },
	{ href: 'rendertexture', text: 'render texture' }
];

export const load: LayoutLoad = () => {
	return {
		links
	};
};
