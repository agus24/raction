<template>
    <div>
        <div class="card">
        <div :class="headerClass" @click="show = !show">
            <h5 class="card-title">{{ question }}</h5>
        </div>
        <div class="card-body" v-show="show">
            <div class="black-text">
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
        props : ["question", "even"],
        data: function() {
            return {
                show : false
            }
        },
        computed: {
            headerClass() {
                if(!this.even) {
                    return "card-header";
                }
                return "card-header colored"
            }
        }
    }
</script>

<style scoped>
    .colored {
        background-color: #d4d4d4;
    }
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