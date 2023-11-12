import { derived, readonly, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { currentWritable } from '@threlte/core';
import { degToRad } from 'three/src/math/MathUtils';

export const rotate = (size = 1) => {
	const position = currentWritable(0.5 * size);
	const groupPosition = writable(0);
	const rotation = writable(0);
	const degrees = tweened(0);
	const radians = derived(degrees, degToRad);
	const rolling = currentWritable(false);
	const rotate = async (dir: -1 | 1) => {
		if (!rolling.current) {
			rolling.set(true);

			if (Math.sign(position.current) === dir) {
				groupPosition.update((xx) => xx + dir * size);
				position.update((x) => (x *= -1));
			}

			const adjusted = Math.sign(position.current);

			await degrees.update((u) => u + adjusted * 90);

			groupPosition.update((xx) => xx - adjusted * size);

			await degrees.set(0, { duration: 0 });

			rotation.update((rz) => rz + adjusted * 0.5 * Math.PI);
			rolling.set(false);
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
		rotation: readonly(rotation),
		position: readonly(position),
		groupPosition: readonly(groupPosition)
	};
};
