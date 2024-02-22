import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../context/auth";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { LoginStart, loginFailed, loginSuccess } from "../../store/login";

const Login = () => {
 const dispatch = useDispatch()
 
 const [data, setData] = useState({
    email: "",
    password: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginStart());
    auth
      .signin(data)
      .then((res) => {
        console.log("ressssss", res.data.data.verified);
        //navigate("/");
     dispatch(loginSuccess(res.data.data));

        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("adminId", res.data.data._id);
        localStorage.setItem("token", res.data.accessToken);
      })
      .catch((error) => {
        dispatch(loginFailed(error));

        console.error("Error:", error.response.data.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: ("check your email , please", error.response.data.message),
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      <div className="registerBody">
        <div className="container">
          <div className="title">Login</div>
          <div className="content">
            <form action="#" onSubmit={submitHandler}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required
                    name="email"
                    value={data.email}
                    onChange={ChangeHandler}
                  />
                </div>

                <div className="input-box">
                  <span
                    className="details"
                    name="password"
                    value={data.password}
                    onChange={ChangeHandler}
                  >
                    Password
                  </span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={data.password}
                    onChange={ChangeHandler}
                    required
                  />
                </div>
              </div>

              <div className="button">
                <input type="submit" defaultValue="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
