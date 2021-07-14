import React, { useState } from 'react'
import { Button, 
    TextField, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    MenuItem,
    Select,
    InputLabel,
    Input} from '@material-ui/core';

function Modal({ name }) {
    const [open, setOpen] = useState(true);
    const [hours, setHours] = useState([]);
    const hoursArr = ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',];
    console.log(hours);
    const handleClose = () => {
        setOpen(!open)
    };

    const handleHour = (e) => {
        setHours(e.target.value)
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Hola {name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Para completar su registro necesita ingresar su horario laboral
                </DialogContentText>
                
                <InputLabel id='hours-label'>Horarios Disponibles</InputLabel>
                <Select
                labelId="hours-label"
                id="multiple-hours-input"
                multiple
                value={hours}
                onChange={handleHour}
                input={<Input />}
                //   MenuProps={MenuProps}
                >
                {hoursArr.map((h) => (
                    <MenuItem key={h} value={h}>
                    {h}
                    </MenuItem>
                ))}
                </Select>
            </DialogContent>
            <DialogActions>
                <Button  color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleClose} color="primary">
                    Agregar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default Modal
