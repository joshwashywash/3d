<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	$: title = $page.data.meta?.title ?? 'title';
	$: content = $page.data.meta?.description ?? 'description';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" {content} />
</svelte:head>

<slot />
