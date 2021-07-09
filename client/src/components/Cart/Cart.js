import React from 'react';
import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem/CartItem';
import CartOrder from './CartOrder/CartOrder';
import Image from '../../img/wall-cart.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    gridContainer: {
        marginTop: '90px'
    },
}));

function Cart() {
    const classes = useStyles();
    return(
        <Container maxWidth="false" className={classes.root}>
            <Grid container direction="row">
                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    xs={12} 
                    sm={6}
                    className={classes.gridContainer}
                    
                >
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    xs={12} 
                    sm={6} 
                >
                    <CartOrder />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart;