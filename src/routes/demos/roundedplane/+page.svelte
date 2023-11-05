<script lang="ts">
	import { set } from './context';
	import { writable } from 'svelte/store';
	import Scene from './Scene.svelte';

	set({
		height: writable(2),
		radius: writable(0.5),
		width: writable(2)
	});
</script>

<Scene />
