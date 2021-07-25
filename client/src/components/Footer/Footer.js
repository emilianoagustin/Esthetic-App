import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    containerFooter: {
        position: 'relative',
        backgroundColor: 'hsl(308deg 44% 33%)',
        width: '100%',
        height: 150,
        marginTop: 50
    },
    containerFooterCopyright: {
        position: 'absolute',
        width: '20%',
        left: 20,
        bottom: 5
    },
    containerFooterLinks: {
        '& p': {
            margin: '20px auto',
            color: 'white',
            fontWeight: 'bold'
        },
        '& a': {
            textDecoration: 'none'
        }
    },
    footerCopyright: {
        color: 'White',
        fontWeight: 'bold',
        padding: 5,
        margin: 'auto auto 10px 10px'
    }
}))

function Footer() {
    const classes = useStyles();

    return (
        <Grid container className={classes.containerFooter}>
            <Grid item container justifyContent='space-around'>
                <Grid item container justifyContent='flex-end' className={classes.containerFooterCopyright}>
                    <span className={classes.footerCopyright}>© Copyright 2021 G14</span>
                </Grid>
                <Grid item container justifyContent='center' alignItems='center'>
                    <div className={classes.containerFooterLinks}>
                        <Link to='/about'>
                            <p>Sobre nosotros</p>
                        </Link>
                        <Link to='/login'>
                            <p>ingresar</p>
                        </Link>
                        <Link to='/userRegister'>
                            <p>registrarse</p>
                        </Link>
                    </div>
                </Grid>
            </Grid>
            {/* <Grid item container justifyContent='flex-start' alignItems='flex-end'>
                <span className={classes.footerCopyright}>© Copyright 2021 G14</span>
            </Grid> */}
        </Grid>
    )
}

export default Footer
