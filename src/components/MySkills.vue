<template>
	<section class="relative">
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

				<div class="grid grid-cols-3 sm:grid-cols-4 text-center">
					<div class="m-2" v-for="(skill, index) in currentArr" :key="index">
						<i class="text-6xl" :class="[skill.icon, skill.color]"></i>
						<p>{{ skill.name }}</p>
					</div>
				</div>
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
			currentToggleType: "all",
			skills: [
				{
					type: "frontend",
					name: "JavaScript",
					icon: "fab fa-js-square",
					color: "text-yellow-400"
				},
				{
					type: "frontend",
					name: "Bootstrap",
					icon: "fab fa-bootstrap",
					color: "text-purple-600"
				},
				{
					type: "frontend",
					name: "Sass",
					icon: "fab fa-sass",
					color: "text-pink-600"
				},
				{
					type: "frontend",
					name: "CSS3",
					icon: "fab fa-css3",
					color: "text-blue-400"
				},
				{
					type: "frontend",
					name: "HTML5",
					icon: "fab fa-html5",
					color: "text-red-500"
				},
				{
					type: "backend",
					name: "PHP",
					icon: "fab fa-php",
					color: "text-purple-900"
				},
				{
					type: "backend",
					name: "mysql",
					icon: "fas fa-database",
					color: "text-yellow-600"
				}
			]
		};
	},
	methods: {
		navToggle(selection) {
			this.currentToggleType = selection;
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
	}
};
</script>

<style scoped>
.blob {
	z-index: -1;
}
</style>