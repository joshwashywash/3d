<script lang="ts">
	import { OrbitControls } from '@threlte/extras';
	import { T } from '@threlte/core';

	const cellWidth = 4;
	const cellHeight = 4;
	const cellCount = 4;
	const width = cellWidth * cellCount;
	const height = cellHeight * cellCount;

	const randomInteger = (min: number, max: number) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	};

	const randomColorString = () => {
		return `hsl(${randomInteger(0, 360)} ${randomInteger(0, 101)}% ${randomInteger(0, 101)}%)`;
	};

	const luminance = (n: number) => {
		return 0.2126 * red(n) + 0.7152 * green(n) + 0.0722 * blue(n);
	};

	const red = (color: number) => {
		return (color >> 24) & 0xff;
	};

	const green = (color: number) => {
		return (color >> 16) & 0xff;
	};

	const blue = (color: number) => {
		return (color >> 8) & 0xff;
	};

	const canvas = new OffscreenCanvas(width, height);
	const context = canvas.getContext('2d');
	if (context !== null) {
		for (let i = 0; i < cellCount; i += 1) {
			for (let j = 0; j < cellCount; j += 1) {
				context.fillStyle = randomColorString();
				context.fillRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
			}
		}
	}

	const imageData = context?.getImageData(0, 0, canvas.width, canvas.height);
	const pixels = new Uint32Array(imageData?.data.buffer ?? []);
	const rgbas = new Uint8ClampedArray(pixels.buffer);

	const POSITION_ITEM_SIZE = 3;
	const positions = new Float32Array(POSITION_ITEM_SIZE * pixels.length);
	for (let i = 0; i < pixels.length; i += 1) {
		positions[POSITION_ITEM_SIZE * i + 0] = i % width;
		positions[POSITION_ITEM_SIZE * i + 1] = Math.floor(i / width);
		positions[POSITION_ITEM_SIZE * i + 2] = luminance(pixels[i]) / 0xff;
	}
</script>

<T.AmbientLight />

<T.PerspectiveCamera makeDefault position.z={5}>
	<OrbitControls />
</T.PerspectiveCamera>

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
