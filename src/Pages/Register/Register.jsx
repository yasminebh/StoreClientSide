import React, { useState } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../context/auth';
const Register = () => {
  const [data, setData] = useState({
    fullName:"",
    password:"",
    phone:"",
    
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
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" required name='fullName' value={data.fullName} onChange={onChangeHandler}/>
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" placeholder="Enter your number" required />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="text"
                    placeholder="Confirm your password"
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
}

export default Register