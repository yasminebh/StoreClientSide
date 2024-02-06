import http from "./http";

const list = () => {
  return http.get("/subcategories");
};

const getById = (id, data) => {
  return http.get(`/subcategories/${id}`, data);
};

console.log("Axios Default Headers:", http.defaults.headers);

export default { list, getById };
