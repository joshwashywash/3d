import type { Writable } from 'svelte/store';
import useContext from '$lib/hooks/context';

export const { get, set } = useContext<Writable<HTMLElement>>('portal');
