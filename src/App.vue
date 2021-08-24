<template>
	<Header />
	<main>
		<Home class="md:mx-16" id="home" />
		<About id="about" />
		<MySkills @show-modal="true" id="skills" />
		<Portfolio id="portfolio" />
		<Contact id="contact" />
		<Footer />
	</main>
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import Home from "@/components/Home";
import About from "@/components/About";
import MySkills from "@/components/MySkills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default {
	name: "App",
	components: {
		Header,
		Home,
		About,
		MySkills,
		Portfolio,
		Contact,
		Footer
	}
};
</script>

<style>
::-moz-selection {
	@apply text-white bg-purple-400;
}

::selection {
	@apply text-white bg-purple-400;
}

body {
	@apply overflow-x-hidden;
}

#app {
	@apply mt-6 overflow-x-hidden w-screen;
	font-family: "Nunito Sans", sans-serif;
}

html {
	scroll-behavior: smooth;
}

.section-heading {
	@apply text-purple-500 text-6xl md:text-7xl opacity-50 mx-3 text-center;
}

.blob {
	z-index: -1;
}
</style>
