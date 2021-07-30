<template>
	<section class="my-10">
		<h1 class="section-heading">About Me</h1>
		<article class="mt-8 mb-2 grid grid-cols-2">
			<div class="bg-gray-300 px-6 py-10">
				<div class="bg-white w-1/2 py-6 px-8 m-auto">
					<img class="profile-img" src="../assets/myimg.jpg" alt="" />
					<ul class="flex justify-between">
						<li>Developer</li>
						<li>Designer</li>
						<li>Gamer</li>
					</ul>
				</div>
			</div>
			<div class="bg-purple-500">
				<p class="text-white">
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
}
</style>