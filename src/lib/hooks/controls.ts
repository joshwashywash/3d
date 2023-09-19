import * as THREE from 'three';
import CameraControls from 'camera-controls';
import type { OrthographicCamera, PerspectiveCamera } from 'three';
import { onDestroy } from 'svelte';
import { useThrelte } from '@threlte/core';

const init = () => {
	CameraControls.install({ THREE });
	return (camera: OrthographicCamera | PerspectiveCamera) => {
		const { renderer } = useThrelte();
		const controls = new CameraControls(camera, renderer.domElement);
		onDestroy(() => {
			controls.dispose();
		});
		return controls;
	};
};

export default init();
