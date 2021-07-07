/* import React from "react";
/* import SearchBar from '../components/SerchBar' */
/* import { Link } from "react-router-dom"; */
/* import './Header.css' */
/* import { AiOutlineShoppingCart } from "react-icons/ai"; */

/*  const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#E27D60",
        border: "solid 0.1rem",
      }}
    >
      <Link to={"/"}>
        <p className="p">
          <img
            src="r-icons-vector-graphics-studio-share-pueblo-5bab99fd779754.0510601415379727334899.jpg"
            alt="no hay img"
          />
        </p>
      </Link>

      <div>
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <p>Buscar Servicio</p>{" "}
          <input type="text" style={{ marginLeft: "1rem", height: "1rem" }} />
        </Link>
      </div>
      <Link to={`/`}>
        <p className="p">Zona</p>
      </Link>
      <Link to={`/`}>
        <p>Inscribite Como Profesional</p>
      </Link>
      <Link to={`/`}>
        <button style={{ borderRadius: 10 }}>Login</button>
      </Link>
      <Link to={`/`}>
        <button style={{ borderRadius: 10 }}>Register</button>
      </Link>
      <Link to={`/`}>
        <button style={{ borderRadius: 10 }}>
          <AiOutlineShoppingCart />
        </button>
      </Link>
    </div>
  );
};

export default Header;
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}