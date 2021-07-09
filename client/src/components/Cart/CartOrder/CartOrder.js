import React from 'react';
import { Grid, Paper, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 500,
        height: 500,
        padding: 10
    },
    title: {
        backgroundColor: 'lightgray'
    },
    submit: {
        backgroundColor: '#43945c',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#295938',
            color: '#FFF'
        }
    },
    content: {
        height:'100%'
    }
}))

function CartOrder() {

    const classes = useStyles();

    return (
        <Grid 
            item
        >
            <Paper className={classes.paper}>
                <Grid container direction='column' className={classes.content}>
                <Typography variant='h4' className={classes.title}>
                    Detalle de compra
                </Typography>
                <Typography>
                    otra cosa
                </Typography>
                <Grid container direction='column' justifyContent='flex-end' style={{height: '80%'}}>
                <Button fullWidth='true' className={classes.submit}>
                    PAGAR
                </Button>
                </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default CartOrder
