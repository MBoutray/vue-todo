
<template>
  <div id="app">
      <header>
          <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                  </a>
              </div>

              <div class="navbar-menu">
                  <div class="navbar-start">
                      <router-link :to="{ name: 'Home'}" class="navbar-item">Accueil</router-link>
                      <router-link :to="{ name: 'Qui sommes-nous'}" class="navbar-item">Qui sommes-nous?</router-link>
                      <router-link :to="{ name: 'A propos'}" class="navbar-item">À propos</router-link>
                  </div>
              </div>
          </nav>
      </header>

      <main class="">
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello, et bienvenue sur la demo TodoList en Vue.js!'
    }
  }
}
</script>

<style>
</style>