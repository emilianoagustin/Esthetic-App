import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { HOST } from "../../utils/constants";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import './ProviderCalendar.scss';

export default function ProviderCalendar({ match }) {
    const [provider, setProvider] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const providerID = match.params.provider
        axios.get(`${HOST}/providers/${providerID}`)
            .then(provider => {
                console.log(provider.data);
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

    const handleDateClick = (e) => {
        console.log(e);
    }

    return (
        <div>
            {
                loading ? (<div>cargando...</div>) :
                    error ? (<div>error...</div>) :
                        (<div className='container'>
                            <h1>{provider.firstName}</h1>
                            <div className=''>
                                <div className='calendar-container'>
                                    <div className='calendar-division'>
                                        <FullCalendar
                                            className='calendar'
                                            plugins={[dayGridPlugin, interactionPlugin]}
                                            initialView="dayGridMonth"
                                            dateClick={handleDateClick}
                                        />
                                    </div>
                                    <div className='calendar-events'>
                                        sdadsdas
                                    </div>
                                </div>
                            </div>
                        </div>)
            }
        </div>
    )
}
