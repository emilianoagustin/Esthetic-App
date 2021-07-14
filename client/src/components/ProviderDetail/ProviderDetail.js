import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProviderById } from '../../Redux/actions/provider.actions';
import  Modal  from './Modal';

function ProviderDetail() {
    const dispatch = useDispatch();
    const provider = useSelector(state => state.providerById);
    const { id } = useParams();
    console.log(provider);
    useEffect(() => {
        dispatch(getProviderById(id))
    }, [dispatch, id])
    return (
        <div>
            {provider.data.hasCalendar === false ?
                <Modal name={provider.data.firstName}/> :
                <h1>{provider.data.firstName}</h1>
            }
        </div>
    )
}

export default ProviderDetail
