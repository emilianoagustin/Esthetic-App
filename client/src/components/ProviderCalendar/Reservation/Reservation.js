import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reservationStatus } from '../../../Redux/actions/actions';
import { HOST } from '../../../utils/constants';
import './Reservation.scss';
import axios from 'axios';

export default function Reservation({ handleActive, date, hour, provider, service, price, handleClickModal, providerID }) {
    const [addresses, setAddresses] = useState([]);
    const [data, setData] = useState({
        user: '',
        providerID: providerID,
        provider: provider,
        date: date,
        hour: hour,
        service: service,
        price: price,
        address: '',
        isActive: true
    });

    useEffect(() => {
        if (localStorage.getItem('loggedSpatifyApp')) {
            const storageData = JSON.parse(localStorage.getItem('loggedSpatifyApp'))
            if (storageData.userFound.roles[0].name === "user") {
                setData({
                    ...data,
                    user: storageData.userFound._id
                })
            }
        }
    }, [])

    useEffect(() => {
        if (data.user !== '') {
            axios.get(`${HOST}/users/${data.user}/addresses`)
                .then(allAddresses => {
                    const addressesData = allAddresses.data;
                    setAddresses(addressesData);
                    addressesData.forEach(ad => {
                        if (ad.is_main === true) {
                            setData({
                                ...data,
                                address: ad.name
                            })
                        }
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [data.user])

    const handleChange = (e) => {
        setData({
            ...data,
            address: e.target.value
        })
    }

    const dispatch = useDispatch();

    const handleAccept = async () => {
        handleClickModal()
        dispatch(reservationStatus(data));
        handleActive()
    }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Reservación</h2>
        <div className='modal-detail'>
          <h3>Detalle del turno</h3>

                    <tbody>
                        <tr>
                            <td>Proveedor</td>
                            <td>{provider}</td>
                        </tr>
                        <tr>
                            <td>Fecha</td>
                            <td>{date}</td>
                        </tr>
                        <tr>
                            <td>Hora</td>
                            <td>{`${hour}:00hs`}</td>
                        </tr>
                        <tr>
                            <td>Servicio</td>
                            <td>{service}</td>
                        </tr>
                        <tr>
                            <td>Precio</td>
                            <td>{`$${price}`}</td>
                        </tr>
                        <tr>
                            <td>Dirección</td>
                            <td>
                                {
                                    addresses && addresses.length ? (
                                        <select onChange={(e) => handleChange(e)}>
                                            {
                                                addresses.map((el, index) => (
                                                    <option key={index} value={el.name}>{el.name}</option>
                                                ))
                                            }
                                        </select>
                                    ) : "No dispone de direcciones"
                                }
                            </td>
                        </tr>
                    </tbody>
                </div>
                <button
                    className='modal-button left'
                    onClick={() => handleActive()}
                >CANCELAR</button>
                <button
                    className='modal-button right'
                    onClick={handleAccept}
                >ACEPTAR</button>
      </div>
    </div>
  );
}
