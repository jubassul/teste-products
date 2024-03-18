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
      await axios.post("http://localhost:3000/products/create", {
        name: name,
        stock_quantity: stockQuantity,
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteProducts: async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  updateProduct: async (id: string, name: string, stockQuantity: number) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, {
        name: name,
        stock_quantity: stockQuantity,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
