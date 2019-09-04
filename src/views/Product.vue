<template>
    <div>
        <div class="page-content-wrapper sp-y">
            <div class="container container-wide">
                <div class="row">
                    <div class="col-lg-3 order-1 order-lg-0">
                        <div class="sidebar-area">
                            <div class="sidebar-item">
                                <h4 class="sidebar-title">Product categories</h4>
                                <div class="sidebar-body">
                                    <ul class="sidebar-list">
                                        <li><a href="#">All Product</a></li>
                                        <li><a href="#">Best Seller</a></li>
                                        <li><a href="#">Car</a></li>
                                        <li><a href="#">Parts</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Tayer</a></li>
                                        <li><a href="#">Uncategorized</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 order-0 order-lg-1">
                        <div class="action-bar-inner mb-30">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <p>Product List</p>
                                </div>
                                <div class="col-sm-6">
                                </div>
                            </div>
                        </div>
                        <div class="product-wrapper product-layout layout-grid">
                            <div class="row mtn-30">
                                <ProductItem  v-for="(product,index) in products" :data="product" :key="index" />
                            </div>
                        </div>

                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from "axios";

    import ProductItem from "../components/Product";
    import Pagination from "../components/Pagination";

    export default {
        name: "Product",
        components : {
            ProductItem,
            Pagination
        },
        data : function() {
            return {
                products : [],
                database : {},
                fstorage : {}
            }
        },
        mounted() {
            Axios.get("http://raction.co.id/ractionadmin/api/product")
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.log("error", error);
            })
        }
    }
</script>

<style scoped>
    ul li a {
        color: white;
    }
</style>