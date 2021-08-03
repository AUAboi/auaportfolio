<template>
	<section>
		<h1 class="section-heading">My Skills</h1>
		<article class="my-8 ">
			<ul class="flex w-full text-3xl justify-around">
				<li
					v-for="(type, index) in toggleTypes"
					:key="index"
					@click="navToggle(type)"
					class="cursor-pointer capitalize rounded-full p-2"
					:class="currentToggleType === type ? 'bg-purple-400 text-white' : ''"
				>
					{{ type }}
				</li>
			</ul>
			<div class="my-8 mx-2 p-3">
				<ul class="grid grid-cols-4 text-center">
					<li class="m-2" v-for="(skill, index) in skills" :key="index">
						<div
							v-if="
								currentToggleType === skill.type || currentToggleType === 'all'
							"
						>
							<i class="fa-5x" :class="skill.icon"></i>
							<p>{{ skill.name }}</p>
						</div>
					</li>
				</ul>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: "MySkills",
	data() {
		return {
			toggleTypes: ["all", "frontend", "backend"],
			currentToggleType: "frontend",
			skills: [
				{
					type: "frontend",
					name: "JavaScript",
					icon: "fab fa-js-square"
				},
				{
					type: "frontend",
					name: "Bootstrap",
					icon: "fab fa-bootstrap"
				},
				{
					type: "frontend",
					name: "Sass",
					icon: "fab fa-sass"
				},
				{
					type: "frontend",
					name: "CSS3",
					icon: "fab fa-css3"
				},
				{
					type: "frontend",
					name: "HTML5",
					icon: "fab fa-html5"
				},
				{
					type: "backend",
					name: "PHP",
					icon: "fab fa-php"
				},
				{
					type: "backend",
					name: "mysql",
					icon: "fas fa-database"
				}
			]
		};
	},
	methods: {
		navToggle(selection) {
			this.currentToggleType = selection;
		}
	}
};
</script>

<style scoped>
</style>