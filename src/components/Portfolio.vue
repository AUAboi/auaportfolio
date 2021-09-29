<template>
	<section class="relative">
		<AppModal width="w-2/3 md:w-1/2" v-show="show" @close="closeModal">
			<component :project="selectedProject" :is="modalComponent"></component>
		</AppModal>
		<h1 class="section-heading">My Portfolio</h1>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2">
			<div v-for="(project, index) in projects" :key="index">
				<div v-if="limit">
					<AppProjectCard
						v-if="index < 3"
						@showmodal="showModal(project)"
						:project="project"
					/>
				</div>
				<div v-else>
					<AppProjectCard @showmodal="showModal(project)" :project="project" />
				</div>
			</div>
		</div>
		<div class="text-center my-4">
			<button
				class="py-2 px-3 transition-colors bg-white text-purple-700 border-2 border-purple-700 rounded hover:bg-purple-500 hover:text-white"
				@click="limit = !limit"
			>
				{{ limit ? "See More" : "See Less" }}
			</button>
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
			projects: [],
			limit: true
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

