import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import logo from "../../img/logo.png";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import SearchBar from '../Searchbar/Searchbar'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const options = [
  "Zona Norte ",
  "Zona Sur",
  "Centro",
  "Y. Buena Norte ",
  "Y. Buena Sur",
  "El Corte",
  "La Banda",
];
const ITEM_HEIGHT = 48;

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const logginState = useSelector((state) => state.userActive);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [zona, setzona] = React.useState(null);

  const open = Boolean(anchorEl);
  const abrir = Boolean(zona);
  console.log(logginState);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClickZona = (event) => {
    setzona(event.currentTarget);
  };
 

  const handleCloseZona = () => {
    setzona(null);
  };

  const loginAndRegister = [
    <Link to={"/login"} style={{ color: "black", textDecoration: "none" }}>
      <Button color="inherit">INGRESAR</Button>
    </Link>,
    "|",
    <Link
      to={"/userRegister"}
      style={{ color: "black", textDecoration: "none" }}
    >
      <Button color="inherit">REGISTRARSE </Button>
    </Link>,
  ];

  const loginProfile = [
    <Avatar
      onClick={handleClick}
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
    />,
    <Menu
      id="fade-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <Link to={"/perfil"} style={{ color: "black", textDecoration: "none" }}>
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
      </Link>
      <Link
        to={"/perfil/historial"}
        style={{ color: "black", textDecoration: "none" }}
      >
        <MenuItem onClick={handleClose}>Historial De Compras</MenuItem>
      </Link>
      <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
    </Menu>,
  ];

  const zonas = [ <Button
    onClick={handleClickZona}
    color="inherit"
    style={{ color: "black", textDecoration: "none" }}
  >
    ZONAS{" "}
  </Button>,
      <Menu
        id="long-menu"
        anchorEl={zona}
        keepMounted
        open={abrir}
        onClose={handleCloseZona}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleCloseZona}>
            {option}
          </MenuItem>
        ))}
      </Menu>
     ]

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <img
                src={logo}
                alt="img no founded"
                style={{ width: "8rem", height: "4rem ", marginBottom: "-1rem" }}
              />
            </Link>
          </Typography>
       
          <SearchBar/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
          <div style={{ display: "flex", marginRight: "2rem" }}>
            <div>
             
              {zonas}
              |
              <Link
                to={"/provaiderRegister"}
                style={{ color: "black", textDecoration: "none", background:"grey" }}
              >
                <Button color="inherit">INSCRIBITE COMO PROFESIONAL</Button>
              </Link>
            </div>
          </div>
          <b>{!logginState ? loginAndRegister : loginProfile}</b>

          <Link
         
            to={"/cart"}
            style={{
              color: "black",
              textDecoration: "none",
              borderRadius: 50,
              marginLeft: "1rem",
            }}
          >
            <Button color="inherit">
              <BiShoppingBag />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
