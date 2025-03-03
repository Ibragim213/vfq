import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getProducts() {
        return apiClient.get('/products');
    },
    createProduct(product) {
        return apiClient.post('/products', product);
    },
    getUserById(id) {
        return apiClient.get(`/users/${id}`);
    }
};
