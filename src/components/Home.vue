<template>
	<section class="relative my-12">
		<div class="flex justify-between">
			<div class="px-3 mx-4 my-auto">
				<h1 class="text-xl text-purple-400 leading-3 tracking-widest">
					Full Stack developer
				</h1>
				<h2 class="text-4xl text-purple-700 tracking-tight">
					Heading Secondary
				</h2>
				<p class="py-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
					accusamus?
				</p>
				<div class="my-2">
					<AppButton
						class="bg-purple-500 text-white mr-3"
						text="See Projects"
					/>
					<AppButton
						class="text-purple-500 border border-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
						text="About me"
					/>
				</div>
			</div>
			<div class="w-96">
				<img class="w-full" src="../assets/person.svg" alt="" />
			</div>
		</div>
	</section>
</template>

<script>
import AppButton from "@/components/utils/AppButton";
export default {
	name: "Home",
	components: {
		AppButton
	}
};
</script>

<style scoped>
.blob {
	position: absolute;
	width: 1rem;
}
</style>