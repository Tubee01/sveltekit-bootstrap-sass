<script>
	import { mergeClassNames } from '../utils';
	import HelperText from './HelperText.svelte';

	let clazz = '';
	export { clazz as class };

	export let label = '';
	export let name = '';
	export let id = name;
	export let value = '';
	export let required = false;
	export let disabled = false;
	export let helpText = '';
	export let error = false;
	/**
	 * @type {Array<{value: string, label: string}>}
	 */
	export let options = [];

	$: inputClasses = mergeClassNames('form-select', { 'is-invalid': helpText }, clazz);
</script>

<div class="mb-3">
	<label for={id} class="form-label">{label}</label>
	<select {id} class={inputClasses} {value} {required} {disabled} {name}>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
	<HelperText text={helpText} {error} />
</div>
