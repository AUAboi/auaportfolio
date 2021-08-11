<template>
	<div
		@click="show = !show"
		class="menu-btn absolute right-2 top-3 z-50 cursor-pointer transition-all ease-in-out duration-500"
		:class="show ? 'close transform rotate-180' : ' '"
	>
		<div
			class="btn-line"
			:class="show ? 'transform rotate-45 translate-x-0.5 translate-y-2.5' : ''"
		></div>
		<div :class="show ? 'opacity-0' : ''" class="btn-line"></div>
		<div
			:class="
				show ? 'transform -rotate-45 translate-x-0.5 -translate-y-1.5' : ''
			"
			class="btn-line"
		></div>
	</div>
	<nav
		class="nav-bar fixed top-0 w-full opacity-90 z-30 "
		:class="show ? 'visible' : 'invisible'"
	>
		<div
			class="nav-branding bg-purple-400"
			id="navBranding"
			:class="show ? 'show' : ''"
		>
			<div
				class="potrait w-40 h-40 border-2 border-purple-600 rounded-full bg-cover"
			></div>
		</div>
		<ul class="menu-nav bg-black" id="menuNav" :class="show ? 'show' : ''">
			<li class="nav-item current" :class="show ? 'show' : ''">
				<a href="/dist/index.html" class="nav-link">Home</a>
			</li>
			<li class="nav-item" :class="show ? 'show' : ''">
				<a href="/dist/work/work.html" class="nav-link">Work</a>
			</li>
			<li class="nav-item" :class="show ? 'show' : ''">
				<a href="/dist/contact/contact.html" class="nav-link">Contact</a>
			</li>
			<li class="nav-item" :class="show ? 'show' : ''">
				<a href="about.html" class="nav-link">About</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
			show: false
		};
	}
};
</script>
<style scoped>
.potrait {
	background-image: url("../../assets/myimg.jpg");
}
.btn-line {
	@apply w-6 h-1 m-1 bg-purple-500;
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
	@apply relative text-2xl font-light uppercase text-white inline-block p-1 hover:text-purple-600;
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
	ul.menu-nav {
		height: 75vh;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
		font-size: 24px;
	}
	div.nav-branding#navBranding {
		height: 25vh;
		transform: translate3d(100%, 0, 0);
	}
}
</style>