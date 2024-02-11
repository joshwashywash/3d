import type { CurrentWritable } from '@threlte/core';
import type { EventMap } from '@threlte/extras';
import type { Writable } from 'svelte/store';
import { Camera, Matrix4, Plane, Raycaster, Vector2, Vector3 } from 'three';
import { readonly, writable } from 'svelte/store';

// TODO: assumes everyone wants to drag in the same way. could maybe add dispatched events
export default (canvas: HTMLCanvasElement, camera: CurrentWritable<Camera>) => {
	const plane = new Plane();
	const intersection = new Vector3();
	const matrix = new Matrix4();
	const offset = new Vector3();
	const pp = new Vector2(); // projected point
	const caster = new Raycaster();
	const enabled = writable(false);

	return {
		createOnDown(direction: Vector3, position: Writable<Vector3>) {
			return (e: EventMap['pointerdown']) => {
				enabled.set(true);
				const { object, ray } = e;
				plane.setFromNormalAndCoplanarPoint(direction, object.position);
				if (object.parent && ray.intersectPlane(plane, intersection) !== null) {
					matrix.copy(object.parent.matrixWorld).invert();
					offset.copy(intersection).sub(object.position);

					const move = (e: PointerEvent) => {
						pp.set(
							2 * (e.offsetX / canvas.width) - 1,
							1 - 2 * (e.offsetY / canvas.height)
						);
						caster.setFromCamera(pp, camera.current);
						if (caster.ray.intersectPlane(plane, intersection) !== null) {
							position.update((p) =>
								p.copy(intersection.sub(offset).applyMatrix4(matrix))
							);
						}
					};

					canvas.addEventListener('pointermove', move);
					canvas.addEventListener(
						'pointerup',
						() => {
							enabled.set(false);
							canvas.removeEventListener('pointermove', move);
						},
						{ once: true }
					);
				}
			};
		},
		enabled: readonly(enabled)
	};
};
