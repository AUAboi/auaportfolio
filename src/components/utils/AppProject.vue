<template>
	<article class="mx-10 my-8 shadow-md hover:shadow-xl cursor-pointer max-w-sm">
		<img src="../../assets/arnold-francisca-f77Bh3inUpE-unsplash.jpg" alt="" />
		<div class="px-2 py-1">
			<div>
				<ul class="flex">
					<li
						v-for="(skill, index) in project.skills"
						:key="index"
						class="mx-1 text-gray-500"
					>
						{{ skill }}
					</li>
				</ul>
			</div>
			<p>
				{{ project.intro }}
			</p>
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