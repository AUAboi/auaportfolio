<template>
	<div class="mx-32">
		<Header />
		<main>
			<Home />
		</main>
	</div>
	<About />
	<MySkills />
</template>

<script>
import Header from "@/components/layouts/Header";

import Home from "@/components/Home";
import About from "@/components/About";
import MySkills from "@/components/MySkills";

export default {
	name: "App",
	components: {
		Header,
		Home,
		About,
		MySkills
	}
};
</script>

<style>
#app {
	@apply my-6;
}

.section-heading {
	@apply text-purple-500;
	@apply text-9xl;
	@apply opacity-60;
}
</style>
