import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Service from '../Service/Service';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(10),
    }
}));

function Cart() {
    const classes = useStyles();
    return(
        <Container maxWidth="lg" className={classes.root}>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} lg={6}>
                    <Service />
                    <Service />
                    <Service />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart;