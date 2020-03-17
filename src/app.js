import Vue from "vue"
import AppLayout from './theme/Layout.Vue'

const app = new Vue({
    render : h => h(AppLayout)
})

export { app }