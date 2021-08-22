<template>
	<div class="text-center">
		<div class="grid grid-cols-1 md:grid-cols-2" v-if="projects.length">
			<div class="m-2" v-for="(project, index) in projects" :key="index">
				<AppProject @show-modal="sendProject(project)" :project="project" />
			</div>
		</div>
		<div class="p-2 m-2" v-else>
			<p>
				Oops, seems like this skill wasn't added to a project. You can check my
				github for this skill
				<a
					class="text-blue-600 underline"
					target="_blank"
					:href="
						`https://github.com/AUAboi?tab=repositories&q=&type=&language=${skill.toLowerCase()}`
					"
					>Link</a
				>
			</p>
		</div>
	</div>
</template>

<script>
import AppProject from "@/components/utils/AppProject";

export default {
	name: "AppPortfolioModal.vue",
	components: {
		AppProject
	},
	props: {
		projects: {
			required: true
		},
		skill: {
			required: true
		}
	},
	methods: {
		sendProject(project) {
			this.$emit("render", project);
		}
	}
};
</script>

<style>
</style>