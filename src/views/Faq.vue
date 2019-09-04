<template>
    <div>
        <div class="page-content-wrapper sm-top">
            <div class="about-page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 align-left faq-holder mt-20">
                            <h3>FAQ</h3>
                            <Collapse v-for="(item, index) in faq" :key="index" :question="item.q" :even="index%2">
                                <span class="align-left">{{item.a}}</span>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import faq from "../data/faq"
    import Collapse from "../components/Collapse"
    export default {
        name: "Faq",
        components : {
            Collapse
        },
        data: function() {
            return {
                faq: []
            }
        },
        mounted() {
            this.faq = faq;
        }
    }
</script>

<style scoped>
    .align-left {
        text-align: left;
        font-size: unset;
    }

    .faq-holder {
        margin-bottom: 25px;
    }

    .mt-20 {
        margin-top: 20px;
    }
</style>