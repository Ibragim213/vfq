import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api', // Адрес Spring Boot API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    getProducts() {
        return apiClient.get('/products');
    },
    createProduct(product) {
        return apiClient.post('/products', product);
    },

};
export async function fetchProducts() {
    return [
      { type: 'chair', title: 'Кресло 1', price: 100, description: 'Удобное кресло.' },
      { type: 'sofa', title: 'Диван 1', price: 200, description: 'Комфортный диван.' }
    ];
  }
  