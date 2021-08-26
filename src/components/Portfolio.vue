<template>
	<section class="relative">
		<AppModal width="w-2/3 md:w-1/2" v-show="show" @close="closeModal">
			<component :project="selectedProject" :is="modalComponent"></component>
		</AppModal>
		<h1 class="section-heading">My Portfolio</h1>
		<div class="grid md:grid-cols-2 lg:grid-cols-3">
			<AppProjectCard
				@show-modal="showModal(project)"
				v-for="(project, index) in projects"
				:key="index"
				:project="project"
			/>
		</div>
	</section>
</template>

<script>
import AppProjectCard from "@/components/cards/AppProjectCard";
import AppModal from "@/components/modals/AppModal";
import AppProjectModal from "@/components/modals/AppProjectModal";

import projects from "@/data/projects";

export default {
	name: "Portfolio",
	components: {
		AppProjectCard,
		AppModal,
		AppProjectModal
	},
	data() {
		return {
			modalComponent: "app-project-modal",
			show: false,
			selectedProject: {
				title: "",
				intro: "",
				details: "",
				skills: []
			},
			projects: []
		};
	},
	methods: {
		showModal(project) {
			this.selectedProject = project;
			this.show = true;
		},
		closeModal() {
			this.show = false;
		}
	},
	watch: {
		show() {
			//Improve this later
			//Hide overflow when modal shown
			document.querySelector("body").classList.toggle("overflow-y-hidden");
		}
	},
	created() {
		this.projects = projects;
	}
};
</script>

