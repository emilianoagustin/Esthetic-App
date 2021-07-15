import React from 'react';
import { useDispatch } from "react-redux";
import { reservationStatus } from '../../../Redux/actions/actions';
import './Reservation.scss';

export default function Reservation({ handleClick, date, hour, provider, service, price, handleActive }) {

    const dispatch = useDispatch();

    const handleAccept = async () => {
        handleActive(true)
        dispatch(reservationStatus({
            user: '60ef3125034f1a3a38225cb3',
            provider: provider,
            date: date,
            hour: hour,
            service: service,
            price: price,
            address: 'address'
        }));
        handleClick()
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
                    onClick={handleAccept}
                >ACEPTAR</button>
            </div>
        </div>
    )
}
