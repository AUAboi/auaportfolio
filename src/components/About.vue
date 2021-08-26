<template>
	<section class="my-10">
		<h1 class="section-heading">About Me</h1>
		<article
			class="bg-gradient-to-t from-black to-purple-500 w-full relative mt-8 mb-2 "
		>
			<AppFloatingSquaresAnimation />

			<div class="grid grid-rows-1 md:grid-cols-2 my-4">
				<AppProfileCard />
				<div class="text-white px-8 py-4">
					<h2 class="text-center font-bold text-4xl tracking-wide">
						Always strive to learn, improve and better yourself
					</h2>
					<p class="mt-4 p-2">
						Hey, my name is Ahsan. I am a freelance web developer based in
						Faisalabad, Pakistan. I have always been really passionate about
						problem solving and puzzles. Web development, and programming in
						genral scratches that itch perfectly. Thats why I am always willing
						to learn and get better. Some of my other hobbies beside this stuff
						includes reading books and gaming
					</p>
				</div>
			</div>
		</article>
	</section>
</template>

<script>
import AppProfileCard from "@/components/cards/AppProfileCard";
import AppFloatingSquaresAnimation from "@/components/animations/AppFloatingSquaresAnimation";

export default {
	name: "About",
	components: {
		AppProfileCard,
		AppFloatingSquaresAnimation
	}
};
</script>


