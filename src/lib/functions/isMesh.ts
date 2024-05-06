import type { Mesh } from 'three';

export default (o: any): o is Mesh => {
	return o.isMesh;
};
