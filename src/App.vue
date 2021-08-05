<template>
	<div>
		<div class="mx-32">
			<Header />
			<main class="bg-image">
				<Home />
			</main>
		</div>
	</div>

	<About />
	<MySkills />
	<Portfolio />
	<Footer />
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import Home from "@/components/Home";
import About from "@/components/About";
import MySkills from "@/components/MySkills";
import Portfolio from "@/components/Portfolio";

export default {
	name: "App",
	components: {
		Header,
		Home,
		About,
		MySkills,
		Portfolio,
		Footer
	}
};
</script>

<style>
#app {
	@apply mt-6;
}
.section-heading {
	@apply text-purple-500;
	@apply text-9xl;
	@apply opacity-60;
}
</style>
