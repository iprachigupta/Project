// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/toast";
// import Cookies from 'js-cookie';
import { useEffect } from "react";
// import { handleSuccess } from "../utils/toast";

const callLogoutApi = async () => {
    const url = "http://localhost:8080/auth/logout";
        const response = await fetch(url, {
          method: "post",
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: "include",
        });
        const result = await response.json();
        if(result.success){
            handleSuccess(result.message);
        }else handleError(result.error);
        
  }

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        callLogoutApi();
        navigate("/login");
    }

    useEffect(() => {
        handleLogout();
    }, []);

      return (
        <>
        <div><h1>Logout Page</h1></div>
        </>
      )
};

export default Logout;