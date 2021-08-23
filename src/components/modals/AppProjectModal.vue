<template>
	<div>
		<h1 class="text-xl font-semibold">{{ project.title }}</h1>
		<div class="w-full my-2">
			<img
				src="../../assets/arnold-francisca-f77Bh3inUpE-unsplash.jpg"
				class="rounded-md"
			/>
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
		<div>
			<h2 class="font-semibold tracking-wide my-3">
				Site status: {{ project.status }}
			</h2>
			<a
				class="px-2 py-1 font-thin text-white rounded-md"
				:class="disable ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500'"
				href="https://auaboi.github.io/auaahsan/dist/"
				>Visit Site</a
			>
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
	},
	data() {
		return {
			disable: true
		};
	}
};
</script>
