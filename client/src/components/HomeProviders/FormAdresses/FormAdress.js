import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
//

//select
import InputSelect from './InputSelect';
import { addAdressesToProvider } from '../../../Redux/actions/actions';

export default function FormAdresses() {
  const provider = JSON.parse(window.localStorage.getItem('loggedSpatifyApp'));
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [principal, setPrincipal] = useState(false);
  const [dataAdress, setDataAdress] = useState({
    name: '',
    is_main: principal,
    provider: provider.providerFound?._id,
  });
  //

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheck = () => {
    setPrincipal(!principal);
    setDataAdress({
      ...dataAdress,
      is_main: !principal,
    });
  };

  const handleChange = (e) => {
    setDataAdress({
      ...dataAdress,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdressesToProvider(dataAdress));
    setDataAdress({});
    setOpen(false);
  };

  console.log('1data', dataAdress);

  return (
    <div>
      <Button color='secondary' onClick={handleClickOpen}>
        AGREGAR
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Ingresa tu dirección</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Es importante que llenes los siguientes campos ya que podrás ser
            contactado por usuarios que se encuentren cerca a tu ubicación 😉.
            <DialogContentText>
              Nota: para agregar una nueva dirección, debes completar todos los
              campos de este formulario y enviarlo, luego podrás dar 'Click' en
              'AGREGAR' e ingresar tu nueva dirección.
            </DialogContentText>
          </DialogContentText>

          <TextField
            autoFocus
            margin='dense'
            label='Pais'
            type='email'
            fullWidth
            name='country'
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin='dense'
            label='Estado'
            type='email'
            fullWidth
            name='state'
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin='dense'
            label='Ciudad'
            type='email'
            fullWidth
            name='city'
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin='dense'
            label='Dirección'
            type='email'
            fullWidth
            name='address_1'
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin='dense'
            label='Detalles de dirección (ejemplo: apto 101, torre 36)'
            type='email'
            fullWidth
            name='address_details'
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin='dense'
            label='Codigo Zip'
            type='email'
            fullWidth
            name='zip_code'
            onChange={handleChange}
          />

          <InputSelect data={dataAdress} />

          <Grid item xs={12} sm={10}>
            <FormControlLabel
              control={
                <Switch
                  checked={principal}
                  onChange={handleCheck}
                  color='primary'
                />
              }
              label='Dirección principal'
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            CANCELAR
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            ENVIAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
