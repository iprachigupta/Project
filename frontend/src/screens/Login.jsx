// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import {ToastContainer} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { handleSuccess, handleError } from '../utils/toast';

function Login() {
  const [users, setUsers] = useState({
    email: "",
    password:""
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = users;
    if(!email || !password)
      return handleError("All Fields Are Required");

    try{
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
      const result = await response.json();
      console.log(result);
      const {message, success, jwtToken, name ,error} = result;
      if(success){
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("logged user", name);
        setTimeout(()=>{
          navigate('/dashboard');
        },1000)
      }else if(!success){
        handleError(message);
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }
    }
    catch(error){
      handleError(error)
    }

  };

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  }; 



  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-100 shadow-lg shadow-slate-400 rounded-lg border border-gray-300 p-16 w-96">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" >Email :</label>
              <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="text" name="email" placeholder="Enter you email" required value={users.email} onChange={handleChange} autoComplete="off"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" >Password :</label>
              <input className="mt-1 p-2 border border-gray-300 rounded w-full" type="password" name="password" placeholder="Enter your password" required value={users.password} onChange={handleChange} autoComplete="off"/> 
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg shadow-blue-700/60 hover:opacity-90">Login</button>
          </form>
          <h4 className="text-xs text-center mt-4">No account?
            {/* <a href="/signup" className="text-blue-500 hover:underline"> Sign up?...</a> */}
            <Link to="/signup" className="text-blue-500 hover:underline">Sign up?</Link>
          </h4>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="z-50" // Optional: adjust z-index if needed
      />
    </>
  )
}

export default Login

