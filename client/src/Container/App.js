import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import UserRegister from '../components/UserRegister/UserRegister';
import Section from '../components/Section/Section.js';
import Cart from '../components/Cart/Cart';
import ServiceUpload from '../components/Section/Services/Service/ServiceUpload/ServiceUpload';
import { ProvidersByService } from '../components/Section/Providers/ProvidersByService';
import ProviderCalendar from '../components/ProviderCalendar/ProviderCalendar';
import ProviderProfile from '../components/ProviderProfile/ProviderProfile';
import UserProfile from '../components/UserProfile/UserProfile';
import ProviderDetails from '../components/ProviderDetails/ProviderDetails';
import HomeProvider from '../components/HomeProviders/HomePage/HomeProvider';
import Providers from '../components/SearchProvider/Providers';

const App = () => {
  return (
    <React.Fragment>
      <Route path='/' component={Header} />
      <Route exact path={['/']} component={(Home, Section)} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/userRegister' component={UserRegister} />
      <Route exact path='/user/provider' component={HomeProvider} />
      <Route
        exact
        path='/services/providers/:serviceName'
        component={ProvidersByService}
      />
      <Route path='/service/upload/:id' component={ServiceUpload} />
      <Route exact path='/cart' component={Cart} />
      <Route path='/providers/:id/profile' component={ProviderProfile} />
      <Route
        exact
        path='/services/providers/:service/:provider/calendar'
        component={ProviderCalendar}
      />

      <Route exact path='/providers/:id' component={ProviderDetails} />

      <Route path='/profile/:id' component={UserProfile} />
      <Route path='/search' component={Providers} />
    </React.Fragment>
  );
};

export default App;
