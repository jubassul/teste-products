import axios from "axios";

const API_BASE_URL = "http://localhost:3000/products";

const api = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/list`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  createProducts: async (name: string, stockQuantity: number) => {
    try {
      await axios.post(`${API_BASE_URL}/create`, {
        name: name,
        stock_quantity: stockQuantity,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteProducts: async (id: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  updateProduct: async (id: string, name: string, stockQuantity: number) => {
    try {
      await axios.put(`${API_BASE_URL}/${id}`, {
        name: name,
        stock_quantity: stockQuantity,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
