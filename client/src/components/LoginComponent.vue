<template>
    <div id="account-page" style="background-color: rgb(241, 241, 241); padding: 100px 0;">
        <div style="text-align: center;">
            <router-link to="/">
                <img src="/img/logo4.png" alt="logo" style="object-fit: cover; height: 40px;">
            </router-link>
            <router-link to="/" class="navbar-brand" style="font-family: YoungSerif;">BlinkBlink</router-link>
        </div>
        <div style="text-align: center;">
            <h3>Log in to your account</h3>
            <p>Don't have an account? <a href="#">Sign up</a>.</p>
        </div>
        <div style="width: 40%; margin: 0 auto;">
            <form method="POST" v-on:submit.prevent="doLogin">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" autocomplete="off">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" autocomplete="off">
                </div>
                <input type="submit" value="Login" class="btn btn-primary" name="submit" style="width: 100%;" v-bind:disabled="isLoading">
            </form>
            <br>
            <div style="text-align: center;"><a href="#">Forgot password?</a></div>
        </div>
    </div>
</template>

<script>

import axios from "axios"
import swal from "sweetalert2"
import store from "../vuex/store"

export default {
    data() {
        return {
            "isLoading": false
        }
    },

    methods: {
        doLogin: async function () {
            const form = event.target
            const formData = new FormData(form)

            this.isLoading = true

            const response = await axios.post(
                this.$apiURL + "/login",
                formData
            )

            this.isLoading = false
            swal.fire("Login", response.data.message, response.data.status)

            if (response.data.status == "success") {
                form.reset()

                // get access token from server
                const accessToken = response.data.accessToken
                // save in local storage
                localStorage.setItem(this.$accessTokenKey, accessToken)

                this.$headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }

                store.commit("setLogin", true)
                store.commit("setUser", response.data.user)

                setTimeout(function () {
                    var elems = document.querySelectorAll('.dropdown-trigger')
                    var instances = M.Dropdown.init(elems, {})
                }, 500)

                this.$router.push("/")
            }
        }
    }
}
</script>

<style>

</style>