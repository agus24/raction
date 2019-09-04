<template>
    <header :class="headerClass">
        <div class="container container-wide is-desktop">
            <div class="row align-items-center">
                <div class="col-lg-12 d-lg-block text-center">
                    <div class="site-navigation">
                        <ul class="main-menu nav ">
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
        <div class="mobile-navigation is-mobile">
            <button class="btn btn-menu-nav pull-right" v-on:click="changeMenu">
                <i class="fa fa-times" v-if="showMenu"></i>
                <i class="fa fa-bars" v-else></i>
            </button>
            <transition name="slide">
                <div class="menu-wrapper" v-show="showMenu">
                    <div class="bg-dark side-menu">
                        <div class="list-group list-group-flush">
                            <router-link class="list-group-item list-group-item-action bg-dark" tag="a" to="/">Home</router-link>
                            <router-link class="list-group-item list-group-item-action bg-dark" tag="a" to="/product">Product</router-link>
                            <router-link class="list-group-item list-group-item-action bg-dark" tag="a" to="/about">About</router-link>
                            <router-link class="list-group-item list-group-item-action bg-dark" tag="a" to="/faq">Faq</router-link>
                            <router-link class="list-group-item list-group-item-action bg-dark" tag="a" to="/findus">Find Us</router-link>
                            <router-link class="list-group-item list-group-item-action bg-dark" tag="a" to="/gallery">Gallery</router-link>
                            <router-link class="list-group-item list-group-item-action bg-dark" tag="a" to="/contact">Contact</router-link>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data : function() {
            return {
                headerClass : "header-area",
                headerPutihActive : false,
                showMenu : false
            }
        },
        methods: {
            changeClass() {
                if(this.headerPutihActive) {
                    this.headerClass = "header-area header-putih";
                } else {
                    this.headerClass = "header-area";
                }
            },
            changeMenu() {
                this.showMenu = !this.showMenu;
            }
        },
        mounted() {
            this.showMenu = false;
            let scrollInterval = setInterval(() => {
                if (window.scrollY == document.body.scrollTop) {
                    this.headerPutihActive = false;
                } else {
                    this.headerPutihActive = true;
                }
                this.changeClass();
            }, 200);
        },
        watch: {
            '$route' () {
                this.showMenu = false;
            }
        }
    }
</script>

<style scoped>
    .header-putih {
        background-color: black;
    }

    .header-area {
        transition: all 3s ease;
        height: 75px;
    }

    .header-putih .nav li a {
        color: white;
    }

    .list-group a {
        color: white;
    }

    .btn-menu-nav {
        color: white;
        cursor: pointer;
    }

    .btn-wrapper {
        text-align: right;
    }

    .menu-wrapper {
        float: right;
        width: 100%;
        transition: all 1s ease;
    }

    .side-menu {    
        width: 50%;
        float: right;
    }

    .pull-right {
        float: right;
    }
</style>