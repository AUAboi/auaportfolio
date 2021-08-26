<template>
	<article class="m-4">
		<div class="border-2 border-gray-200 rounded-lg overflow-hidden">
			<img
				class="lg:h-48 md:h-36 w-full object-cover object-center"
				:src="'../../assets/portfolio/' + project.img"
				alt="project"
			/>
			<div class="p-6">
				<span
					v-for="(skill, index) in project.skills"
					:key="index"
					class="tracking-widest text-xs font-medium text-gray-500 mb-1 mr-3"
				>
					{{ skill }}
				</span>
				<h1 class="text-lg font-medium text-gray-900 mb-3">
					{{ project.title }}
				</h1>
				<p class="leading-relaxed mb-3">
					{{ project.intro }}
				</p>
				<div class="flex items-center flex-wrap ">
					<a
						@click.prevent="$emit('show-modal', project)"
						class="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
						>Learn More
						<svg
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M5 12h14"></path>
							<path d="M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name: "AppProject",
	props: {
		project: {
			required: true,
			type: Object
		}
	}
};
</script>

<style>
</style>