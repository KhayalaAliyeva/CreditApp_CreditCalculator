import { useState,useEffect } from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';


import Header from './components/Header';
import Register from './pages/Register';
import Home from './pages/Home';
import NewLoan from './pages/NewLoan';
import Calculator from './pages/Calculator';

// style
import './app.scss'
import Summary from './pages/Summary';


function App() {
  const [auth, setAuth]=useState(null);
  useEffect(()=>{
    const user=localStorage.getItem("user");
    user&&JSON.parse(user)?setAuth(true):setAuth(false)
  },[])
  return (
    <div className="app">
      <Header signOut={()=>{
            setAuth(false)
            localStorage.removeItem('user')
          }}/>
      <Routes>
        {!auth&&(
          <>
            <Route 
              path="/register"
              element={<Register authenticate={() => setAuth(true)}/>}/>
          </>

        )}
        {
          auth&&(
            <>
              <Route path='/' element={<Home/>}/>
              <Route path="/new_loan" element={<NewLoan/>}/>
              <Route path="/calculator" element={<Calculator/>}/>
              <Route path='/summary' element={<Summary/>}/>
            </>
          )
        }
        <Route path="*" element={<Navigate to={
          auth ? "/" : "/register"} />} />
      </Routes>
    </div>
  );
}

export default App;
