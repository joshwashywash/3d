<script lang="ts">
	import { get } from './context';

	const { color, text } = get();
</script>

<div class="flex flex-col gap-2">
	<label class="flex items-center gap-2">
		color
		<input type="color" class="rounded-md px-1" bind:value={$color} />
	</label>
	<label class="flex items-center gap-2">
		text
		<input class="px-3 py-2 rounded-md" bind:value={$text} />
	</label>
</div>

