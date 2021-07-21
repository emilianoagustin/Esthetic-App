import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../img/Barberia.jpg';
import axios from 'axios';
import { HOST } from '../../../utils/constants';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: '20px auto',
        maxWidth: 500,
        border: '2px solid black'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function CartItem({ data, itemLoading }) {
    const [userID, setUserID] = useState('');
    const classes = useStyles();

    useEffect(() => {
        if (localStorage.getItem('loggedSpatifyApp')) {
            const storageData = JSON.parse(localStorage.getItem('loggedSpatifyApp'))
            if (storageData.userFound.roles[0].name === "user") {
                setUserID(storageData.userFound._id)
            }
        }
    }, [])

    const handleDelete = async () => {
        try {
            await axios.post(`${HOST}/reservations/${userID}/delete`, data)
            itemLoading();
            toast.success(`Reserva eliminada correctamente`, {
                position: toast.POSITION.TOP_CENTER
            })
        } catch (error) {
            toast.error(`Error al eliminar la reserva`, {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    return (
        <Grid xs item>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.img, classes.image} alt="complex" src={Image} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {data.service}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {data.provider}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {data.date}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {`${data.hour}:00hs`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {data.address}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => handleDelete()} variant='outlined' color='secondary' size='small'>
                                    Eliminar
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{data.price}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default CartItem
