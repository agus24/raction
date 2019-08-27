<template>
  <div id="app">
    <div class="site-wrapper boxed-layout">
        <Header logo="./img/logo.png"/>
        <router-view/>
        <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
    name: "App",
    components: {
        Header,
        Footer
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-brand {
    background-color: #2fb23b !important;
    border-color: #2fb23b !important;
}

/* ::selection {
  background: #2fb23b;
}

::-moz-selection {
  background: #2fb23b;
} */
</style>
