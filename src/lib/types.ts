export type CreatePipelineDescriptor = (context: {
	device: GPUDevice;
	preferredCanvasFormat: GPUTextureFormat;
}) => GPURenderPipelineDescriptor;

export type Frame = (context: {
	context: GPUCanvasContext;
	device: GPUDevice;
	pipeline: GPURenderPipeline;
}) => void;
