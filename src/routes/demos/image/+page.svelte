<script lang="ts">
	import { OrbitControls } from '@threlte/extras';
	import { T } from '@threlte/core';
	import { perceivedLuminance } from '$lib/colors';

	export let data;

	const POSITION_ITEM_SIZE = 3;

	let context: null | OffscreenCanvasRenderingContext2D = null;
	let z = 0;

	let positionX = 0;
	let positionY = 0;

	const image = new Image();
	image.src = data.imgSrc;
	image.addEventListener(
		'load',
		() => {
			const canvas = new OffscreenCanvas(image.width, image.height);
			positionX = -0.5 * image.width;
			positionY = 0.5 * image.height;
			z = 2 * image.width;
			context = canvas.getContext('2d');
			if (context !== null) {
				context.drawImage(image, 0, 0);
			}
		},
		{ once: true }
	);

	$: imageData = context?.getImageData(
		0,
		0,
		context.canvas.width,
		context.canvas.height
	);

	$: pixels = new Uint32Array(imageData?.data.buffer ?? []);

	const createPositions = (
		width: number,
		pixels: Uint32Array
	): Float32Array => {
		const positions = new Float32Array(POSITION_ITEM_SIZE * pixels.length);
		for (let i = 0; i < pixels.length; i += 1) {
			const o = POSITION_ITEM_SIZE * i;
			positions[o + 0] = i % width;
			positions[o + 1] = 0 - Math.floor(i / width);
			positions[o + 2] = data.scale * (perceivedLuminance(pixels[i]) / 0xff);
		}

		return positions;
	};

	$: positions = createPositions(context?.canvas.width ?? 0, pixels);
	$: rgbas = new Uint8ClampedArray(pixels.buffer);
</script>

<T.AmbientLight />

<T.PerspectiveCamera makeDefault position.z={z}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.Points position.x={positionX} position.y={positionY}>
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
