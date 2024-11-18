<script lang="ts">
	import fragment from './fragment.wgsl?raw';
	import type { CreatePipelineDescriptor, Frame } from '$lib/types.js';
	import vertex from './vertex.wgsl?raw';
	import { Canvas } from '$lib/index.js';

	const createPipelineDescriptor: CreatePipelineDescriptor = (context) => {
		return {
			layout: 'auto',
			vertex: {
				module: context.device.createShaderModule({ code: vertex })
			},
			fragment: {
				module: context.device.createShaderModule({ code: fragment }),
				targets: [{ format: context.preferredCanvasFormat }]
			},
			primitive: {
				topology: 'triangle-list'
			}
		};
	};

	const frame: Frame = ({ context, device, pipeline }) => {
		const commandEncoder = device.createCommandEncoder();
		const view = context.getCurrentTexture().createView();

		const passEncoder = commandEncoder.beginRenderPass({
			colorAttachments: [
				{
					view,
					clearValue: [0, 0, 0, 0],
					loadOp: 'clear',
					storeOp: 'store'
				}
			]
		});

		passEncoder.setPipeline(pipeline);
		passEncoder.draw(3);
		passEncoder.end();

		device.queue.submit([commandEncoder.finish()]);
	};
</script>

<Canvas
	{createPipelineDescriptor}
	{frame}
></Canvas>
