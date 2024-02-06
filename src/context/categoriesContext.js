import http from "./http";

const list = () => {
  return http.get("/categories");
};

const getById = (id) => {
  return http.get(`/categories/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { list, getById };
