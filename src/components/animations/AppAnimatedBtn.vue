<template>
	<div class="btn-container">
		{{ loader }}
		<button
			type="submit"
			class="btn"
			:class="loader.loading ? 'animating' : ''"
		>
			Send
		</button>
	</div>
</template>

<script>
export default {
	name: "AppAnimatedBtn",

	props: {
		loader: {
			type: Object,
			required: true
		}
	}
};
</script>


<style scoped>
:root {
	--squish-animation-time: 2000ms;
	--progress-animation-time: 1000ms;
	--circle-animation-time: 300ms;
	--checkmark-animation-time: 300ms;
	--btn-width: 125px;
	--btn-height: 40px;
}

.btn {
	@apply bg-purple-400 text-white relative border-0 rounded cursor-pointer font-bold p-2;
}

.btn.animating {
	background-color: transparent;
	color: transparent;
	user-select: none;
	cursor: default;
	animation: hide 0ms calc(500ms + 1000ms) forwards;
}

.btn::before {
	content: "";
	display: none;
	position: absolute;
	background-color: #2b2d2f;
	inset: 0;
	border-radius: 0.125em;
}
.btn::before {
	animation: squish 500ms cubic-bezier(0.26, 0.6, 0.46, 1.7) forwards;
}
.btn::after {
	content: "";
	display: none;
	position: absolute;
	background-color: #aaa;
	left: 51%;
	right: 51%;
	top: 45%;
	bottom: 45%;
	border-radius: 0.25em;
	animation: progress 1000ms 500ms;
	animation-fill-mode: forwards;
}

.btn.animating::before,
.btn.animating::after {
	display: block;
}

.btn.animating + .checkmark-container {
	background-color: #2b2d2f;
	border-radius: 0.25em;
	width: 0;
	height: 0;
	animation: circle 300ms calc(500ms + 1000ms) forwards
		cubic-bezier(0.26, 0.6, 0.46, 1.7);
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn.animating + .checkmark-container .checkmark-svg {
	stroke: white;
	width: 25px;
	stroke-dashoffset: 40.84104919433594;
	stroke-dasharray: 40.84104919433594;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 3px;
	animation: checkmark 300ms calc(500ms +1000ms + 300ms) forwards;
}
@keyframes squish {
	100% {
		left: -25%;
		right: -25%;
		top: 45%;
		bottom: 45%;
		border-radius: 0.25em;
	}
}

@keyframes progress {
	100% {
		left: -25%;
		right: -25%;
	}
}

@keyframes hide {
	100% {
		display: none;
	}
}
</style>