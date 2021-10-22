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
				height="60"
				width="90"
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
	emits: ["skill-click"],
	props: {
		skill: {
			required: true
		}
	}
};
</script>