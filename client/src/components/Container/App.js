import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import { Route } from "react-router-dom";


const App = () => {
  return (
   <React.Fragment>
     
   
    <Route path={["/login", "/home"]} component={Header} />
    <Route path="/login" exact component={Login} />
   
   </React.Fragment>

  );
}

export default App;
