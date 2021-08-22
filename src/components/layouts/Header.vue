<template>
	<header class="text-gray-600 body-font">
		<div class="flex flex-wrap flex-row items-center justify-between md:mx-16">
			<a
				class="flex title-font font-medium items-center text-gray-900 md:mb-0 text-3xl"
			>
				<AppProfile class="w-16 mx-2 px-1" />
				<h1>Ahsan<span class="text-purple-700">Faisal</span></h1>
			</a>
		</div>
		<Navigation />
	</header>
</template>

<script>
import AppProfile from "@/components/utils/AppProfile";

import Navigation from "@/components/layouts/Navigation";

export default {
	name: "Header",
	components: {
		AppProfile,
		Navigation
	}
};
</script>

