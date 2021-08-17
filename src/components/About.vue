<template>
	<section class="my-10">
		<h1 class="section-heading">About Me</h1>
		<article class="mt-8 mb-2 grid grid-rows-1 md:grid-cols-2 my-4">
			<AppProfileCard />
			<div class="bg-purple-500">
				<p class="text-white px-8 py-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
					veritatis officiis quae voluptates possimus! Hic nisi, reprehenderit
					laudantium quisquam atque saepe maiores! Voluptates vero iusto minus
					illum, asperiores perferendis incidunt.
				</p>
			</div>
		</article>
	</section>
</template>

<script>
import AppProfileCard from "@/components/utils/AppProfileCard";

export default {
	name: "About",
	components: {
		AppProfileCard
	}
};
</script>
