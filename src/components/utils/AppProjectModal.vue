<template>
	<transition
		enter-active-class="transition ease-out duration-200 transform"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="transition ease-in duration-200 transform"
		leave-from-class="opacity-100"
		leave-to-class="opacity-0"
	>
		<div class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
			<div
				@click.self="$emit('close')"
				class="flex items-start justify-center min-h-screen pt-10 text-center"
			>
				<transition
					enter-active-class="transition ease-out duration-300 transform "
					enter-from-class="opacity-0 translate-y-10 scale-95"
					enter-to-class="opacity-100 translate-y-0 scale-100"
					leave-active-class="ease-in duration-200"
					leave-from-class="opacity-100 translate-y-0 scale-100"
					leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
				>
					<div
						class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-3/4 md:w-1/2 relative"
					>
						<div
							@click="$emit('close')"
							class="absolute right-4 top-4 text-4xl z-20 text-red-500 cursor-pointer"
						>
							<i class="fas fa-times-circle"></i>
						</div>
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
								:class="
									disable ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500'
								"
								href="https://auaboi.github.io/auaahsan/dist/"
								>Visit Site</a
							>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</transition>
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
