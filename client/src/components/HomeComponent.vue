<template>
	<div id="home-page">
		<div class="banner">
			<div class="ms-5 title position-absolute">
				<h1 class="fw-bolder">Shine Your Light</h1>
				<p class="fw-lighter fs-5">View the Jewelry Collection and discover the latest trends in fashion and
					accessories.
					We have
					everything you need to look your best this season.</p>
				<router-link to="/product"><button type="button" class="btn btn-dark fw-bolder">Shop
						now</button></router-link>
			</div>
			<img src="/img/banner2.webp" alt="h" style="height: 600px; width: 100%; object-fit: cover;">
		</div>
		<div class="category">
			<div class="title-cate mx-5">
				<p class="fw-semibold fs-3">Shop by Category</p>
				<router-link to="/product">
					<p class="fw-normal"><u>View all</u></p>
				</router-link>
			</div>
			<div class="thumbnail-cate mx-5">
				<div class="ring-thumbnail position-relative">
					<p class="position-absolute fw-bold bottom-0">Rings</p>
					<img src="/img/ring-thumbnail.jpg" class="rounded mx-auto d-block" alt="ring-thumbnail">
				</div>
				<div class="necklace-thumbnail position-relative">
					<p class="position-absolute fw-bold bottom-0">Necklace</p>
					<img src="/img/necklace-thumbnail.jpg" class="rounded mx-auto d-block" alt="necklace-thumbnail">
				</div>
				<div class="earring-thumbnail position-relative">
					<p class="position-absolute fw-bold bottom-0">Earring</p>
					<img src="/img/earring-thumbnail.jpg" class="rounded mx-auto d-block" alt="earring-thumbnail">
				</div>
				<div class="bracelet-thumbnail position-relative">
					<p class="position-absolute fw-bold bottom-0">Bracelet</p>
					<img src="/img/bracelet-thumbnail.jpg" class="rounded mx-auto d-block" alt="bracelet-thumbnail">
				</div>
				<div class="anklet-thumbnail position-relative">
					<p class="position-absolute fw-bold bottom-0">Anklet</p>
					<img src="/img/anklet-thumbnail.jpg" class="rounded mx-auto d-block" alt="anklet-thumbnail">
				</div>
				<div class="glasses-thumbnail position-relative">
					<p class="position-absolute fw-bold bottom-0">Glasses</p>
					<img src="/img/glasses-thumbnail.jpg" class="rounded mx-auto d-block" alt="glasses-thumbnail">
				</div>
			</div>
			<div class="more mx-5">
				<div class="more-item rounded">
					<img src="/icon/box.svg" alt="freeship">
					<p>
						<span class="fw-bold fs-5">Free Shipping</span> <br>
						Free shipping on order over €50
					</p>
				</div>
				<div class="more-item rounded">
					<img src="/icon/moneyback.svg" alt="peaceofmind">
					<p>
						<span class="fw-bold fs-5">Peace of Mind</span> <br>
						30 days money back guarantee
					</p>
				</div>
				<div class="more-item rounded">
					<img src="/icon/secure.svg" alt="secure">
					<p>
						<span class="fw-bold fs-5">100% Payment Secure</span> <br>
						Your payment are safe with us.
					</p>
				</div>
				<div class="more-item rounded">
					<img src="/icon/support.svg" alt="support">
					<p>
						<span class="fw-bold fs-5">Support 24/7</span> <br>
						24/7 Online support
					</p>
				</div>
			</div>
		</div>
	</div>


	<div class="section no-pad-bot" id="index-banner">
		<div class="container-fluid">
			<br><br>
			<h1 class="header center orange-text">E-commerce website</h1>
			<div class="row center">
				<h5 class="header col s12 light">Vue JS + Node JS + Mongo DB</h5>
			</div>
			<br><br>

			<div class="row">
				<div class="col offset-m8 m4">
					<div class="input-field col s12">
						<select v-on:change="onchangeSortBy">
							<option value="newestToOldest">Newest to oldest</option>
							<option value="oldestToNewest">Oldest to newest</option>
							<option value="priceDescending">Price (descending)</option>
							<option value="priceAscending">Price (ascending)</option>
						</select>
						<label>Sort by</label>
					</div>
				</div>
			</div>

			<div class="row" v-if="isLoading">
				<div class="col offset-m6 m4">
					<div class="preloader-wrapper big active">
						<div class="spinner-layer spinner-blue-only">
							<div class="circle-clipper left">
								<div class="circle"></div>
							</div>

							<div class="gap-patch">
								<div class="circle"></div>
							</div>

							<div class="circle-clipper right">
								<div class="circle"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col m1">
					<div class="card">
						<div class="card-body" style="padding-top: 10px; padding-bottom: 10px; padding-left: 20px;">
							<p style="cursor: pointer;" v-on:click="onclickCategory">All</p>
						</div>
					</div>

					<div class="card" v-for="category in categories">
						<div class="card-body" style="padding-top: 10px; padding-bottom: 10px; padding-left: 20px;">
							<p v-text="category" style="cursor: pointer;" v-on:click="onclickCategory"></p>
						</div>
					</div>
				</div>

				<div class="col m11">
					<div class="row">
						<div class="col m4" v-for="(product) in products" v-bind:key="product._id">
							<div class="card blue-grey darken-1">
								<div class="card-content white-text">
									<img v-if="product.images.length > 0"
										v-bind:src="this.$apiURL + '/' + product.images[0]"
										style="width: 100%; height: 300px; object-fit: contain;" />
									<span class="card-title" v-text="product.name"></span>
									<p>$<span v-text="product.price"></span></p>
								</div>

								<div class="card-action">
									<router-link v-bind:to="'/product/' + product._id">More detail</router-link>

									<span style="float: right; color: white;">In stock: <span
											v-text="product.itemsInStock || 0"></span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col offset-m6 m4">
					<button type="button" class="waves-effect waves-light btn" v-on:click="loadMore" ref="btnLoadMore">Load
						more</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.banner {
	display: flex;
	align-items: center;
}

.title {
	width: 40%;
	text-align: center;
}

.title-cate {
	display: flex;
	justify-content: space-between;
}

.title-cate u {
	color: rgb(35, 184, 230);
}

.category {
	padding-top: 20px;
	background-color: rgb(241, 241, 241);
}

.thumbnail-cate {
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-between;
	flex-wrap: wrap;
	column-gap: 20px;
	row-gap: 20px;
}

.thumbnail-cate img {
	object-fit: cover;
	width: 200px;
	height: 300px;
}

.thumbnail-cate p {
	width: 100%;
	text-align: center;
	margin-bottom: 10px;
}

.more {
	display: flex;
	justify-content: space-between;
	padding-top: 100px;
	padding-bottom: 100px;
}

.more-item {
	display: grid;
	background-color: rgb(255, 255, 255);
	grid-template-columns: auto auto;
	justify-content: space-around;
	align-items: center;
	width: 24%;
	height: 150px;
}

@media (min-width: 768px) {
	.thumbnail-cate {
		grid-template-columns: auto auto auto;
	}
}

@media (min-width: 992px) {
	.thumbnail-cate {
		grid-template-columns: auto auto auto auto;
	}
}

@media (min-width: 1200px) {
	.thumbnail-cate {
		grid-template-columns: auto auto auto auto auto auto;
	}
}
</style>

<script>
import axios from "axios"
import swal from "sweetalert2"
import store from "../vuex/store"

export default {
	data() {
		return {
			page: 1,
			products: [],
			sortBy: "",
			categories: [],
			category: "",
			isLoading: false
		}
	},

	computed: {
		search: function () {
			return store.getters.getSearch
		}
	},

	methods: {
		onchangeSortBy: function () {
			this.page = 1
			this.sortBy = event.target.value
			this.getData()
		},

		onclickCategory: function () {
			this.page = 1
			this.category = event.target.innerHTML
			this.getData()
		},

		loadMore: function () {
			this.$refs.btnLoadMore.setAttribute("disabled", "disabled")

			this.page++
			this.getData()
		},

		getConfigurations: async function () {
			const response = await axios.post(
				this.$apiURL + "/getConfigurations",
				null
			)

			if (response.data.status == "success") {
				const configurations = response.data.configurations
				this.categories = configurations.categories || []
			}
		},

		getData: async function () {
			this.isLoading = true

			const formData = new FormData()
			formData.append("page", this.page)
			formData.append("sortBy", this.sortBy)
			formData.append("category", this.category)
			formData.append("search", this.search)

			const response = await axios.post(
				this.$apiURL + "/products/fetch",
				formData
			)

			this.isLoading = false
			this.$refs.btnLoadMore.removeAttribute("disabled")

			if (response.data.status == "success") {
				this.products = response.data.products
			} else {
				swal.fire("Error", response.data.message, "error")
			}
		}
	},

	mounted: function () {
		this.getConfigurations()
		this.getData()

		var elems = document.querySelectorAll('select')
		var instances = M.FormSelect.init(elems, {})
	},

	watch: {
		search: function (to, from) {
			this.getData()
		}
	}
}
</script>