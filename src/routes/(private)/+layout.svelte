<script>
	import Sidebar from '$components/sidebar/Sidebar.svelte';

	let items = [
		{
			title: 'Dashboard',
			path: '/',
			icon: 'fas fa-tachometer-alt'
		},
		{
			title: 'Users',
			path: '/users',
			icon: 'fas fa-users'
		},
		{
			title: 'Settings',
			path: '/settings',
			icon: 'fas fa-cog'
		}
	];
</script>

<main class="d-flex flex-no-wrap vh-100">
	<Sidebar {items} />
	<slot />
</main>
