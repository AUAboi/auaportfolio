<template>
	<section class="bg-gray-100">
		<h1 class="section-heading">My Portfolio</h1>
		<div class="grid md:grid-cols-2">
			<AppProject class="mx-10 my-8" />
			<AppProject class="mx-10 my-8" />
			<AppProject class="mx-10 my-8" />
		</div>
	</section>
</template>

<script>
import AppProject from "@/components/utils/AppProject";
export default {
	name: "Portfolio",
	components: {
		AppProject
	}
};
</script>

