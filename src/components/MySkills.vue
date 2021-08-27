<template>
	<section class="relative">
		<AppModal width="w-10/12" v-show="show" @close="closeModal">
			<component
				v-if="modalComponent === 'app-portfolio-modal'"
				@render="modalProject"
				:projects="sortedProjects"
				:skill="currentSkill"
				:is="modalComponent"
			></component>
			<component v-else :is="modalComponent" :project="selectedProject">
			</component>
		</AppModal>
		<h1 class="section-heading">My Skills</h1>
		<article class="my-8">
			<div class="blob absolute opacity-20 top-10 right-0">
				<svg
					viewBox="0 0 500 500"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="100%"
					id="blobSvg"
				>
					<path
						id="blob"
						d="M311.5,311Q250,372,131,311Q12,250,131,209.5Q250,169,311.5,209.5Q373,250,311.5,311Z"
						fill="#a29bfe"
					></path>
				</svg>
			</div>
			<div class="blob absolute opacity-30 top-10">
				<svg
					viewBox="0 0 500 500"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="100%"
					id="blobSvg"
				>
					<path
						id="blob"
						d="M351,306.5Q250,363,183,306.5Q116,250,183,221Q250,192,351,221Q452,250,351,306.5Z"
						fill="#a29bfe"
					></path>
				</svg>
			</div>
			<ul class="flex w-full text-xl md:text-2xl justify-around">
				<li
					v-for="(type, index) in toggleTypes"
					:key="index"
					@click="navToggle(type)"
					class="cursor-pointer capitalize rounded-full p-1 sm:p-2 transition-colors duration-250 ease-in-out"
					:class="currentToggleType === type ? 'bg-purple-400 text-white' : ''"
				>
					{{ type }}
				</li>
			</ul>
			<div class="mt-8 mx-2 p-3 relative">
				<div class="blob absolute opacity-30 top-10 right-16">
					<svg
						viewBox="0 0 500 500"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="100%"
						id="blobSvg"
					>
						<path
							id="blob"
							d="M314.5,279.5Q250,309,223.5,279.5Q197,250,223.5,189.5Q250,129,314.5,189.5Q379,250,314.5,279.5Z"
							fill="#a29bfe"
						></path>
					</svg>
				</div>

				<div class="grid grid-cols-3 sm:grid-cols-4 text-center ">
					<AppSkill
						v-for="(skill, index) in currentArr"
						:key="index"
						:skill="skill"
						@skill-click="showProjectsModal"
					/>
				</div>
			</div>
		</article>
	</section>
</template>

<script>
import AppModal from "@/components/modals/AppModal";
import AppProjectModal from "@/components/modals/AppProjectModal";
import AppSkill from "@/components/utils/AppSkill";
import AppPortfolioModal from "@/components/modals/AppPortfolioModal";

export default {
	name: "MySkills",
	components: {
		AppModal,
		AppPortfolioModal,
		AppProjectModal,
		AppSkill
	},
	props: {
		projects: {
			required: true
		},
		skills: {
			required: true
		}
	},
	data() {
		return {
			modalComponent: "app-portfolio-modal",
			show: false,
			sortedProjects: [],
			selectedProject: {
				title: "",
				intro: "",
				details: "",
				skills: []
			},
			currentSkill: "",
			toggleTypes: ["all", "frontend", "backend"],
			currentToggleType: "all"
		};
	},
	methods: {
		navToggle(selection) {
			this.currentToggleType = selection;
		},

		modalProject(project) {
			this.selectedProject = project;
			this.modalComponent = "app-project-modal";
		},

		showProjectsModal(skill) {
			this.currentSkill = skill;
			this.sortedProjects = this.projects.filter(project => {
				return project.skills.includes(skill.toLowerCase());
			});
			this.show = true;
		},

		closeModal() {
			this.show = false;
			this.selectedProject = {};
			this.modalComponent = "app-portfolio-modal";
		}
	},
	computed: {
		currentArr() {
			if (this.currentToggleType === "all") {
				return this.skills;
			}
			let arr = this.skills.filter(skill => {
				return skill.type === this.currentToggleType;
			});
			return arr;
		}
	},
	watch: {
		show() {
			if (this.show) {
				document.querySelector("body").classList.add("overflow-y-hidden");
			} else {
				document.querySelector("body").classList.remove("overflow-y-hidden");
			}
		}
	}
};
</script>

<style scoped>
.blob {
	z-index: -1;
}
</style>