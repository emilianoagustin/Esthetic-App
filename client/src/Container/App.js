import React from 'react';
import Header from '../components/Header/Header'
import Login from '../components/Login/Login'
import UserRegister from '../components/UserRegister/UserRegister'
import { Route } from "react-router-dom";


const App = () => {
  return (
   <React.Fragment>
     
   
    <Route path={["/login", "/home", '/userRegister']} component={Header} />
    <Route path="/login" exact component={Login} />
    <Route path="/userRegister" exact component={UserRegister}/>
   
   </React.Fragment>

  );
}

export default App;
