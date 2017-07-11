<template>
    <div class="my-app">
        <div class="t1">page2</div>
        <h1 class="t2">{{name}}</h1>
        <div class="back"></div>
        <h2 class="t3">age: {{age}} <button @click="plus">+1</button></h2>
        <div class="bg"></div>
        <my-cmp :name="name"></my-cmp>
    </div>
</template>
<style>
    @import "./page2.css";
    .my-app {
        background: #eee;
    }
    .bg {
        width: 6.2rem;
        height: 6.2rem;
        background-image: url('./img/test1.jpg');
        background-size: 100%;
    }
</style>
<style rel="stylesheet/less" lang="less">
    // @import "../../assets/commons/basics.less";
    @import "../../assets/commons/common.less";
    .back {
        display: inline-block;
        vertical-align: middle;
        width: 2rem;
        height: 2rem;
        text-align: left;
        &:before {
            font-family: "iconfont" !important;
            content: "\f614";
            color: @fc1;
            position: relative;
        }
    }
</style>
<script>
    import MyCmp from '../../components/MyCmp.vue';
    export default {
        components: {
            MyCmp,
        },
        data() {
            return {
                name: 'Hans',
                age: 0,
            }
        },
        created() {
            console.log('created > ' + this.age);
            ++this.age;
        },
        methods: {
            plus() {
                this.age++;
            },
        },
    };
</script>
