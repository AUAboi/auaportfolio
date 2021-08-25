<template>
	<section class="relative my-12">
		<div class="blob w-60 left-0 opacity-40">
			<svg
				viewBox="0 0 500 500"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="100%"
				id="blobSvg"
			>
				<path
					id="blob"
					d="M333,341.5Q356,433,284,375Q212,317,112,283.5Q12,250,75,153Q138,56,250,56.5Q362,57,336,153.5Q310,250,333,341.5Z"
					fill="#d1d8e0"
				></path>
			</svg>
		</div>
		<div class="flex justify-between flex-col-reverse md:flex-row">
			<div class="relative px-3 mx-4 my-auto">
				<div class="blob w-60">
					<svg
						viewBox="0 0 500 500"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="100%"
						id="blobSvg"
					>
						<path
							id="blob"
							d="M260.5,356Q128,462,127.5,249.5Q127,37,260,143.5Q393,250,260.5,356Z"
							fill="#a29bfe"
						></path>
					</svg>
				</div>
				<h1
					class="text-lg sm:text-xl text-purple-400 leading-3 tracking-widest"
				>
					Full Stack developer
				</h1>
				<h2 class="text-3xl sm:text-4xl text-purple-700 tracking-tight">
					Hey, I am Ahsan Faisal
				</h2>
				<p class="p-1">
					Lets build something
					<span class="underline text-purple-500">awesome!</span>
				</p>
				<div class="my-2">
					<a href="#portfolio">
						<button class="bg-purple-500 text-white mr-3">
							See Projects
						</button>
					</a>
					<a href="#about">
						<button
							class="text-purple-500 border border-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
						>
							About me
						</button>
					</a>
				</div>
			</div>
			<div class="w-96 hidden md:block">
				<img class="w-full" src="../assets/person.svg" alt="" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Home"
};
</script>

<style scoped>
.blob {
	position: absolute;
	right: 0;
	opacity: 0.3;
	z-index: -1;
}

button {
	@apply px-4 py-2 rounded-lg;
}
</style>