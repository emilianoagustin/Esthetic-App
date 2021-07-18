import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//IMPORT MATERIALUI
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { getServices } from '../../../Redux/actions/actions';

import CheckBoxComponent from '../CheckBox/CheckBoxComponent';
import MaterialUIPickers from '../SelectHour/SelectorHour';
import MultipleSelect from '../AddPayMethod/addPayMethod';

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
}));

function getSteps() {
  return [
    'Selecciona los servicios a prestar',
    'Ingresa tus horarios de trabajo',
    'Agrega tu número de cuenta para recibir tus pagos',
  ];
}

function getStepContent(step, services) {
  switch (step) {
    case 0:
      return (
        <>
          <CheckBoxComponent data={services.data} />
        </>
      );
    case 1:
      return (
        <>
          {
            "Debes seleccionar una hora fija (7:00, 10:00) y darle 'ok'. Para ingresar una nueva hora vuelve a seleccionar el calendario y elije. 💥  UNICAMENTE 💥 cuando hayas terminado de ingresar todas las horas podrás dar 'Click' en 'Confirmar'"
          }
          <MaterialUIPickers />
        </>
      );
    case 2:
      return (
        <>
          <MultipleSelect />
        </>
      );
    default:
      return 'Unknown step';
  }
}
export default function VerticalLinearStepper() {
  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  useEffect(() => {
    //if el provedor nuevo
    dispatch(getServices);
  }, [dispatch]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index, services)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Volver
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            ¡Haz completado todos los pasos!
            <br /> 🎉 Felicitaciones 🎉
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reiniciar
          </Button>
        </Paper>
      )}
    </div>
  );
}
