import type { CurrentWritable } from '@threlte/core';
import type { Tweened } from 'svelte/motion';
import type { Writable } from 'svelte/store';
import { currentWritable } from '@threlte/core';
import { degToRad } from 'three/src/math/MathUtils.js';
import { derived, readonly, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';

const createRotate = (size: number) => {
	const rolling = currentWritable(false);
	return (
			position: CurrentWritable<number>,
			groupPosition: Writable<number>,
			degrees: Tweened<number>,
			rotation: Writable<number>
		) =>
		async (direction: -1 | 1) => {
			if (!rolling.current) {
				rolling.set(true);

				if (Math.sign(position.current) === direction) {
					groupPosition.update((xx) => xx + direction * size);
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
};

export const rotate = (size = 1) => {
	const halfSize = 0.5 * size;
	const positionX = currentWritable(halfSize);
	const groupPositionX = writable(0);
	const rotationX = writable(0);
	const degreesX = tweened(0);
	const radiansX = derived(degreesX, degToRad);

	const positionZ = currentWritable(halfSize);
	const groupPositionZ = writable(0);
	const rotationZ = writable(0);
	const degreesZ = tweened(0);
	const radiansZ = derived(degreesZ, degToRad);

	const rotate = createRotate(size);

	const leftRight = rotate(positionX, groupPositionX, degreesZ, rotationZ);
	const upDown = rotate(positionZ, groupPositionZ, degreesX, rotationX);
	return {
		left() {
			leftRight(-1);
		},
		right() {
			leftRight(1);
		},
		up() {
			upDown(-1);
		},
		down() {
			upDown(1);
		},
		radiansX: readonly(radiansX),
		radiansZ: readonly(radiansZ),
		rotationX: readonly(rotationX),
		rotationZ: readonly(rotationZ),
		positionX: readonly(positionX),
		positionZ: readonly(positionZ),
		groupPositionX: readonly(groupPositionX),
		groupPositionZ: readonly(groupPositionZ)
	};
};
