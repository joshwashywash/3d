import { PerspectiveCamera } from 'three';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const camera = new PerspectiveCamera();
	camera.position.setZ(10);
	return {
		ambientLight: {
			intensity: 0.5
		},
		directionalLight: {
			position: [10, 10, 5] as const
		},
		camera: {
			fov: 25,
			position: [5, 5, 5] as const
		},
		contactShadows: {
			blur: 1,
			frames: 1,
			opacity: 0.75,
			position: [0, -0.5, 0] as const
		},
		renderTexture: {
			props: {
				height: 512,
				width: 512,
				camera
			},
			scene: {
				ambientLight: {
					intensity: 0.5
				},
				directionalLight: {
					position: [10, 10, 10] as const
				},
				background: {
					color: '#11aaff'
				},
				text: {
					color: '#555555',
					fontSize: 4,
					text: 'hello'
				}
			}
		},
		meta: {
			description: 'Demo using a render target as a texture in three.js.',
			title: 'Render Texture Example'
		}
	};
};
