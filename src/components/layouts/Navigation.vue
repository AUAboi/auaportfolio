<template>
	<AppNavMenuBtn @click="show = !show" :show="show" />
	<nav
		class="nav-bar fixed top-0 w-full opacity-100 z-30 "
		:class="show ? 'visible' : 'invisible'"
	>
		<div
			class="nav-branding bg-gradient-to-r md:bg-gradient-to-t from-purple-500 to-purple-200"
			id="navBranding"
			:class="show ? 'show' : ''"
		>
			<div
				class="potrait w-40 h-40 border-2 border-purple-600 rounded-full bg-cover"
			></div>
			<AppSocials />
		</div>
		<ul class="menu-nav bg-gray-900" id="menuNav" :class="show ? 'show' : ''">
			<li class="nav-item" :class="show ? 'show' : ''">
				<a @click="show = false" href="#home" class="nav-link">Home</a>
			</li>
			<li class="nav-item" :class="show ? 'show' : ''">
				<a @click="show = false" href="#about" class="nav-link">About</a>
			</li>
			<li class="nav-item" :class="show ? 'show' : ''">
				<a @click="show = false" href="#skills" class="nav-link">Skills</a>
			</li>
			<li class="nav-item" :class="show ? 'show' : ''">
				<a @click="show = false" href="#portfolio" class="nav-link"
					>Portfolio</a
				>
			</li>
			<li class="nav-item" :class="show ? 'show' : ''">
				<a @click="show = false" href="#contact" class="nav-link">Contact</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import AppSocials from "@/components/utils/AppSocials";
import AppNavMenuBtn from "@/components/buttons/AppNavMenuBtn";

export default {
	name: "Navigation",
	data() {
		return {
			show: false
		};
	},
	components: {
		AppSocials,
		AppNavMenuBtn
	},
	watch: {
		show() {
			document.querySelector("body").classList.toggle("overflow-hidden");
		}
	}
};
</script>
<style scoped>
.potrait {
	background-image: url("../../assets/myimg4.webp");
}
.bg-blur {
	background-color: rgba(255, 255, 255, 0.2);
}
.nav-bar .nav-branding,
.nav-bar .menu-nav {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-flow: column wrap;
	flex-flow: column wrap;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	float: left;
	width: 50%;
	height: 100vh;
	overflow: hidden;
}
.menu-nav {
	transform: translate3d(0, -100%, 0);
	transition: all 0.5s ease-out;
}
.menu-nav.show {
	transform: translate3d(0, 0, 0);
}

.nav-item {
	transform: translate3d(600px, 0, 0);
	transition: all 0.5s ease-out;
}

.nav-item:nth-child(1) {
	transition-delay: 0.1s;
}
.nav-item:nth-child(2) {
	transition-delay: 0.2s;
}
.nav-item:nth-child(3) {
	transition-delay: 0.3s;
}
.nav-item:nth-child(4) {
	transition-delay: 0.4s;
}
.nav-item:nth-child(5) {
	transition-delay: 0.5s;
}

.nav-item.show {
	transform: translate3d(0, 0, 0);
}

.nav-item.current > a {
	@apply text-purple-500;
}

.nav-link {
	@apply relative text-2xl font-light uppercase text-white inline-block my-6 hover:text-purple-600;
}

.nav-branding {
	transform: translate3d(0, 100%, 0);

	transition: all 0.5s ease-out;
}
.nav-branding.show {
	transform: translate3d(0, 0, 0);
}

@media screen and (max-width: 768px) {
	ul.menu-nav#menuNav,
	div.nav-branding#navBranding {
		width: 100%;
		float: none;
		min-height: 0;
	}
	ul.menu-nav#menuNav.show,
	div.nav-branding#navBranding.show {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	.nav-bar .menu-nav {
		height: 75vh;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
		font-size: 24px;
	}
	div.nav-branding#navBranding {
		height: 100%;
		transform: translate3d(100%, 0, 0);
	}
}
</style>