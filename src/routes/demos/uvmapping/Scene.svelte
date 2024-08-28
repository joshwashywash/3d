<script lang="ts">
	import type { EventMap } from '@threlte/extras';
	import {
		OrbitControls,
		PerfMonitor,
		interactivity,
		useTexture,
	} from '@threlte/extras';
	import { T, useThrelte } from '@threlte/core';

	interactivity({
		filter(items) {
			return items.slice(0, 1);
		},
	});

	export let src: string;
	export let onclick: (event: EventMap['click']) => void;

	$: texture = useTexture(src);

	const threlteContext = useThrelte();

	export const invalidate = threlteContext.invalidate;
</script>

<T.PerspectiveCamera makeDefault position={5}>
	<OrbitControls />
</T.PerspectiveCamera>

<PerfMonitor showGraph={false} />

{#await texture then map}
	<T.Mesh on:click={onclick}>
		<T.BoxGeometry />
		<T.MeshBasicMaterial {map} />
	</T.Mesh>
{/await}
