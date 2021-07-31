<template>
	<header class="text-gray-600 body-font">
		<div
			class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
		>
			<a
				class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 text-xl"
			>
				<AppProfile class="w-1/12 mx-2 px-1" />
				<h1>AhsanAUA</h1>
			</a>
			<nav
				class="md:ml-auto flex flex-wrap items-center text-base justify-center"
			>
				<a class="mr-5 cursor-pointer hover:text-gray-900">Home</a>
				<a class="mr-5 cursor-pointer hover:text-gray-900">Projects</a>
				<a class="mr-5 cursor-pointer hover:text-gray-900">Skills</a>
				<a class="mr-5 cursor-pointer hover:text-gray-900">About</a>
			</nav>
		</div>
	</header>
</template>

<script>
import AppProfile from "@/components/utils/AppProfile";

export default {
	name: "Header",
	components: {
		AppProfile
	}
};
</script>