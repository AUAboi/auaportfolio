<template>
	<section class="text-gray-600 body-font relative my-3">
		<h1 class="section-heading">Contact Me</h1>
		<div class="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
			<div
				class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
			>
				<iframe
					width="100%"
					height="100%"
					class="absolute inset-0"
					frameborder="0"
					title="map"
					marginheight="0"
					marginwidth="0"
					scrolling="no"
					src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
					style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
				></iframe>
				<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
					<div class="lg:w-1/2 px-6">
						<h2
							class="title-font font-semibold text-gray-900 tracking-widest text-xs"
						>
							ADDRESS
						</h2>
						<p class="mt-1">
							Photo booth tattooed prism, portland taiyaki hoodie neutra
							typewriter
						</p>
					</div>
					<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
						<h2
							class="title-font font-semibold text-gray-900 tracking-widest text-xs"
						>
							EMAIL
						</h2>
						<a class="text-purple-500 leading-relaxed">example@email.com</a>
						<h2
							class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
						>
							PHONE
						</h2>
						<p class="leading-relaxed">123-456-7890</p>
					</div>
				</div>
			</div>
			<div
				class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
			>
				<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
					Get in touch!
				</h2>
				<p class="leading-relaxed mb-5 text-gray-600">
					Post-ironic portland shabby chic echo park, banjo fashion axe
				</p>
				<div class="relative mb-4">
					<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
					<input
						v-model="contactForm.name"
						type="text"
						id="name"
						name="name"
						class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label for="email" class="leading-7 text-sm text-gray-600"
						>Email</label
					>
					<input
						type="email"
						id="email"
						name="email"
						v-model="contactForm.email"
						class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
					<div v-show="!emailValidation" class="text-red-500">
						<p>Email incorrect!</p>
					</div>
					``
				</div>
				<div class="relative mb-4">
					<label for="message" class="leading-7 text-sm text-gray-600"
						>Message</label
					>
					<textarea
						id="message"
						name="message"
						v-model="contactForm.message"
						class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					></textarea>
				</div>
				<div v-show="formError" class="text-red-500">
					<p>{{ formError }}</p>
				</div>
				<div class="text-green-500" v-if="submit">
					<p>{{ submit }}!</p>
				</div>
				<button
					type="submit"
					class="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
				>
					Button
				</button>
				<p class="text-xs text-gray-500 mt-3">
					Chicharrones blog helvetica normcore iceland tousled brook viral
					artisan.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";
export default {
	name: "Contact",
	data() {
		return {
			contactForm: {
				name: "",
				email: "",
				message: ""
			},
			submit: "",
			formError: ""
		};
	},
	methods: {
		async sendContactFormData() {
			if (!this.validateFormFields() || !this.emailValidation) {
				return;
			}
			let response = await axios.post("api/send-mail", this.contactForm);
			if (response.status === 200) {
				this.submit = response.data.message;
				this.formError = "";
				this.contactForm = {
					name: "",
					email: "",
					message: ""
				};
			} else {
				this.formError = "Some error occured! Try again in a bit";
			}
		},

		validateFormFields() {
			if (
				this.contactForm.name &&
				this.contactForm.email &&
				this.contactForm.message
			) {
				return true;
			}

			if (!this.contactForm.name) {
				this.formError = "Name cant be empty!";
				return false;
			}
			if (!this.contactForm.email) {
				this.formError = "Email cant be empty!";
				return false;
			}
			if (!this.contactForm.message) {
				this.formError = "Message cant be empty!";
				return false;
			}

			return false;
		}
	},
	computed: {
		emailValidation() {
			if (!this.contactForm.email) return true;
			//reg exp to check if email is valid
			let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return reg.test(this.contactForm.email);
		}
	}
};
</script>
