<template>
  <nav class="navbar navbar-expand-lg bg-light px-5">
    <div class="container-fluid">
      <router-link to="/">
        <img src="/img/logo4.png" alt="logo" style="object-fit: cover; height: 40px;">
      </router-link>
      <router-link to="/" class="navbar-brand" style="font-family: YoungSerif;">BlinkBlink
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: flex-end;">
        <div class="icon" style="width: 100px;">
          <div class="icon-about" style="color: black;">
            <router-link to="/about" class="nav-link active" aria-current="page"><font-awesome-icon
                :icon="['far', 'heart']" /></router-link>
          </div>
          <div class="icon-cart" style="color: black;">
            <router-link to="/cart" class="nav-link active" aria-current="page"><font-awesome-icon
                :icon="['fas', 'cart-shopping']" /><span v-if="cartCounter > 0"
                v-text="'(' + cartCounter + ')'"></span></router-link>
          </div>
          <div class="icon-login" v-if="!login" style="color: black;">
            <router-link to="/login" class="nav-link active " aria-current="page"><font-awesome-icon
                :icon="['far', 'user']" /></router-link>
          </div>
          <div v-if="user != null">
            <!-- Dropdown Trigger -->
            <a class='dropdown-trigger' href='#' data-target='dropdown-user' v-text="user.name" style="color: black;"></a>

            <!-- Dropdown Structure -->
            <ul id='dropdown-user' class='dropdown-content' style="width: 140px;">
              <li><a href="#" v-on:click="doLogout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
  
  
<style>
@font-face {
  font-family: YoungSerif;
  src: url(../../../public/font/Young_Serif/YoungSerif-Regular.ttf);
}

.icon {
  width: 80px;
  display: flex;
  justify-content: space-between;
}
</style>


<script>

import "/public/assets/css/materialize.css"
import "/public/assets/css/style.css"

import "/public/assets/js/materialize.js"
import "/public/assets/js/init.js"

import store from "../../vuex/store"
import axios from "axios"
import swal from "sweetalert2"

import { io } from "socket.io-client"

export default {
  name: "AppHeader",

  data() {
    return {
      search: ""
    }
  },

  computed: {
    user: function () {
      return store.getters.getUser
    },

    login: function () {
      return store.getters.getLogin
    },

    cartCounter: function () {
      return store.getters.getCartCounter
    }
  },

  methods: {
    doLogout: async function () {
      const response = await axios.post(
        this.$apiURL + "/logout",
        null,
        {
          headers: this.$headers
        }
      )

      if (response.data.status == "success") {
        // remove access token from local storage
        localStorage.removeItem(this.$accessTokenKey)

        this.$headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        }

        store.commit("setLogin", false)
        store.commit("setUser", null)

        this.$router.push("/login")
      } else {
        swal.fire("Error", response.data.message, "error")
      }
    },

    getUser: async function () {

      // check if user is logged in
      if (localStorage.getItem(this.$accessTokenKey)) {

        const response = await axios.post(
          this.$apiURL + "/getUser",
          null,
          {
            headers: this.$headers
          }
        )

        if (response.data.status == "success") {
          // user is logged in
          store.commit("setUser", response.data.user)

          global.socketIO.emit("connected", response.data.user.email)

          global.socketIO.on("newMessage", function (message) {
            store.commit("appendMessage", message)
            M.toast({ html: 'New message has been received.' })
          })

          setTimeout(function () {
            var elems = document.querySelectorAll('.dropdown-trigger')
            var instances = M.Dropdown.init(elems, {})
          }, 500)
        } else {
          // user is logged out
          localStorage.removeItem(this.$accessTokenKey)
        }

        store.commit("setLogin", (localStorage.getItem(this.$accessTokenKey) != null))
      }
    },

    doSearch: function () {
      store.commit("setSearch", this.search)
    }
  },

  mounted: function () {
    const cookieParts = document.cookie.split("; ")
    for (let a = 0; a < cookieParts.length; a++) {
      const keyValue = cookieParts[a].split("=")
      if (keyValue[0] == "products") {
        const products = JSON.parse(keyValue[1])
        store.commit("setCartCounter", products.length)
      }
    }

    global.socketIO = io(this.$apiURL)
    this.getUser()

    var elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, {})
  }
}
</script>