<script lang="ts">
	import { luminance } from '$lib/colors';
	import { T } from '@threlte/core';

	export let context: OffscreenCanvasRenderingContext2D;

	$: imageData = context.getImageData(
		0,
		0,
		context.canvas.width,
		context.canvas.height
	);

	$: pixels = new Uint32Array(imageData.data.buffer ?? []);

	const POSITION_ITEM_SIZE = 3;

	const createPositions = (
		width: number,
		height: number,
		pixels: Uint32Array
	): Float32Array => {
		const positions = new Float32Array(POSITION_ITEM_SIZE * pixels.length);
		for (let i = 0; i < pixels.length; i += 1) {
			positions[POSITION_ITEM_SIZE * i + 0] = (i % width) - 0.5 * width;
			positions[POSITION_ITEM_SIZE * i + 1] =
				0 - Math.floor(i / width) + 0.5 * height;
			positions[POSITION_ITEM_SIZE * i + 2] = luminance(pixels[i] / 0xff);
		}

		return positions;
	};

	$: rgbas = new Uint8ClampedArray(pixels.buffer);
	$: positions = createPositions(
		context.canvas.width,
		context.canvas.height,
		pixels
	);
</script>

<T.Points>
	<T.BufferGeometry>
		<T.BufferAttribute
			normalized
			args={[rgbas, 4]}
			attach={(geometry, self) => {
				geometry.setAttribute('color', self);
			}}
		/>
		<T.BufferAttribute
			args={[positions, POSITION_ITEM_SIZE]}
			attach={(geometry, self) => {
				geometry.setAttribute('position', self);
			}}
		/>
	</T.BufferGeometry>
	<T.PointsMaterial vertexColors />
</T.Points>
