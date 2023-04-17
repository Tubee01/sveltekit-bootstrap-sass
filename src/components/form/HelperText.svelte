<script>
	export let text = '';
	export let error = false;
</script>

{#if text && error}
	<div class="invalid-feedback">{text}</div>
{:else if text}
	<div class="form-text">{text}</div>
{/if}
