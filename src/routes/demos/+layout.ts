import type { LayoutLoad } from './$types';

type Link = {
	href: string;
	text: string;
};

const links: Link[] = [
	{ href: 'drag', text: 'drag in plane' },
	{ href: 'rendertexture', text: 'render texture' },
	{ href: 'roundedplane', text: 'rounded plane' },
	{ href: 'rollingcube', text: 'rolling cube' }
];

export const load: LayoutLoad = () => {
	return {
		links
	};
};
