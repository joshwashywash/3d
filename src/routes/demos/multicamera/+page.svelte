<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<Canvas>
	<T.Color args={['black']} attach="background" />
	<Scene />
</Canvas>
