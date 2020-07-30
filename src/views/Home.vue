<template>
  <div class="home">
    <parallax :speed-factor="1" breakpoint="(min-width: 50px)" :fixed="true" :parallax="true">
        <img src="/uploads/slider/banner.png" style="position:absolute">
        <div class="row align-items-center h-100">
            <div class="col-lg-6">
                <div class="header-content">
                    <transition name="slide">
                        <h5 v-if="showText">Every <span>Ride</span></h5>
                    </transition>
                    <transition name="slide-600ms">
                        <h5 v-if="showText" class="push-right">Has A Story</h5>
                    </transition>
                </div>
            </div>
        </div>
    </parallax>
    <div class="page-content-wrapper about-section">
        <div class="about-page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 order-1 order-md-0 col-xs-6">
                        <div class="about-content">
                            <h2 class="h3 mb-sm-20">About Us</h2>
                            <p class="justify">PT Karya Cipta Didirikan pada tahun 1990-an, mengawali usaha dengan membuat spare parts untuk sepeda motor dan sepeda. Melihat perkembangan sepeda motor di Indonesia yang setiap tahun nya semakin pesat, kami memutuskan untuk lebih fokus bergerak dibidang spare parts motor. Demi keselamatan dan keamanan dalam berkendara, di tahun 2018 kami mengeluarkan Raction Tyre Sealant dengan teknologi USA agar para pengendara terhindar dari ranjau paku dan sampai tujuan dengan selamat.</p>
                        </div>
                    </div>

                    <div class="col-lg-6 order-0 col-xs-6">
                        <div class="about-thumb mb-sm-30">
                            <slick ref="slick" :options="slickOptions">
                                <img :src="value" alt="About" v-for="value in aboutSlide" v-bind:key="value" style="width:70%"/>
                            </slick>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-content-wrapper best-product-section" style="background-color:black;">
        <div class="about-page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="h3 mb-sm-20">Best Product</h2>
                        <p>All best Seller product are now available for you and you can buy this product from here any time where to stop now</p>
                    </div>
                    <div class="card col-lg-4 offset-4">
                        <img class="card-img-top" src="/uploads/products/tyreseal.png" alt="Card image cap">
                        <div class="card-title">
                            <h4>Raction Tyre Sealant</h4>
                        </div>
                        <div class="card-body">
                            <!-- <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">&nbsp;</div>
                    <div class="col-lg-4 text-center product-more">
                        <h5>
                            All kind of parts that you need can find here
                        </h5>
                        <router-link class="btn btn-brand findus" to="findus">Find Us</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import '../../node_modules/slick-carousel/slick/slick.css'
import Slick from 'vue-slick';
import Parallax from 'vue-parallaxy'
import Axios from "axios";

export default {
  name: 'home',
  components: {
    Slick,
    Parallax
  },
  data: function() {
    return {
        showText : false,
        aboutSlide : [
            "/uploads/about-slide/about_1.png",
            "/uploads/about-slide/about_2.png",
            "/uploads/about-slide/about_3.png",
        ],
        slickOptions : {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        },
        products : []
    };
  },
  methods : {
      loadProduct() {
        Axios.get("http://raction.co.id/ractionadmin/api/product")
        .then(response => {
            this.products = response.data;
        })
        .catch(error => {
            alert("something went wrong");
        })
      }
  },
  mounted() {
      this.loadProduct();
      setTimeout(() => {
          this.showText = true;
      }, 200);
  }
}
</script>

<style scoped>
    .slick-slide img {
        width: 70% !important;
    }
    .product-more {
        padding-top: 4%;
    }
    
    .product-more h5{
        color: white;
        text-transform: uppercase;
    }

    .bg-1 {
        background-image: url("/uploads/slider/banner.png");
    }

    .card {
        background-color: transparent;
        margin-top: 20px;
    }

    .card-text {
        text-align: justify !important;
    }

    .card-title h4 {
        color: #2fb23b;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        margin-top: 0;
        padding-top:20px;
        margin-bottom: -10px;
    }

    .about-section {
        background-color: #1b1b1c;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .best-product-section {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .best-product-section h2 {
        color: #2fb23b;
        text-align:center;
    }

    .best-product-section p {
        text-align: center;
        color: white;
    }

    .header-content h1, 
    .header-content h2, 
    .header-content h3, 
    .header-content h4,
    .header-content h5
    {
        font-size: 70px;
        color: white;
        text-transform: uppercase;
        text-align: left;
        margin-bottom: 0;
    }

    .header-content h5 span{
        color: #2fb23b;
    }

    .header-content h5 {
        padding-left: 10%;
    }

    .header-content .push-right {
        padding-left: 20%;
    }

    .about-content .h3 {
        text-align:left;
        color: #2fb23b;
    }

    .about-content p {
        color: white;
    }

    .Masthead {
        height: 100vh !important;
    }

/* Transition Start */
    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }
    .slide-enter {
        transform: translate(-100%, 0);
    }
    .slide-leave-to {
        transform: translate(100%, 0);
    }
    .slide-600ms-leave-active,
    .slide-600ms-enter-active {
        transition: 1.5s;
    }
    .slide-600ms-enter {
        transform: translate(-100%, 0);
    }
    .slide-600ms-leave-to {
        transform: translate(100%, 0);
    }
/* Transition End */
</style>