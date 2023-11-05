<script lang="ts">
	import { set } from './context';
	import { writable } from 'svelte/store';
	import Scene from './Scene.svelte';

	set({
		color: writable('#11aaff'),
		text: writable('hello')
	});
</script>

<Scene />
