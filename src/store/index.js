import { createStore } from 'vue';

export default createStore({
  state: {
    products: [],
    loading: false, // Состояние загрузки
    error: null, // Ошибка при запросах
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      commit('setError', null); // Сбрасываем предыдущие ошибки
      try {
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Ошибка загрузки продуктов');
        }
        const data = await response.json();
        commit('setProducts', data);
      } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
        commit('setError', error.message); // Сохраняем ошибку в состоянии
      } finally {
        commit('setLoading', false);
      }
    },
  },
  getters: {
    getProducts: (state) => state.products,
    isLoading: (state) => state.loading,
    error: (state) => state.error, // Геттер для ошибки
  },
});
