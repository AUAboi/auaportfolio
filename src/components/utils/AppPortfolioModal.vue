<template>
	<div class="grid grid-cols-1 md:grid-cols-2 text-center">
		<div class="m-2" v-for="(project, index) in projects" :key="index">
			<AppProject @show-modal="sendProject(project)" :project="project" />
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