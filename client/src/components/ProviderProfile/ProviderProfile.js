import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { getProviderDetails } from '../../Redux/actions/actions'
import ProviderProfileData from './ProviderProfileData.js/ProviderProfileData';
import ProviderProfileUpdate from './ProviderProfileUpdate/ProviderProfileUpdate';
import NoCalendarModal from './NoCalendarModal/NoCalendarModal';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ProviderProfileBanner from './ProviderProfileBanner/ProviderProfileBanner';

const useStyles = makeStyles(() => ({
    providerProfile: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 30
    },
    gridItem: {
        width: '70%',
        height: 'auto'
    },
    gridBanner: {
        width: '100%',
        height: 'auto',
        alignSelf: 'flex-start'
    },
    gridProfile:{
        height: 'auto',
        width: 'auto'
    },
    gridForm: {
        height: 'auto',
        width: '80%'
    },
    paper: {
        margin: 'auto 10px',
        padding: 15
    },
    containerBanner: {
        position: 'relative',
        textAlign: 'center',
        boxShadow: '0px 2px 2px #888888',
        marginBottom: 30,
        borderRadius: 3
    },
    bannerText: {
        position: 'absolute',
        top: '20%',
        left: 16,
    },
    image: {
        display: 'flex',
        justifyContent: 'center'
    },
    profileImg: {
        borderRadius: '50%',
        width: 300,
        height: 300
    },
    bannerImg: {
        width: '100%',
        height: 'auto'
    },
    data: {
        marginTop: 20
    },
    divider: {
        margin: '20px auto'
    },
    buttonContainer: {
        margin: '30px auto 5px auto',
        width: 200
    }
}));
//getP;
function ProviderProfile() {
    const dispatch = useDispatch();
    const provider = useSelector(state => state.providerDetails);
    const { id } = useParams();
    const classes = useStyles();
    const [isActive, setIsActive] = useState(true)
    console.log('providerDetail----------------', provider);

    useEffect(() => {
        dispatch(getProviderDetails(id))
    }, [dispatch, id]);

  const handleActive = () => {
    setIsActive(false);
  };

    return (
        <>
            {provider.data.hasCalendar === true ?
                    <NoCalendarModal name={provider.data.firstName} handleActive={handleActive}/> 
                : 
                    <div className='container-main'>
                        <div className='container'>
                            <div className={classes.providerProfile}>
                                <Grid item>
                                    <ProviderProfileData provider={provider.data} classes={classes}/>
                                </Grid>
                                <Grid item container direction='column' justifyContent='center' alignItems='center' className={classes.gridItem}>
                                    <ProviderProfileBanner provider={provider.data} classes={classes}/>
                                    <ProviderProfileUpdate classes={classes}/>
                                </Grid>
                            </div>
                        </div>
                    </div>
                
            }
            {/* {isActive ? null
                :   <div className='container-main'>
                        <div className='container'>
                            <div className={classes.providerProfile}>
                                <Grid item>
                                    <ProviderProfileData provider={provider.data} classes={classes}/>
                                </Grid>
                                <Grid item container direction='column'>
                                    <ProviderProfileBanner classes={classes}/>
                                    <ProviderProfileUpdate classes={classes}/>
                                </Grid>
                            </div>
                        </div>
                    </div>
            } */}
        </>
    )
}

export default ProviderProfile;
