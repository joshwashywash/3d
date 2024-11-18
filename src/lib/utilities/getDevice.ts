import getAdapter from './getAdapter.js';

export default async () => {
	const adapter = await getAdapter();
	return await adapter?.requestDevice();
};
