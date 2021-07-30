<template>
	<div class="bg-container">
		<Header />
		<main>
			<Home />
		</main>
	</div>
	<About />
</template>

<script>
import Header from "@/components/layouts/Header";

import Home from "@/components/Home";
import About from "@/components/About";
export default {
	name: "App",
	components: {
		Header,
		Home,
		About
	}
};
</script>

<style>
#app {
	@apply mx-32;
	@apply my-6;
}

.section-heading {
	@apply text-purple-500;
	@apply text-9xl;
	@apply opacity-60;
}
</style>
