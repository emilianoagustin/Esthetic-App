import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import UserRegister from "../components/UserRegister/UserRegister";
import Section from "../components/Section/Section.js";
import Cart from "../components/Cart/Cart";

const App = () => {
  return (
    <React.Fragment>
      <Route path={["/login", "/home", "/userRegister", "/cart"]} component={Header} />
      <Route path={["/home"]} component={(Home, Section)} />
      <Route path="/login" exact component={Login} />
      <Route path="/userRegister" exact component={UserRegister} />
      <Route path="/cart" exact component={Cart} />
    </React.Fragment>
  );
};

export default App;
