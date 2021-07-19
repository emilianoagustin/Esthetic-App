import React, { useState, useEffect } from 'react';
import './HomeProviders.scss';
import banner from '../../../img/banner.jpg';
import VerticalLinearStepper from '../Stepper/SelectService';
import RecipeReviewCard from '../PendingServices/PendingServices';

//siguiente variable es solo para efectos de prueba (a la espera de la ruta para renderizar)

const buyedServices = [
  {
    image: 'https://pymstatic.com/44253/conversions/xavier-molina-medium.jpg',
    firstName: 'Mario',
    lastName: 'Martinez',
    _id: '60f1bfde1497da2570de1a3a',
    gender: 'Male',
    email: 'lau@gmail.com',
    phone: 3152964865,
    services: ['Corte y peinado - Caballero'],
    addresses: ['calle 15 # 4a - 55'],
  },
  {
    image: 'https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg',
    firstName: 'Euge',
    _id: '60f1bfde1497da2570de1a3e',
    lastName: 'Butazzoni',
    gender: 'Male',
    email: 'Dani@gmail.com',
    phone: 1344560987,
    services: ['Corte y peinado - Niño'],
    addresses: ['calle 15 # 4a - 55'],
  },
];

const HomeProvider = () => {
  const [users, setUsers] = useState({
    firstName: '',
    services: [],
  });
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSpatifyApp');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      user.userFound
        ? setUsers({
            ...users,
            firstName: user.userFound?.firstName,
            services: [...user.userFound?.services],
          })
        : setUsers({
            ...users,
            firstName: user.providerFound?.firstName,
            services: [...user.providerFound?.services],
          });

      //(() => dispatch(userActiveSession()))();
    }
  }, []);
  console.log(users.services);

  return (
    <div className='banner-container'>
      <div className='title-background'>
        <h1>Spa-tify </h1>
        <h2>Bienvenido {users.firstName}</h2>
      </div>

      <div className='banner'>
        <img className='banner-img' src={banner} alt='banner-img'></img>
      </div>

      <div className='render-clients'>
        {users.services.length < 1 ? (
          <VerticalLinearStepper />
        ) : (
          buyedServices.map((user) => (
            <RecipeReviewCard data={user} key={user._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeProvider;

// <h1>muestros los servicios</h1>
