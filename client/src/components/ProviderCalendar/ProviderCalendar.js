import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { HOST } from "../../utils/constants"

export default function ProviderCalendar({match}) {
    const [provider, setProvider] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(match)
        const providerID = match.params.provider
        axios.get(`${HOST}/providers/${providerID}`)
            .then(provider => {
                setProvider(provider.data);
                setLoading(false);
                console.log(provider.data)
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            })
    }, [])
    return (
        <div>
            {
                loading ? (<div>cargando...</div>) :
                    error ? (<div>error...</div>) :
                        (<div>{provider.firstName}</div>)
            }
        </div>
    )
}
