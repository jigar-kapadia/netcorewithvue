import Vue from 'vue';
import HomeComponent from '../Home/home.vue';
import ContactComponent from '../Home/contact.vue';
import AboutComponent from './about.vue';

new Vue({
    el: "#app",
    components:{
        HomeComponent,
        ContactComponent,
        AboutComponent
    }
});