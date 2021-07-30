<template>
	<button class="px-4 py-2 rounded-lg" :class="[colorBg, colorTxt]">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "AppButton",
	props: {
		colorBg: String,
		colorTxt: String,
		text: String
	}
};
</script>