import React from 'react';
import { useDispatch } from 'react-redux';
import { addServicesToProvider } from '../../../Redux/actions/actions';

//IMPORT MNATERIAL UI

//styles
import './CheckBoxComponent.scss';

const CheckBoxComponent = ({ data }) => {
  const provider = JSON.parse(window.localStorage.getItem('loggedSpatifyApp'));
  const dispatch = useDispatch();

  const [serviceAdd, setServiceAdd] = React.useState({
    services: [],
    provider: provider.providerFound._id.toString(),
  });

  const handleChange = (e) => {
    setServiceAdd({
      ...serviceAdd,

      services: [...serviceAdd.services, e.target.value],
    });

    const have = serviceAdd.services.some(
      (service) => service === e.target.value
    );
    if (have) {
      setServiceAdd({
        ...serviceAdd,
        services: [...serviceAdd.services].filter(
          (service) => service !== e.target.value
        ),
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addServicesToProvider(serviceAdd));
    alert('por favor continue con el siguiente paso');
  };

  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <div className='select-services'>
          {data ? (
            data.map((service) => (
              <div className='contain-service' key={service.name}>
                <label htmlFor=''>
                  {service.name}
                  <input
                    type='checkBox'
                    onChange={handleChange}
                    value={service.name}
                    className='input-service'
                  />
                </label>
              </div>
            ))
          ) : (
            <h1>loading...</h1>
          )}
          <input
            value='Confirmar'
            type='submit'
            className='input-submit-service'
          />

          <button
            value='Confirmar'
            type='submit'
            onSubmit={handleSubmit}
            className='input-submit-service'
          >
            Confirmar
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckBoxComponent;

/* 



*/
