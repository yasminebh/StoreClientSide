import http from "./http";



const list = () => {
  return http.get("/products");
};

const getById = (id) => {
  return http.get(`/products/${id}`);
};



// eslint-disable-next-line import/no-anonymous-default-export
export default {  list, getById,  };
