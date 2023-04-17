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
	export let readonly = false;
	export let helpText = '';
	export let rows = 3;
	export let error = false;

	$: inputClasses = mergeClassNames('form-control', clazz, { 'is-invalid': helpText });
</script>

<div class="mb-3">
	<label for={id} class="form-label">{label}</label>
	<textarea {id} class={inputClasses} {value} {required} {disabled} {readonly} {rows} {name} />
	<HelperText text={helpText} {error} />
</div>
