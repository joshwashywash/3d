<script lang="ts">
	import type { OrthographicCamera, PerspectiveCamera } from 'three';
	import useControls from '$lib/hooks/controls';
	import { onDestroy } from 'svelte';
	import { useFrame } from '@threlte/core';

	export let camera: OrthographicCamera | PerspectiveCamera;
	export let update = true;

	const controls = useControls(camera);

	if (update) {
		useFrame((_, delta) => {
			controls.update(delta);
		});
	}

	onDestroy(() => {
		controls.dispose();
	});
</script>

<slot {controls} />
