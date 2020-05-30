import hwj from './js/a.js'
import Vue from 'vue'

const app = {
    template: "#tmpl2"
}
new Vue({
    el: "#app",
    // template: "",
    // components: {
    //     App
    // }
    data: {
        hwj: hwj
    },
    template: '<app/>',
    components: {
        app
    }
})
