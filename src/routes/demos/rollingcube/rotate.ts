import { derived, readonly, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { currentWritable } from '@threlte/core';
import { degToRad } from 'three/src/math/MathUtils';

export const rotate = (size = 1) => {
	const x = currentWritable(0.5 * size);
	const xx = writable(0);
	const rz = writable(0);
	const degrees = tweened(0);
	const radians = derived(degrees, degToRad);
	let rolling = false;
	const rotate = async (dir: -1 | 1) => {
		if (!rolling) {
			rolling = true;

			if (Math.sign(x.current) === dir) {
				xx.update((xx) => xx + dir * size);
				x.update((x) => (x *= -1));
			}

			const adjusted = Math.sign(x.current);

			await degrees.update((u) => u + adjusted * 90);

			xx.update((xx) => xx - adjusted * size);

			await degrees.set(0, { duration: 0 });

			rz.update((rz) => rz + adjusted * 0.5 * Math.PI);
			rolling = false;
		}
	};
	return {
		left() {
			rotate(-1);
		},
		right() {
			rotate(1);
		},
		radians: readonly(radians),
		rz: readonly(rz),
		x: readonly(x),
		xx: readonly(xx)
	};
};
