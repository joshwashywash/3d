import type { Action } from 'svelte/action';

const draw: Action<HTMLCanvasElement, { lineWidth: number }> = (canvas, options) => {
	const context = canvas.getContext('2d');
	if (context !== null) {
		context.fillStyle = 'white';
		context.lineWidth = options.lineWidth;
		context.fillRect(0, 0, context.canvas.width, context.canvas.height);

		let downX: number | null = null;
		let downY: number | null = null;

		const onPointerMove = (e: PointerEvent) => {
			const { offsetX, offsetY } = e;
			if (downX !== null && downY !== null) {
				context.moveTo(downX, downY);
				context.lineTo(offsetX, offsetY);
				context.stroke();
				canvas.dispatchEvent(new CustomEvent('draw'));
				downX = offsetX;
				downY = offsetY;
			}
		};

		const onPointerUp = () => {
			downX = null;
			downY = null;
			canvas.removeEventListener('pointermove', onPointerMove);
		};

		const onPointerDown = (e: PointerEvent) => {
			downX = e.offsetX;
			downY = e.offsetY;
			canvas.addEventListener('pointermove', onPointerMove);
			canvas.addEventListener('pointerup', onPointerUp, { once: true });
		};

		canvas.addEventListener('pointerdown', onPointerDown);
		return {
			destroy() {
				canvas.removeEventListener('pointerdown', onPointerDown);
			}
		};
	}
};

export default draw;
