import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../img/Barberia.jpg';
import axios from 'axios';
import { HOST } from '../../../utils/constants';
import { toast } from 'react-toastify';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: '5px',
        margin: '5px auto',
        maxWidth: 700,
        minWidth: 600,
        boxShadow: '0 0 10px gray'
    },
    image: {
        borderRadius: '0.5em',
        width: 100,
        height: 100,
        marginRight: '10px'
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-beetween'
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
        <Paper className={classes.paper}>
            <div className={classes.cartItem}>
                <Grid item>
                    <img className={classes.img, classes.image} alt="complex" src={Image} />
                </Grid>
                <Grid container spacing={2}>
                    <Grid item sm container>
                        <Grid item xs container direction="column">
                            <Grid item xs>
                                <Typography gutterBottom variant="body1">
                                    {`${data.service} - ${data.provider}`}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {`Precio: $${data.price}`}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {`Fecha: ${data.date} - ${data.hour}:00hs`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {`Dirección: ${data.address}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Button onClick={() => handleDelete()} color='secondary' size='medium'>
                    <DeleteIcon />
                </Button>
            </div>
        </Paper>
    )
}

export default CartItem
