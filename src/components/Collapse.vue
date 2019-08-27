<template>
    <div>
        <div class="card">
        <div class="card-header" @click="show = !show">
            <h5 class="card-title">{{ question }}</h5>
        </div>
        <div class="card-body" v-show="show">
            <div>
                <slot> </slot>
            </div>
        </div>
        </div>
        <!-- <button class="btn btn-primary" @click="show = !show">{{ question }}</button>
        <div v-show="show">
            <slot></slot>
        </div> -->
    </div>
</template>

<script>
    export default {
        name : "Collapse",
        props : ["question"],
        data: function() {
            return {
                show : false
            }
        }
    }
</script>

<style scoped>
    .card-title {
        /* cursor: pointer; */
        color: black;
        font-weight:400;
        font-size: 16px;
    }

    .card-header {
        cursor: pointer;
        transition: all 500ms ease;
    }

    .card-body {
        transition: all 500ms ease;
    }

    .card-header:hover {
        background-color: #2fb23b;
    }

    .card {
        margin-bottom: 10px;
    }
</style>