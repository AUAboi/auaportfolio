<template>
	<section class="my-10">
		<h1 class="section-heading">About Me</h1>
		<article
			class="bg-gradient-to-t from-black to-purple-500 w-full relative mt-8 mb-2 "
		>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div class="grid grid-rows-1 md:grid-cols-2 my-4">
				<AppProfileCard />
				<div>
					<p class="text-white px-8 py-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
						veritatis officiis quae voluptates possimus! Hic nisi, reprehenderit
						laudantium quisquam atque saepe maiores! Voluptates vero iusto minus
						illum, asperiores perferendis incidunt.
					</p>
				</div>
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


<style scoped>
/* CSS ONLY ANIMATION FOR SQUARE */
/* CREDIT: https://codepen.io/mohaiman/pen/MQqMyo */

.circles {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.circles li {
	overflow: hidden;
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	background: rgba(255, 255, 255, 0.2);
	animation: animate 25s linear infinite;
	bottom: -150px;
}

.circles li:nth-child(1) {
	left: 25%;
	width: 80px;
	height: 80px;
	animation-delay: 0s;
}

.circles li:nth-child(2) {
	left: 10%;
	width: 20px;
	height: 20px;
	animation-delay: 2s;
	animation-duration: 12s;
}

.circles li:nth-child(3) {
	left: 70%;
	width: 20px;
	height: 20px;
	animation-delay: 4s;
}

.circles li:nth-child(4) {
	left: 40%;
	width: 60px;
	height: 60px;
	animation-delay: 0s;
	animation-duration: 18s;
}

.circles li:nth-child(5) {
	left: 65%;
	width: 20px;
	height: 20px;
	animation-delay: 0s;
}

.circles li:nth-child(6) {
	left: 75%;
	width: 110px;
	height: 110px;
	animation-delay: 3s;
}

.circles li:nth-child(7) {
	left: 35%;
	width: 150px;
	height: 150px;
	animation-delay: 7s;
}

.circles li:nth-child(8) {
	left: 50%;
	width: 25px;
	height: 25px;
	animation-delay: 15s;
	animation-duration: 45s;
}

.circles li:nth-child(9) {
	left: 20%;
	width: 15px;
	height: 15px;
	animation-delay: 2s;
	animation-duration: 35s;
}

.circles li:nth-child(10) {
	left: 85%;
	width: 150px;
	height: 150px;
	animation-delay: 0s;
	animation-duration: 11s;
}

@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
		border-radius: 0;
	}

	100% {
		transform: translateY(-1000px) rotate(720deg);
		opacity: 0;
		border-radius: 50%;
	}
}
</style>