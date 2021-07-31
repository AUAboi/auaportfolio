<template>
	<section class="my-10">
		<h1 class="section-heading">About Me</h1>
		<article class="mt-8 mb-2 grid grid-cols-2">
			<div class="bg-gray-300 px-6 py-10">
				<div
					class="relative bg-white w-3/4 py-6 px-8 m-auto shadow-2xl rounded-md"
				>
					<img
						class="profile-img mx-auto drop-shadow-2xl"
						src="../assets/myimg.jpg"
						s
					/>
					<h1 class="text-purple-500 text-xl font-bold text-center p-1 m-1">
						Ahsan Faisal
					</h1>
					<ul class="flex justify-around">
						<li>Developer</li>
						<li>Designer</li>
						<li>Gamer</li>
					</ul>
				</div>
			</div>

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
export default {
	name: "About"
};
</script>

<style scoped>
.profile-img {
	width: 40%;
	border-radius: 100%;

	box-shadow: -1px 3px 17px 0px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: -1px 3px 17px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -1px 3px 17px 0px rgba(0, 0, 0, 0.75);
}
</style>