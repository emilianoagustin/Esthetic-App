import React from 'react';
import { useHistory } from 'react-router';

//
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  modal: {
    boxShadow: '5px 5px 5px blue',
    border: '5px solid red',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function DialogFinalRegister({ nameBoton }) {
  const classes = useStyles();

  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);

    history.push('/');
  };

  return (
    <div>
      <Button
        variant='contained'
        color='secondary'
        onClick={handleClickOpen}
        className={classes.button}
      >
        {nameBoton}
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          {'🎉 Bienvenid@ 🎉'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Desde ahora eres parte del gremio 'Prestadores de Servicios' de
            Spa-tify. En tu correo recibiras las notificaciones de los servicios
            que adquieran contigo, además de encontrar todos los detalles es
            esta plataforma😎
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color='primary'>
            Disagree
          </Button> */}
          <Button
            onClick={handleClose}
            color='secondary'
            variant='contained'
            className={classes.button}
          >
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
