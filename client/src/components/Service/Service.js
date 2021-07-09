import React from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../img/Barberia.jpg';

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

function Service() {
    const classes = useStyles();

    return (
        <>
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
                                Corte de Pelo
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Corte de pelo en tu hogar
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                            <Button variant='outlined' color='secondary' size='small'>
                                Eliminar
                            </Button>
                            </Grid>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1">$500.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default Service
