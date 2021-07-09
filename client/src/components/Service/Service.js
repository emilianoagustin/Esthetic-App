import React from 'react';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
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
                            <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="../../img/Barberia.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                Corte de Pelo
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Corte pelo en tu hogar
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Comprar
                                </Typography>
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
