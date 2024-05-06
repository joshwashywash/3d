<script lang="ts">
	import Scene from './Scene.svelte';
	import createClamp from '$lib/math/clamp';
	import drag from './drag';
	import type {
		BufferAttribute,
		Face,
		InterleavedBufferAttribute,
	} from 'three';
	import type { IntersectionEvent } from '@threlte/extras';
	import { Canvas, T } from '@threlte/core';
	import { Color, Element, Folder, Pane } from 'svelte-tweakpane-ui';
	import isMesh from '$lib/functions/isMesh';

	export let data;

	const clamp = createClamp(0, 1);

	let uv: BufferAttribute | InterleavedBufferAttribute | undefined;

	let face: Face | undefined | null;

	$: indexA = face?.a ?? 0;
	$: indexB = face?.b ?? 0;
	$: indexC = face?.c ?? 0;

	$: ax = uv?.getX(indexA) ?? 0;
	$: ay = uv?.getY(indexA) ?? 0;
	$: bx = uv?.getX(indexB) ?? 0;
	$: by = uv?.getY(indexB) ?? 0;
	$: cx = uv?.getX(indexC) ?? 0;
	$: cy = uv?.getY(indexC) ?? 0;

	$: triangle = [
		{ index: indexA, x: ax, y: 1 - ay },
		{ index: indexB, x: bx, y: 1 - by },
		{ index: indexC, x: cx, y: 1 - cy },
	];

	$: points = triangle.map((t) => `${t.x},${t.y}`).join(' ');

	let invalidate: (() => void) | undefined;

	const onclick = (event: IntersectionEvent<PointerEvent>) => {
		face = event.face;
		if (isMesh(event.object)) {
			uv = event.object.geometry.getAttribute('uv');
		}
	};

	$: padding = data.svg.viewBox.padding;

	$: left = 0 - padding;
	$: top = left;
	$: right = 1 + 2 * padding;
	$: bottom = right;
	$: viewBox = `${left} ${top} ${right} ${bottom}`;

	let triangleColor = '#ffffff';
	$: pointRadius = data.svg.point.radius;
	$: strokeWidth = data.svg.triangle.strokeWidth;

	$: src = data.svg.image.src;
</script>

<Canvas>
	<T.Color args={['black']} attach="background" />
	<Scene bind:invalidate {src} {onclick} />
</Canvas>

<Pane>
	<Element>
		<svg {viewBox} xmlns="https://www.w3.org/2000/svg">
			<image href={src} width={1} height={1} />
			<polygon
				{points}
				fill="none"
				stroke={triangleColor}
				stroke-width={strokeWidth}
			/>
			<g fill={triangleColor}>
				{#each triangle as t}
					<circle
						cx={t.x}
						cy={t.y}
						r={pointRadius}
						use:drag
						on:move={(e) => {
							if (uv !== undefined) {
								const { x, y } = e.detail;
								uv.setXY(t.index, clamp(x), 1 - clamp(y));
								uv.needsUpdate = true;
								invalidate?.();
							}
						}}
					/>
				{/each}
			</g>
		</svg>
	</Element>
	<Folder title="options">
		<Color bind:value={triangleColor} label="stroke color" />
	</Folder>
</Pane>
