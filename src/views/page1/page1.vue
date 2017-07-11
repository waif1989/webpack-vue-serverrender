<template>
    <div class="my-app">
        <div>page1</div>
        <h1>{{name}}</h1>
        <h2>age: {{age}} <button @click="plus">+1</button></h2>
        <div class="back"></div>
        <img src="./img/test1.jpg">
        <img src="./img/loading.gif" class="gif">
        <my-cmp :name="name"></my-cmp>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .my-app {
        background: #eee;
    }
    img {
        display: block;
        width: 100%;
    }
    .gif {
        width: 2rem;
        height: 2rem;
    }
</style>
<style rel="stylesheet/less" lang="less">
    @import "./page1.less";
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
