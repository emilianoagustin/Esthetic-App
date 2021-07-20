import React, { useEffect } from 'react';
/* import { RiServiceLine } from "react-icons/ri"; */
import { useDispatch, connect } from 'react-redux';
import { getServices } from '../../../Redux/actions/actions';
import RecipeReviewCard from '../../HomeProviders/PendingServices/PendingServices';
import Service from './Service/Service';
import './Services.css';

export function Services({ services }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);
  console.log("SERVICIOS: ", services);

  return (
    <div>
<<<<<<< HEAD
      <h1 className="title">SERVICIOS</h1>
      <div className="services-container">
        {services.data &&
          services.data.map((service, index) => (
            <Service key={index} data={service} />
=======
      <h1 className='title'>SERVICIOS</h1>
      <div className='services-container'>
        {services.data &&
          services.data.map((service, index) => (
            <>
              {/* <Service key={index} data={service} /> */}
              <RecipeReviewCard data={service} key={index} />
            </>
>>>>>>> 0172c01d8a40dcffed8f1e6ed7ec530f1b444aa7
          ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    services: state.services,
  };
}

export default connect(mapStateToProps)(Services);
