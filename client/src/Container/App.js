import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import UserRegister from "../components/UserRegister/UserRegister";
import Section from "../components/Section/Section.js";
import Cart from "../components/Cart/Cart";
import ServiceDetails from "../components/Section/Services/Service/ServiceDetails/ServiceDetails";
import searchPlace from '../components/SerachPlace/searchPlace'

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={Header}/>      
      <Route path={["/home"]} component={(Home, Section)}/>
      <Route exact path="/login"  component={Login}/>
      <Route exact path="/userRegister"  component={UserRegister} />
      <Route path="/services/details/:id" component={ServiceDetails}/>
      <Route exact path="/cart"  component={Cart}/>
      <Route exact path="/home"  component={searchPlace}/>
    </React.Fragment>
  );
};

export default App;
