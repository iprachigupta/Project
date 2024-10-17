// eslint-disable-next-line no-unused-vars
import React from 'react';
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
// import { useNavigate} from 'react-router-dom';
// import Cookies from "js-cookie"
import { useEffect } from 'react';

const callTestApi = async () => {
  const url = "http://localhost:8080/auth/test";
      const response = await fetch(url, {
        method: "get",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      });
      const result = await response.json();
      console.log(result);
}
function Dashboard() {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(true); 

  useEffect(() =>{
    callTestApi();
  }, [])
 
  // useEffect(() => {
  //   const token = Cookies.get('accessToken');
    
  //   if (!token) {
  //     // No token in cookies, redirect to login
  //     console.log("Received Token", token);
  //     navigate('/login');
  //   } else{
  //     setLoading(false); 
  //   }
  // }, [navigate]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
    <div className='flex flex-row justify-evenly items-center h-screen '>
      <Sidebar />
      <Profile />
    </div>
    </>
  )
}

export default Dashboard;

