import axiosClient from "./axiosClient";

const productApi = {
  getAll: () => axiosClient.get("/users"), // lấy users làm sản phẩm demo
};

export default productApi;
