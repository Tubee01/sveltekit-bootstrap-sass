<script>
	import { mergeClassNames } from './utils';

	let clazz = '';
	export { clazz as class };

	export let label = '';
	/**
	 * @type {'button' | 'submit' | 'reset'}
	 */
	export let type = 'button';
	export let size = ''; // empty string for default size
	export let variant = 'primary';
	export let disabled = false;

	$: buttonClasses = mergeClassNames(
		'btn',
		size && `btn-${size}`,
		`btn-${variant}`,
		{ disabled: disabled },
		clazz
	);
</script>

<button class={buttonClasses} {type} {disabled} on:click>
	{label}
</button>
