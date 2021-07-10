import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import {getUser} from '../../Redux/actions/actions'
import { useInput } from "../../hooks/customHooks";
import { UserContext } from "../../index";
import { log, success, error } from "../../utils/logs";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
/* import Link from "@material-ui/core/Link"; */
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const loggin = useSelector((state) => state.userActive);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");
  const data = { email: email.value, password: password.value }
  const { setUser } = useContext(UserContext);


  const handleSubmit =  (e) => {
    e.preventDefault();
    log("intento de logeo");
    dispatch(getUser(data));
    try{ if(loggin){ 
      
      setUser(data);
      success(`logged user ${data.email}`);
      // redirect home
      history.push("/home")};
    } catch ({ response }) {
      // algo no esta.
      error(response);
    }
  };
  /*   console.log(data)
      // seteo de estado
      setUser(data);
      success(`logged user ${data.email}`);
      // redirect home
      history.push("/home");
    } catch ({ response }) {
      // algo no esta.
      error(response);
    }
  }; */

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            {...email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            {...password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste la contraseña? 
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/userRegister"} variant="body2">
                {"No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
