import http from "./http";



const register = (data) => {
  return http.post("/customer/register", data);
};
const signup = (data) => {
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
export default { register,signup, logout, forgetPassword, ResetPassword };
