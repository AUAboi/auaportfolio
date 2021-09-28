<template>
	<div>
		<div
			v-for="(img, index) in imgs"
			:key="index"
			class="pic"
			@click="() => showImg(index)"
		>
			<img :src="typeof img === 'string' ? img : img.src" />
		</div>
	</div>
	<vue-easy-lightbox
		:visible="visible"
		:imgs="imgs"
		:index="index"
		@hide="handleHide"
	></vue-easy-lightbox>
</template>


<script>
export default {
	props: {
		imgs: {
			required: true,
			type: Array
		}
	},
	data() {
		return {};
	},
	methods: {
		showImg(index) {
			this.index = index;
			this.visible = true;
		},
		handleHide() {
			this.visible = false;
		}
	}
};
</script>