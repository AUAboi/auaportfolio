<template>
	<section>
		<AppProjectModal
			v-show="show"
			:project="selectedProject"
			@close="closeModal"
		/>
		<h1 class="section-heading">My Portfolio</h1>
		<div class="grid md:grid-cols-2 lg:grid-cols-3">
			<AppProject
				v-for="(project, index) in projects"
				:key="index"
				:project="project"
				@click="showModal(project)"
			/>
		</div>
	</section>
</template>

<script>
import AppProject from "@/components/utils/AppProject";
import AppProjectModal from "@/components/utils/AppProjectModal";

export default {
	name: "Portfolio",
	components: {
		AppProject,
		AppProjectModal
	},
	data() {
		return {
			show: false,
			selectedProject: {
				title: "",
				intro: "",
				details: "",
				skills: []
			},
			projects: [
				{
					title: "Cafe App",
					intro: "A small cafe website I built for a client",
					details:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias error vero deleniti illo temporibus, eos eaque perferendis similique accusamus doloribus nostrum suscipit asperiores quasi et debitis tempore commodi ex.",
					skills: ["jquery", "php", "mysql"]
				},
				{
					title: "Quiz Site",
					intro: "Demo for quiz app",
					details:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias error vero deleniti illo temporibus, eos eaque perferendis similique accusamus doloribus nostrum suscipit asperiores quasi et debitis tempore commodi ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias error vero deleniti illo temporibus, eos eaque perferendis similique accusamus doloribus nostrum suscipit asperiores quasi et debitis tempore commodi ex.",
					skills: ["laravel", "mysql", "vue"]
				}
			]
		};
	},
	methods: {
		showModal(project) {
			this.selectedProject = project;
			this.show = true;
			this.$emit("show-modal");
		},
		closeModal() {
			this.show = false;
		}
	}
	// watch: {
	// 	show() {
	// 		//Improve this later
	// 		//Hide overflow when modal shown
	// 		// document.querySelector("body").classList.toggle("overflow-y-hidden");
	// 	}
	// }
};
</script>

