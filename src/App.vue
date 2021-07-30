<template>
  <Header />
  <main>
    <Home />
  </main>
</template>

<script>
import Header from "@/components/layouts/Header";
import Home from "@/components/Home";
export default {
	name: "App",
	components: {
    Header,
		Home
	}
};
</script>

<style>
</style>
