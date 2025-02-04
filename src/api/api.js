
export default {
    getProducts() {
        return apiClient.get('/products');
    },
    createProduct(product) {
        return apiClient.post('/products', product);
    },

};
const API_URL = 'http://localhost:8080/api';

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}
