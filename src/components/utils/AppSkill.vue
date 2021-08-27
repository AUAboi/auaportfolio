<template>
	<div class="m-2">
		<div v-if="skill.icon">
			<i
				@click="$emit('skill-click', skill.name)"
				class="text-6xl cursor-pointer"
				:class="[skill.icon, skill.color]"
			></i>
		</div>
		<div v-else-if="skill.svg">
			<img
				@click="$emit('skill-click', skill.name)"
				class="inline cursor-pointer"
				:src="skill.svg"
				:alt="skill.name"
			/>
		</div>

		<p class="cursor-pointer" @click="$emit('skill-click', skill.name)">
			{{ skill.name }}
		</p>
	</div>
</template>

<script>
export default {
	name: "AppSkill",
	props: {
		skill: {
			required: true
		}
	}
};
</script>