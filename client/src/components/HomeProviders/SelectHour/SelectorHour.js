import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//IMPORT MATERIAL UI
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { addHoursJobToProvider } from '../../../Redux/actions/actions';

export default function MaterialUIPickers() {
  const dispatch = useDispatch();
  const initialState = new Date();
  const [selectedDate, setSelectedDate] = useState(initialState.getHours());

  const provider = JSON.parse(window.localStorage.getItem('loggedSpatifyApp'));
  const [addHours, setAddHours] = useState({
    eventHours: [],
    provider: provider.providerFound._id.toString(),
  });

  const handleDateChange = (date) => {
    setSelectedDate(date.getHours());

    setAddHours({
      ...addHours,
      eventHours: [...addHours.eventHours, date.getHours().toString()],
    });

    const have = addHours.eventHours.some(
      (hour) => hour === date.getHours().toString()
    );
    //for no repeat hour
    if (have) {
      setAddHours({
        ...addHours,
        eventHours: [...addHours.eventHours],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHoursJobToProvider(addHours));
    alert('por favor haz click en siguiente');
  };

  //console.log(addHours);

  return (
    <form action='' onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent='space-around'>
          <KeyboardTimePicker
            margin='normal'
            id='time-picker'
            label='Selecciona la hora'
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <button>Confirmar</button>
    </form>
  );
}
