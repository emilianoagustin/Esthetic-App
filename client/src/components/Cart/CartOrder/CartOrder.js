import React from 'react';
import { Grid, Paper, Typography, Button, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 500,
        height: 300,
        padding: 10,
        backgroundColor: '#ebebeb'
    },
    content: {
        height:'100%'
    },
    submit: {
        backgroundColor: '#43945c',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#295938',
            color: '#FFF'
        }
    },
    submitContent: {
        height: '40%'
    }
}))

function CartOrder() {

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
                        $1500
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
                            $1500
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction='column-reverse' className={classes.submitContent}>
                    <Grid item>
                        <Button fullWidth='true' className={classes.submit}>
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
