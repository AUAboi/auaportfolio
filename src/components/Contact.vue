<template>
	<section class="text-gray-600 body-font relative my-3">
		<h1 class="section-heading">Contact Me</h1>
		<div class="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
			<div
				class="bg-pattern lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
			>
				<AppContactCard />
			</div>
			<AppContactForm />
		</div>
	</section>
</template>

<script>
import AppContactForm from "@/components/utils/AppContactForm";
import AppContactCard from "@/components/cards/AppContactCard";

export default {
	name: "Contact",
	components: {
		AppContactForm,
		AppContactCard
	}
};
</script>

<style scoped>
.bg-pattern {
	background-image: url("../assets/1629393520688.webp");
	background-size: contain;
}
</style>
