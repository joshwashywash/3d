import { getContext, hasContext, setContext } from 'svelte';

export default <Context>(identifier: string) => {
	const key = Symbol();
	return {
		get() {
			if (hasContext(key)) {
				return getContext<Context>(key);
			}
			throw new Error(`${identifier} context was never set`);
		},
		set(context: Context) {
			return setContext<Context>(key, context);
		}
	};
};
