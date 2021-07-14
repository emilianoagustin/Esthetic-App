import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { HOST } from "../../utils/constants";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import './ProviderCalendar.scss';
import { NavLink } from 'react-router-dom';

export default function ProviderCalendar({ match }) {
    const [provider, setProvider] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const [providerID, setProviderID] = useState(match.params.provider);
    const [date, setDate] = useState('');
    const [PreviousInfo, setInfo] = useState(null);

    useEffect(() => {
        axios.get(`${HOST}/providers/${providerID}`)
            .then(provider => {
                if (!provider.data.hasCalendar) {
                    setError(true);
                    setLoading(false);
                } else {
                    setProvider(provider.data);
                    setLoading(false);
                }
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        const actual = new Date();
        const actualDate = actual.toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        setDate(actualDate)
    }, [])

    useEffect(() => {
        axios.post(`${HOST}/events/calendar`, {
            provider: providerID,
            date: date
        })
            .then(eventsList => {
                setEvents(eventsList.data)
                console.log(eventsList.data)
            })
            .catch(err => {
                setError(true);
            })
    }, [provider, date])

    const handleDateClick = (e) => {
        if (PreviousInfo) PreviousInfo.dayEl.style.backgroundColor = ''
        const actual = e.date;
        const actualDate = actual.toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        setDate(actualDate)
        console.log(e)
        e.dayEl.style.backgroundColor = '#5A72F5';
        setInfo(e);
    }

    return (
        <div className='container-main'>
            {
                loading ? (<div>cargando...</div>) :
                    error ? (<div>error...</div>) :
                        (<div className='container'>
                            <h1 className='title'>{`Agenda de ${provider.firstName}`}</h1>
                            <div className=''>
                                <div className='calendar-container'>
                                    <div className='calendar-division'>
                                        <FullCalendar
                                            plugins={[dayGridPlugin, interactionPlugin]}
                                            initialView="dayGridMonth"
                                            dateClick={handleDateClick}
                                        />
                                    </div>
                                    <div className='calendar-events'>
                                        <h2>Turnos Disponibles</h2>
                                        {
                                            !events ? (<div>cargando...</div>) :
                                                events.map(e => (
                                                    <div className={
                                                        e.isActive ?
                                                            e.isAvailable ? 'event available'
                                                                : 'event not-available'
                                                            : 'event not-active'
                                                    }>
                                                        <div>
                                                            <h4>{e.date}</h4>
                                                            {`Disponibilidad: ${e.isActive ?
                                                                e.isAvailable ? 'Disponible'
                                                                    : 'Reservado'
                                                                : 'No Disponible'
                                                                }`}
                                                        </div>
                                                        {
                                                            e.isActive ?
                                                                e.isAvailable ? (
                                                                    <NavLink className='navLink card-button' to={`/`}>
                                                                        Reservar
                                                                    </NavLink>
                                                                )
                                                                    : null
                                                                : null
                                                        }
                                                    </div>
                                                ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
            }
        </div>
    )
}
