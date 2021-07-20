import axios from 'axios'
const products = {
    namespaced: true,
    state: () => ({
        products: []
    }),
    getters: {

    },
    mutations: {
        setProducts(state, playload) {
            state.products = playload
        }
    },
    actions: {
        async getProducts({ commit }) {
            const { data } = await axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/products'
            })

            commit("setProducts", data)
        }
    }
}

export default products