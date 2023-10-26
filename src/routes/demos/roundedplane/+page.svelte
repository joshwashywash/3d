<script lang="ts">
	import { get } from './context';
	const { width, height, radius } = get();
</script>

<div class="flex flex-col gap-2">
	<label class="flex items-center gap-2">
		width
		<input type="text" pattern="\d+" class="rounded-md px-1" bind:value={$width} />
	</label>
	<label class="flex items-center gap-2">
		height
		<input type="text" pattern="\d+" class="rounded-md px-1" bind:value={$height} />
	</label>
	<label class="flex items-center gap-2">
		radius
		<input type="text" pattern="\d+" class="rounded-md px-1" bind:value={$radius} />
	</label>
</div>

