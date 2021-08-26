<template>
	<div>
		<h1 class="text-xl font-semibold">{{ project.title }}</h1>
		<div class="w-full my-2">
			<img :src="`../../assets/portfolio/${project.img}`" class="rounded-md" />
		</div>
		<div>
			<h2 class="font-semibold tracking-wide">About</h2>
			<p class="text-gray-800">
				{{ project.details }}
			</p>
		</div>
		<div>
			<h2 class="font-semibold tracking-wide my-3">
				Notable Technologies used
			</h2>
			<ul class="text-gray-400 flex justify-around">
				<li
					v-for="(skill, index) in project.skills"
					:key="index"
					class="transition-colors hover:text-purple-500"
				>
					{{ skill }}
				</li>
			</ul>
		</div>
		<div class="flex justify-evenly flex-col md:flex-row">
			<div>
				<h2 class="font-semibold tracking-wide my-3">
					Site:
				</h2>
				<a
					class="px-2 py-1 font-thin text-white rounded-md"
					:class="
						!project.link ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500'
					"
					:href="project.link"
					target="_blank"
					>Visit Site</a
				>
			</div>
			<div v-if="project.github">
				<h2 class="font-semibold tracking-wide my-3">
					Github Repositary:
				</h2>
				<a
					class="px-2 py-1 font-thin text-white rounded-md bg-purple-500"
					:href="project.github"
					target="_blank"
					>Visit Repositary</a
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppProjectModal",
	props: {
		project: {
			required: true,
			type: Object
		}
	}
};
</script>
