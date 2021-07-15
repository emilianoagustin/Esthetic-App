import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import UserRegister from "../components/UserRegister/UserRegister";
import Section from "../components/Section/Section.js";
import Cart from "../components/Cart/Cart";
import ServiceDetails from "../components/Section/Services/Service/ServiceDetails/ServiceDetails";
import { ProvidersByService } from "../components/Section/Providers/ProvidersByService";
import ProviderCalendar from "../components/ProviderCalendar/ProviderCalendar";
import UserProfile from "../components/UserProfile/UserProfile";
import ProviderDetails from "../components/ProviderDetails/ProviderDetails";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={Header} />
      <Route exact path={["/"]} component={(Home, Section)} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/userRegister" component={UserRegister} />
      <Route
        exact
        path="/services/providers/:serviceName"
        component={ProvidersByService}
      />
      <Route path="/services/details/:id" component={ServiceDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route
        exact
        path="/services/providers/:service/:provider/calendar"
        component={ProviderCalendar}
      />
      <Route exact path="/providers/:id" component={ProviderDetails} />
      <Route path="/perfil/:id" component={UserProfile} />
    </React.Fragment>
  );
};

export default App;
