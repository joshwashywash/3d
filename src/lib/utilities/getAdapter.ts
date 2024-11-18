export default async () => {
	return await navigator.gpu.requestAdapter();
};
