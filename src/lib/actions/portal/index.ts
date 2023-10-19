import type { Action } from 'svelte/action';

const portal: Action<HTMLElement, HTMLElement> = (element, parent) => {
	const update = (e: HTMLElement) => {
		e.appendChild(element);
	};
	update(parent);
	return {
		destroy() {
			element.remove();
		},
		update
	};
};

export default portal;
