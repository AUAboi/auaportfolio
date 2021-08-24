<template>
	<div class="m-2">
		<i
			@click="$emit('skill-click', skill.name)"
			class="text-6xl cursor-pointer"
			:class="[skill.icon, skill.color]"
		></i>
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