import create from '$lib/hooks/context';
import type { Context } from './types';

export const { get, set } = create<Context>('render texture');
