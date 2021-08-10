<template>
	<div>
		<div class="mx-2 lg:mx-32">
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
::-moz-selection {
	@apply text-white;
	@apply bg-purple-400;
}

::selection {
	@apply text-white;
	@apply bg-purple-400;
}

#app {
	@apply mt-6;
	font-family: "Nunito Sans", sans-serif;
}
.section-heading {
	@apply text-purple-500;
	@apply text-9xl;
	@apply opacity-60;
}

@media screen and (max-width: 640px) {
	.section-heading {
		@apply text-7xl;
	}
}
</style>
