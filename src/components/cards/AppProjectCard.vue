<template>
	<vue-easy-lightbox
		:visible="visible"
		:imgs="projectImages"
		:index="index"
		@hide="handleHide"
	></vue-easy-lightbox>
	<article class="sm:m-4 w-5/6 mx-auto">
		<div
			v-show="loaded"
			class="border-2 border-gray-200 rounded-lg overflow-hidden"
		>
			<div
				v-for="(img, index) in projectImages"
				:key="index"
				class="pic"
				@click="showImg(index)"
			>
				<img
					v-if="index < 1"
					height="600"
					width="1200"
					class="lg:h-48 md:h-36 w-full object-cover object-center"
					:src="img"
					:alt="project.title"
					@load="loaded = true"
				/>
			</div>

			<div class="pl-1 py-1 md:p-6">
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
						@click.prevent="$emit('showmodal', project)"
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
		<AppProjectLoader v-if="!loaded" />
	</article>
</template>

<script>
import AppProjectLoader from "@/components/loaders/AppProjectLoader";

export default {
	name: "AppProject",
	emits: ["showmodal"],
	props: {
		project: {
			required: true,
			type: Object
		}
	},
	components: {
		AppProjectLoader
	},
	data() {
		return {
			visible: false,
			index: 0,
			projectImages: [],
			loaded: false
		};
	},
	methods: {
		getImgUrl() {
			let imgs = this.project.img || [];
			let newArr = [];
			imgs.forEach(img => {
				newArr.push(require(`../../assets/portfolio/${img}`));
			});

			this.projectImages = newArr;
		},

		showImg(index) {
			this.index = index;
			this.visible = true;
		},

		handleHide() {
			this.visible = false;
		}
	},
	watch: {
		project: {
			deep: true,
			handler() {
				this.getImgUrl();
			}
		}
	},
	created() {
		this.getImgUrl();
	}
};
</script>

<style>
</style>