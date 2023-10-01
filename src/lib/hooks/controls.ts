import * as THREE from 'three';
import CameraControls from 'camera-controls';
import type { OrthographicCamera, PerspectiveCamera } from 'three';
import { useThrelte } from '@threlte/core';

const init = () => {
	CameraControls.install({ THREE });
	return (camera: OrthographicCamera | PerspectiveCamera) => {
		const { renderer } = useThrelte();
		return new CameraControls(camera, renderer.domElement);
	};
};

export default init();
