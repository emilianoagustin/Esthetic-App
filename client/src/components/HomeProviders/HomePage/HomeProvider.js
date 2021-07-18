import React, { useState, useEffect } from 'react';
import './HomeProviders.scss';
import banner from '../../../img/banner.jpg';
import VerticalLinearStepper from '../Stepper/SelectService';

const HomeProvider = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSpatifyApp');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      user.userFound
        ? setUser(user.userFound?.firstName)
        : setUser(user.providerFound?.firstName);
      //(() => dispatch(userActiveSession()))();
    }
  }, []);

  return (
    <div className='banner-container'>
      <div className='title-background'>
        <h1>Spa-tify </h1>
        <h2>Bienvenido {user}</h2>
      </div>

      <div className='banner'>
        <img className='banner-img' src={banner} alt='banner-img'></img>
      </div>
      {user.providerFound?.services.length < 1 ? (
        <VerticalLinearStepper />
      ) : (
        <h1>muestros los servicios</h1>
      )}
    </div>
  );
};

export default HomeProvider;
