import { createStore } from 'vuex';

export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch('http://localhost:8080/api/products');
      const data = await response.json();
      commit('setProducts', data);
    }
  },
  getters: {
    getProducts: (state) => state.products
  }
  
});
