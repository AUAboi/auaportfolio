<template>
	<div
		class="fixed rounded-md right-4  top-8 md:right-10 md:top-6 z-50 cursor-pointer transition-all ease-in-out duration-500"
		:class="show ? 'transform rotate-180' : 'bg-white'"
	>
		<div
			class="btn-line transition-colors ease-out "
			:class="
				show
					? 'transform rotate-45 translate-x-0.5 translate-y-2.5 bg-white'
					: 'bg-purple-500'
			"
		></div>
		<div
			:class="show ? 'opacity-0 bg-white' : 'bg-purple-500'"
			class="btn-line transition-colors ease-out"
		></div>
		<div
			:class="
				show
					? 'transform -rotate-45 translate-x-0.5 -translate-y-1.5 bg-white'
					: 'bg-purple-500'
			"
			class="btn-line transition-colors ease-out"
		></div>
	</div>
</template>

<script>
export default {
	name: "AppNavMenuBtn",
	props: {
		show: {
			required: true,
			type: Boolean
		}
	}
};
</script>

<style scoped>
.btn-line {
	@apply w-6 h-1 m-1;
}
</style>