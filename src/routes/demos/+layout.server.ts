import type { LayoutServerLoad } from './$types';

// const links = import.meta.glob('./**/*/+page.svelte');
//
// const re = /(?<href>\w+)/;

// const isString = (s: unknown): s is string => typeof s === 'string';
//
// const hrefs = Object.keys(links)
// 	.map((x) => x.match(re)?.groups?.href)
// 	.filter(isString);

type Link = {
	href: string;
	text: string;
};

const links: Link[] = [
	{ href: 'rendertexture', text: 'render texture' },
	{ href: 'roundedplane', text: 'rounded plane' }
];

export const load: LayoutServerLoad = () => {
	return {
		links
	};
};
