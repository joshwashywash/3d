// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		type PageData = {
			meta: {
				title: string;
				description: string;
			};
		};
		// interface Platform {}
	}
}

export {};
