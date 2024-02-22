import http from "./http";



const register = (data) => {
  return http.post("/customer", data);
};
const signin = (data) => {
  return http.post("/user/login", data);
};

const logout = (data) => {
  return http.post(`/user/`, data);
};

const forgetPassword = (data) => {
  return http.post(`/user/forgetPassword`, data);
};

const ResetPassword = (token, data) => {
  return http.put(`/user/resetPassword/${token}`, data);
};
export default { register, signin, logout, forgetPassword, ResetPassword };
