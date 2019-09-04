<template>
  <div id="app">
    <div class="site-wrapper">
        <Header/>
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
  /* margin-top: 60px; */
}

.slick-dots {
    bottom: -40px;
}

.slick-dots li button{
    color: white;
}

.btn-brand {
    background-color: #2fb23b !important;
    border-color: #2fb23b !important;
    color: white;
}

.btn-brand:hover {
    box-shadow: 0 0 5px 7px #dcdcdc69;
    color: white;
}

.justify {
    text-align: justify;
}

.is-mobile {
    display: none;
}

@media screen and (max-width: 766px){
    .is-desktop {
        display: none;
    }
    .is-mobile {
        display : block;
    }
}

@media screen and (min-width: 766px){
    .is-desktop {
        display: block;
    }
    .is-mobile {
        display : none;
    }
}
</style>

<style >
    .slide-leave-active,
    .slide-enter-active {
        transition: 0.2s;
    }
    .slide-enter {
        transform: translate(100%, 0);
        opacity: 0;
    }
    .slide-leave-to {
        transform: translate(100%, 0);
        opacity: 0;
    }
</style>