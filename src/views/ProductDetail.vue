<template>
    <div>
        <div class="page-content-wrapper sp-y">
            <div class="product-details-page-content">
                <div class="container container-wide">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <!-- Start Product Thumbnail Area -->
                                <div class="col-md-5">
                                    <div class="product-thumb-area">
                                        <div class="product-details-thumbnail">
                                            <div class="product-thumbnail-slider" id="thumb-gallery">
                                                <figure class="pro-thumb-item">
                                                    <img :src="'http://raction.co.id' + product.image" alt="Product Details" />
                                                </figure>
                                            </div>

                                            <button class="btn-large-view btn-gallery-popup">View Larger <i class="fa fa-search-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Product Thumbnail Area -->

                                <!-- Start Product Info Area -->
                                <div class="col-md-7">
                                    <div class="product-details-info-content-wrap">
                                        <div class="prod-details-info-content">
                                            <h2>{{ product.name }}</h2>
                                            <p v-html="product.description"></p>

                                            <div class="product-meta">
                                                <!-- <span class="sku_wrapper">SKU: <span class="sku">N/A</span></span> -->

                                            <!-- <span class="posted_in">Categories:
                                                <a href="#">Best Seller,</a>
                                                <a href="#">Parts,</a>
                                                <a href="#">Shop</a>
                                            </span> -->

                                            <!-- <span class="tagged_as">Tags:
                                                <a href="#">Seller,</a>
                                                <a href="#">Modern,</a>
                                                <a href="#">Parts</a>
                                            </span> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Product Info Area -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from "axios"

    export default {
        name: "ProductDetail",
        data : function() {
            return {
                product : {}
            }
        },
        methods : {

        },
        mounted() {
            let id = this.$route.params.id;
            Axios.get('http://raction.co.id/ractionadmin/api/product/'+id)
            .then(response => {
                this.product = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .product-details-thumbnail {
        border: 0;
    }
</style>