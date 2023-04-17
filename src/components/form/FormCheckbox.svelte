<script>
	import { mergeClassNames } from '../utils';
	import HelperText from './HelperText.svelte';

	let clazz = '';
	export { clazz as class };

	export let label = '';
	export let name = '';
	export let id = name;
	export let value = '';
	export let checked = false;
	export let required = false;
	export let disabled = false;
	export let readonly = false;
	export let helpText = '';
	export let error = false;

	$: inputClasses = mergeClassNames('form-check-input', { 'is-invalid': error }, clazz);
	$: labelClasses = mergeClassNames('form-check-label', clazz);
</script>

<div class="mb-3 form-check">
	<input
		{id}
		class={inputClasses}
		type="checkbox"
		{value}
		{checked}
		{required}
		{disabled}
		{readonly}
		{name}
	/>
	<label for={id} class={labelClasses}>{label}</label>
	<HelperText text={helpText} {error} />
</div>
