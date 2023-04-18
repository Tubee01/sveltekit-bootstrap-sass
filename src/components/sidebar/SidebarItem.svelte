<script>
	export let href = '#';
	export let icon = '';
	export let label = '';
	export let active = false;
</script>

<li class="nav-item">
	<a {href} class={active ? 'nav-link active' : 'nav-link text-white'}>
		<svg class="bi me-2" width="16" height="16"><use xlink:href={`#${icon}`} /></svg>
		{label}
	</a>
</li>
