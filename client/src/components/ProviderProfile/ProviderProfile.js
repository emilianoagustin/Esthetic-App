import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ProviderProfileData from './ProviderProfileData.js/ProviderProfileData';
import NoCalendarModal from './NoCalendarModal/NoCalendarModal';

const useStyles = makeStyles(() => ({
    gridItem: {
        height: 'auto',
        width: '50%'
    },
    paper: {
        margin: 'auto 10px',
        padding: 15
    },
    image: {
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        borderRadius: '50%',
        width: 300,
        height: 300
    },
    data: {
        marginTop: 20
    }
}));

function ProviderProfile() {
    const dispatch = useDispatch();
    const provider = useSelector(state => state.providerById);
    const { id } = useParams();
    const classes = useStyles();
    const [isActive, setIsActive] = useState(true)
    console.log('providerDetail----------------', provider);
    console.log('handleActive---------', isActive);
    useEffect(() => {
        // dispatch(getProviderById(id))
    }, [dispatch, id]);

    const handleActive = () =>{
        setIsActive(false)
    }

    return (
        <>
            {provider.data.hasCalendar === false ?
                    <NoCalendarModal name={provider.data.firstName} handleActive={handleActive}/> 
                : 
                    <div className='container-main'>
                        <div className='container'>
                            <div className='providers-container'>
                                <ProviderProfileData provider={provider.data} classes={classes}/>
                            </div>
                        </div>
                    </div>
                
            }
            {isActive ? null
                :   <div className='container-main'>
                        <div className='container'>
                            <div className='providers-container'>
                                <ProviderProfileData provider={provider.data} classes={classes}/>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ProviderProfile;
