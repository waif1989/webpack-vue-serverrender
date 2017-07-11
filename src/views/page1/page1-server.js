/**
 * Created by chensiwei on 2017-4-24.
 */
// server-entry.js
import '../../assets/commons/basics.less'
import Vue from 'vue';
import App from './page1.vue';
const app = new Vue(App);
/*const AppComponents = Vue.extend(App)
const app = new Vue({
    el: '#app',
    components: { AppComponents }
})*/
// the default export should be a function
// which will receive the context of the render call
export default function(context) {
    return new Promise((resolve, reject) => {
        resolve(app);
    });
};