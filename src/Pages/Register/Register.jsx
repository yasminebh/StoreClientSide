import React, { useState } from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../context/auth';
const Register = () => {
  const [data, setData] = useState({
    fullName: "",
    password: "",
    phone: "",
    repeatpassword: "",
    CIN: "",
    address: "",
  });

   const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

  const onsubmitHAndler = (e) => {
    e.preventDefault();
    if (data.password !== data.repeatpassword) {
      alert("password do not match");
    }
       auth
        .register(data)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "check your email to verify your account =)",
            timer: 1500,
          });
          navigate("/login");
        })
        .catch((err) => console.log(err));
   
  };



  return (
    <>
      <div className="registerBody">
        <div className="container">
          <div className="title">Registration</div>
          <div className="content">
            <form action="#" onSubmit={onsubmitHAndler}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    name="fullName"
                    value={data.fullName}
                    onChange={onChangeHandler}
                  />
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    required
                    name="phone"
                    value={data.phone}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="input-box">
                  <span className="details">CIN</span>
                  <input
                    type="text"
                    placeholder="please provide ur CIN"
                    required
                    name="CIN"
                    value={data.CIN}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="input-box">
                  <span
                    className="details"
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                  >
                    Password
                  </span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="input-box">
                  <span
                    className="details"
                    name="repeatpassword"
                    value={data.repeatpassword}
                    onChange={onChangeHandler}
                  >
                    Confirm Password
                  </span>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                    name="repeatpassword"
                    value={data.repeatpassword}
                    onChange={onChangeHandler}
                  />
                </div>

                <div className="input-box">
                  <span className="">address</span>
                  <input
                    type="text"
                    placeholder="please provide ur address"
                    required
                    name="address"
                    value={data.address}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div className="button">
                <input type="submit" defaultValue="Register" />
              </div>
            </form>
            <div className="signin">
              <Link to={"/login"}>
                {" "}
                already have an account ? , sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register