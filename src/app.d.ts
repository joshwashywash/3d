// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		type PageData = {
			meta: {
				description: string;
				instructions?: string;
				title: string;
			};
		};
		// interface Platform {}
	}
}

export {};
