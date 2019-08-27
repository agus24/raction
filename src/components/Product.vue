<template>
    <div class="col-sm-6 col-lg-4">
        <div class="product-item">
            <div class="product-item__thumb">
                <router-link :to="'/product/'+data.id">
                    <img class="thumb-primary" :src="'http://raction.co.id/'+data.image" alt="Product" />
                    <img class="thumb-secondary" :src="'http://raction.co.id/'+data.image" alt="Product" />
                </router-link>
            </div>
            <div class="product-item__content" style="padding-top:15px">
                <div class="product-item__info">
                    <h4 class="title">
                        <router-link :to="'/product/'+data.id">{{ data.name }}</router-link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props: ["data"]
    }
</script>

<style scoped>

</style>