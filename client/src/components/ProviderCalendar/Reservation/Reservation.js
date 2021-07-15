import React from 'react';
import './Reservation.scss';
import axios from 'axios'
import { HOST } from '../../../utils/constants';

export default function Reservation({ handleClick, date, hour, provider, service, price }) {
    const handleReservation = async () => {
        try {
            axios.post(`${HOST}/reservations`,
                {
                    user: '',
                    provider: provider,
                    date: date,
                    hour: hour,
                    service: service,
                    price: price,
                    address: 'address'
                })
        } catch (error) {

        }
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
                            <td>{hour}</td>
                        </tr>
                        <tr>
                            <td>Servicio</td>
                            <td>{service}</td>
                        </tr>
                        <tr>
                            <td>Precio</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td>Dirección</td>
                            <td>{date}</td>
                        </tr>
                    </tbody>
                </div>
                <button
                    className='modal-button left'
                    onClick={handleClick}
                >CANCELAR</button>
                <button
                    className='modal-button right'
                    onClick={handleClick}
                >ACEPTAR</button>
            </div>
        </div>
    )
}
