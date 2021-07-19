import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { HOST } from '../../../utils/constants';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 500,
        height: 300,
        padding: 10,
        backgroundColor: '#ebebeb'
    },
    content: {
        height: '100%'
    },
    submit: {
        backgroundColor: '#43945c',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#295938',
            color: '#FFF'
        }
    },
    check: {
        backgroundColor: '#3F5AF1',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#142EBD',
            color: '#FFF'
        }
    },
    notAvailable: {
        backgroundColor: '#959595',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#959595',
        }
    },
    submitContent: {
        height: '40%'
    }
}))

function CartOrder({ total, itemLoading }) {
    const [userID, setUserID] = useState('');
    const [available, setAvailable] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('loggedSpatifyApp')) {
            const storageData = JSON.parse(localStorage.getItem('loggedSpatifyApp'))
            if (storageData.userFound.roles[0].name === "user") {
                setUserID(storageData.userFound._id)
            }
        }
    }, [])

    const handleCheck = async () => {
        try {
            const res = await axios.get(`${HOST}/reservations/events/${userID}`)
            if (res.data.error) {
                res.data.notAvailable.forEach((reservationDeleted) => {
                    toast.error(`El turno para 
                    ${reservationDeleted.service} del día 
                    ${reservationDeleted.date} a las 
                    ${reservationDeleted.hour}:00hs ya no se encuentra disponible`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                })
            } else {
                toast.success(`Todos los turnos se encuentras disponibles`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                setAvailable(true)
                setTimeout(function () { setAvailable(false); }, 5000);
            }
        } catch (error) {
            console.log(error)
        }
        itemLoading()
    }

    const classes = useStyles();

    return (
        <Grid
            item
        >
            <Paper className={classes.paper}>
                <Grid container direction='column' justifyContent='space-between' className={classes.content}>
                    <Typography variant='h4' className={classes.title}>
                        Detalle de compra
                    </Typography>
                    <Grid item container justifyContent='space-between'>
                        <Grid item>
                            <Typography variant='subtitle1' color="textSecondary">
                                Subtotal
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1' color="textSecondary">
                                {`$${total}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider variant="inset" />
                    <Grid item container justifyContent='space-between'>
                        <Grid item>
                            <Typography variant='body1'>
                                Total
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                {`$${total}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction='column-reverse' className={classes.submitContent}>
                        <Grid item>
                            <Button onClick={handleCheck} fullWidth='true' className={classes.check}>
                                REVISAR DISPONIBILIDAD
                            </Button>
                            <Button fullWidth='true' className={available ? classes.submit : classes.notAvailable}>
                                PAGAR
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default CartOrder
