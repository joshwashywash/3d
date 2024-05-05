import type { Action } from 'svelte/action';

const drag: Action<
	SVGElement,
	undefined,
	{ 'on:move': (e: CustomEvent<DOMPoint>) => void }
> = (element) => {
	const svg = element.ownerSVGElement;
	if (svg !== null) {
		let down = false;

		const pointerdown = () => {
			down = true;
		};

		const pointermove = (e: PointerEvent) => {
			if (down) {
				const m = svg.getScreenCTM()?.inverse();
				const detail = new DOMPoint(e.x, e.y).matrixTransform(m);

				element.dispatchEvent(
					new CustomEvent('move', {
						detail,
					}),
				);
			}
		};

		const pointerup = () => {
			down = false;
		};

		element.addEventListener('pointerdown', pointerdown);
		svg.addEventListener('pointermove', pointermove);
		svg.addEventListener('pointerup', pointerup);
		svg.addEventListener('pointerleave', pointerup);
		return {
			destroy() {
				element.removeEventListener('pointerdown', pointerdown);
				svg.removeEventListener('pointermove', pointermove);
				svg.removeEventListener('pointerup', pointerup);
				svg.removeEventListener('pointerleave', pointerup);
			},
		};
	}
};

export default drag;
