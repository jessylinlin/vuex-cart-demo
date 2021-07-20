import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

//定义插件
const myPlugin = store => {
    store.subscribe((mutation, state) => {
        //回调函数在提交完mutation执行
        if (mutation.type.startsWith('cart/')) {
            window.localStorage.setItem('cart-products', JSON.stringify(state.cart.cartProducts))
        }
    })
}

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        products,
        cart
    },
    plugins: [myPlugin]
})