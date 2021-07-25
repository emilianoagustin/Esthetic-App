import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../img/banner.jpg';
import Covid1 from '../../img/covid1.png';
import { data } from '../../utils/covidData';

const useStyles = makeStyles(() => ({
    bannerImg: {
        width: '100%'
    },
    bannerContainer:{
        position: 'relative',
        textAlign: 'center',
        width: '100%'
    },
    bannerText: {
        position: 'absolute',
        top: '20%',
        left: 16,
        color: 'rgb(121, 47, 111)',
        padding: 10
    },
    bannerSubtitle: {
        position: 'absolute',
        top: '40%',
        left: 16,
        color: 'rgb(121, 47, 111)',
        padding: 10,
        width: '40%'
    },
    container: {
        width: '40%',
        // backgroundColor: 'hsl(190, 50%,30%)',
        padding: 20,
        borderBottom: '5px solid hsl(190, 50%,30%)',
        margin: 40
    },
    containerCard: {
        width: 'auto'
    },
    containerCard2: {
        width: '30%'
    },
    containerText: {
        marginBottom: 10
    },
    containerImg: {
        width: 'auto',
    },
    divImg:{
        width: '100%',
    }
}));

function CovidProtocol() {
    const classes = useStyles();
    return (
        <div className='container-main'>
            <div className='container'>
                <Grid container direction='column'>
                    <Grid item container direction='row'>
                        <div className={classes.bannerContainer}>
                            <img className={classes.bannerImg} src={Image}/>
                            <Typography className={classes.bannerText} variant='h3'>En Spa-tify nos cuidamos entre todos</Typography>
                            <Typography className={classes.bannerSubtitle} variant='h5'>
                                A continuación te detallamos los protocolos y medidas de seguridad que toman todos
                                nuestros prestadores para poder brindar un servicio seguro y sin riesgos ante la pandemia 
                                de COVID-19.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>

                <Grid container justifyContent='space-evenly'>
                {
                    data.map( (d, i) => {
                        return(
                            <Grid key={i} item container direction='row' justifyContent='space-evenly' className={classes.container}>
                                <Grid item className={classes.containerCard2}>
                                    <Typography variant='h4' className={classes.containerText}>
                                        {d.title}
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        {d.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid item container className={classes.containerCard} alignContent='flex-end'>
                                    <div className={classes.divImg}>
                                        <img className={classes.containerImg} src={d.img}/>
                                    </div>
                                </Grid>
                            </Grid>
                        )
                    })
                }
                </Grid>
                {/* <Grid container direction='row' justifyContent='space-evenly' className={classes.container}>
                    <Grid item className={classes.containerCard}>
                        <Typography variant='h4' className={classes.containerText}>
                            Equipamiento para protección
                        </Typography>
                        <Typography variant='subtitle1'>
                            Nuestros prestadores utilizan barbijos A3, mascara protectora y guantes descartables
                        </Typography>
                    </Grid>
                    <Grid item className={classes.containerCard}>
                        <img className={classes.containerImg} src={Covid1}/>
                    </Grid>
                </Grid> */}
            </div>
        </div>
    )
}

export default CovidProtocol
