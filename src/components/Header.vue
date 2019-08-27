<template>
    <header class="header-area">
        <div class="container container-wide">
            <div class="row align-items-center">
                <div class="col-sm-4 col-lg-2">
                    <div class="site-logo text-center text-sm-left">
                        <router-link to="/" tag="a" style="text-transform: uppercase;color: black;font-weight: bold;font-size: 30px;color: #53d018;text-shadow: -1px 0 0px white, 0 3px #fffcfc, 1px 0 black, 0 -1px 0px white;">
                            Raction
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-7 d-none d-lg-block">
                    <div class="site-navigation">
                        <ul class="main-menu nav">
                            <li><router-link tag="a" to="/">Home</router-link></li>
                            <li><router-link tag="a" to="/product">Product</router-link></li>
                            <li><router-link tag="a" to="/about">About</router-link></li>
                            <li><router-link tag="a" to="/faq">Faq</router-link></li>
                            <li><router-link tag="a" to="/findus">Find Us</router-link></li>
                            <li><router-link tag="a" to="/gallery">Gallery</router-link></li>
                            <li><router-link tag="a" to="/contact">Contact</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: ["logo"]
    }
</script>

<style lang="scss" scoped>

</style>