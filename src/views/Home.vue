<template>
  <div class="home">
      <slick
        ref="slick"
        :options="slickOptions.banner">
        <div class="slider-slide-item bg-img bg-1">
            <div class="container container-wide h-100">
            </div>
        </div>
        <div class="slider-slide-item bg-img bg-2">
            <div class="container container-wide h-100">
            </div>
        </div>
      </slick>
      <div class="banner-area-wrapper banner-mt">
        <div class="container container-wide">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="banner-item">
                        <div class="banner-item__img">
                            <a href="#"><img src="/uploads/bottom1.png" alt="Banner" /></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="banner-item">
                        <div class="banner-item__img">
                            <a href="#"><img src="/uploads/bottom2.png" alt="Banner" /></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="banner-item">
                        <div class="banner-item__img">
                            <a href="#"><img src="/uploads/bottom3.png" alt="Banner" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="call-to-action-area sm-top">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h2 class="h3">Why Choose Our Products?</h2>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="call-to-action-item mt-0">
                        <div class="call-to-action-item__icon">
                            <img src="/img/icons/icon-1.png" alt="fast delivery">
                        </div>
                        <div class="call-to-action-item__info">
                            <h3>Kelebihan</h3>
                            <p>Sahabat berkendara Anda agar terhindar dari ranjau paku. Bebas dan aman dalam berkendara.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-lg-4">
                    <div class="call-to-action-item">
                        <div class="call-to-action-item__icon">
                            <img src="/img/icons/icon-2.png" alt="quality">
                        </div>
                        <div class="call-to-action-item__info">
                            <h3>Berkualitas</h3>
                            <p>Memiliki kenyamanan dan keamanan tanpa harus menguras dompet.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-lg-4">
                    <div class="call-to-action-item">
                        <div class="call-to-action-item__icon">
                            <img src="/img/icons/icon-3.png" alt="return">
                        </div>
                        <div class="call-to-action-item__info">
                            <h3>24/7 Bantuan</h3>
                            <p>Raction memiliki pusat bantuan yang siap melayani Anda setiap saat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="best-seller-products-area sm-top">
        <div class="container container-wide">
            <div class="row">
                <div class="col-lg-5 m-auto text-center">
                    <div class="section-title">
                        <h2 class="h3">Best Products</h2>
                        <p>All best seller product are now available for you and your can buy
                            this product from here any time any where so sop now</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <Slick ref="slick" :options="slickOptions.product">
                        <!-- Start Product Item -->
                        <div class="product-item">
                            <div class="product-item__thumb">
                                <a href="#">
                                    <img class="thumb-primary" src="/uploads/products/tyresealant-bw.jpg" alt="Product" />
                                    <img class="thumb-secondary" src="/uploads/products/tyresealant.jpg" alt="Product" />
                                </a>
                            </div>

                            <div class="product-item__content">
                                <div class="ratting">
                                    <span><i class="ion-android-star"></i></span>
                                    <span><i class="ion-android-star"></i></span>
                                    <span><i class="ion-android-star"></i></span>
                                    <span><i class="ion-android-star"></i></span>
                                    <span><i class="ion-android-star"></i></span>
                                </div>
                                <h4 class="title"><a href="single-product.html">Tyre Sealant</a></h4>
                                <span class="price">
                                    &nbsp;
                                    <!-- <strong>Price:</strong> $65.00 -->
                                </span>
                            </div>

                            <div class="product-item__action">
                                <!-- <button class="btn-add-to-cart"><i class="ion-bag"></i></button>
                                <button class="btn-add-to-cart"><i class="ion-ios-loop-strong"></i></button>
                                <button class="btn-add-to-cart"><i class="ion-ios-heart-outline"></i></button>
                                <button class="btn-add-to-cart"><i class="ion-eye"></i></button> -->
                            </div>

                            <!-- <div class="product-item__sale">
                                <span class="sale-txt">35%</span>
                            </div> -->
                        </div>
                        <!-- End Product Item -->
                    </Slick>
                </div>
            </div>
        </div>
    </div>
    <div class="call-to-action-area">
        <div class="call-to-action-content-area bg-img" data-bg="/img/bg/bg-1.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="call-to-action-txt">
                            <h2>ALL KINDS OF PARTS THAT YOU <br> NEED CAN FIND HERE</h2>
                                <router-link to="findus" class="btn btn-brand">Find Us</router-link>
                                <!-- <a href="shop.html" class="btn btn-brand">Shop Now</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="call-to-action-image-area">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <img src="/uploads/tyre_editted.png" alt="Car" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
export default {
  name: 'home',
  components: {
    Slick
  },
  data: function() {
return {
      slickOptions: {
          banner: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            dots: false,
            fade: true,
            speed: 1000
          },
          product: {
            slidesToShow: 3,
            infinite: true,
            arrows: false,
            dots: false,
            fade: false,
            speed: 1000
          }
        },
  };
}
}
</script>

<style scoped>
    .bg-1 {
        background-image: url("/uploads/slider/banner1.jpg");
    }

    .bg-2 {
        background-image: url('/uploads/slider/banner2.jpg');
    }
</style>
<style>
</style>