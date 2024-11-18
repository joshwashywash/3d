<script lang="ts">
	import createClamp from '../utilities/createClamp.js';
	import getDevice from '../utilities/getDevice.js';
	import type { Action } from 'svelte/action';
	import type { CreatePipelineDescriptor, Frame } from '../types.js';
	import type { Snippet } from 'svelte';

	type Props = {
		createPipelineDescriptor: CreatePipelineDescriptor;
		frame: Frame;
		noDevice?: Snippet;
	};

	let { createPipelineDescriptor, frame, noDevice }: Props = $props();

	const setup: Action<
		HTMLCanvasElement,
		{
			device: GPUDevice;
			createPipelineDescriptor: CreatePipelineDescriptor;
			frame: Frame;
		},
		{ onnullcontext: () => void; onresized: () => void }
	> = (canvas, { device, frame, createPipelineDescriptor }) => {
		const context = canvas.getContext('webgpu');

		if (context === null) {
			canvas.dispatchEvent(new CustomEvent('nullcontext'));
			return;
		}

		const format = navigator.gpu.getPreferredCanvasFormat();
		context.configure({ device, format });

		const pipeline = device.createRenderPipeline(
			createPipelineDescriptor({ device, preferredCanvasFormat: format })
		);

		const clamp = createClamp(1, device.limits.maxTextureDimension2D);

		const callFrame = () => {
			frame({ context, device, pipeline });
		};

		const ro = new ResizeObserver(([entry]) => {
			// TODO: safari doesn't have `devicePixelContentBoxSize`
			let [{ blockSize, inlineSize }] =
				entry.devicePixelContentBoxSize ?? entry.contentBoxSize;

			if (entry.devicePixelContentBoxSize === undefined) {
				blockSize *= devicePixelRatio;
				inlineSize *= devicePixelRatio;
			}

			canvas.width = clamp(inlineSize);
			canvas.height = clamp(blockSize);

			canvas.dispatchEvent(new CustomEvent('resized'));

			callFrame();
		});

		$effect(() => {
			ro.observe(canvas);
			return () => {
				ro.unobserve(canvas);
			};
		});

		callFrame();
	};
</script>

{#await getDevice() then device}
	{#if device === undefined}
		{@render noDevice?.()}
	{:else}
		<canvas
			class="h-screen w-screen"
			use:setup={{ device, frame, createPipelineDescriptor }}
			onresized={() => console.log('hello')}
		></canvas>
	{/if}
{/await}
