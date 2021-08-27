<template>
	<Header />
	<main>
		<Home class="md:mx-16" id="home" />
		<About id="about" />
		<MySkills :projects="projects" :skills="skills" id="skills" />
		<Portfolio :projects="projects" id="portfolio" />
		<Contact id="contact" />

		<Services />
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
import Services from "@/components/Services";

import projects from "@/data/projects";
import skills from "@/data/skills";

export default {
	name: "App",
	components: {
		Header,
		Home,
		About,
		MySkills,
		Portfolio,
		Contact,
		Services,
		Footer
	},
	data(){
		return {
			projects: [],
			skills: []
		}
	},
	mounted() {
		this.projects = projects;
		this.skills = skills;
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
	@apply mt-6 overflow-x-hidden;
	font-family: "Nunito Sans", sans-serif;
}

html {
	scroll-behavior: smooth;
}

.section-heading {
	@apply text-purple-500 text-6xl md:text-7xl mx-3 mt-4 text-center;
}

.blob {
	z-index: -1;
}
</style>
