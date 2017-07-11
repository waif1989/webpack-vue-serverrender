/**
 * Created by chensiwei on 2017-4-21.
 */
import '../../assets/commons/basics.less'
import Vue from 'vue';
import App from './page1.vue';
const VueApp = Vue.extend(App);
new VueApp({
    el: '.my-app',
});