import {Routes , Route, Navigate} from 'react-router-dom'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';
import AddExpense from './screens/AddExpense';
import Account from './screens/Account';
import SwitchAccount from './screens/SwitchAccount';





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
        <Route path="/transactions" element={<Transactions />}/>
        <Route path="/add-expense" element={<AddExpense />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/switch-account" element={<SwitchAccount />}/>
        <Route path="/logout" element={<Navigate to="/login"></Navigate>}/>
      </Routes>

    </div>
    </>
  )
}

export default App;

