import { createApp } from 'vue'
import App from './App.vue'
import VueTidio from 'vue-tidio'
const app = createApp(App)

import { createRouter, createWebHistory } from "vue-router"

import HomeComponent from "./components/HomeComponent.vue"
import Product from "./components/Product.vue"
import ProductDetail from "./components/ProductDetail.vue"
import CartComponent from "./components/CartComponent.vue"
import CheckoutComponent from "./components/CheckoutComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"

// Import thư viện Bootstrap (JS và CSS)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import '@popperjs/core';

// Import thư viện Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fab, fas, far);
app.component('font-awesome-icon', FontAwesomeIcon);

const routes = [
    { path: "/login", component: LoginComponent },
    { path: "/register", component: RegisterComponent },
    { path: "/checkout", component: CheckoutComponent },
    { path: "/cart", component: CartComponent },
    { path: "/product", component: Product },
    { path: "/product/:_id", component: ProductDetail },
    { path: "/", component: HomeComponent }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)
app.use(VueTidio, { appKey: 'kapdevnmnkvcubnn6z7zpiatypsbunjr' })

router.afterEach((to) => {
  window.tidioChatApi &&
    window.tidioChatApi.display(to.meta.showChat);
})

app.config.globalProperties.$apiURL = "http://localhost:3000"
app.config.globalProperties.$STRIPE_PUBLISHABLE_KEY = ""
app.config.globalProperties.$accessTokenKey = "accessTokenKey"
app.config.globalProperties.$months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

app.config.globalProperties.$headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("accessTokenKey")
}

app.mount('#app')
