import {Routes , Route, Navigate} from 'react-router-dom'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';



function App() {

  console.log("APP rendered");
  return (
    <>
    <div>

      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>

    </div>
    </>
  )
}

export default App;

