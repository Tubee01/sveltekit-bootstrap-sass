<script>
	import { mergeClassNames } from '../utils';
	import HelperText from './HelperText.svelte';

	let clazz = '';
	export { clazz as class };

	export let label = '';
	export let name = '';
	export let id = name;
	export let type = 'text';
	export let value = '';
	export let required = false;
	export let disabled = false;
	export let readonly = false;
	export let helpText = '';
	export let error = false;

	$: inputClasses = mergeClassNames('form-control', { 'is-invalid': error }, clazz);
</script>

<div class="mb-3">
	<label for={id} class="form-label">{label}</label>
	<input {type} {id} class={inputClasses} {value} {required} {disabled} {readonly} {name} />
	<HelperText text={helpText} {error} />
</div>
