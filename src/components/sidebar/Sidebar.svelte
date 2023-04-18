<script>
	import SidebarItem from './SidebarItem.svelte';
</script>

<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 240px;">
	<a
		href="/dashboard"
		class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
	>
		<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
		<span class="fs-4">Sidebar</span>
	</a>
	<hr />
	<ul class="nav nav-pills flex-column mb-auto">
		<SidebarItem href="/" icon="home" label="Home" active />
		<SidebarItem href="#" icon="speedometer2" label="Dashboard" />
		<SidebarItem href="#" icon="table" label="Orders" />
		<SidebarItem href="#" icon="grid" label="Products" />
		<SidebarItem href="#" icon="people-circle" label="Customers" />
	</ul>
</div>
