import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { getServiceDetails, serviceSearch } from "../../Redux/actions/actions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getServices } from "../../Redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
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
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const services = useSelector((state) => state.services.data);
  

  const [keyword, setKeyword] = useState("");

  console.log(keyword);
  const handleChange = (e) => {
    setKeyword(e.target.value);
    dispatch(serviceSearch(keyword));
    console.log("prueba");
  };

  const reset = () => {
    setKeyword("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(getServiceDetails(keyword));
    history.push(`/services/details/${keyword}`);
    reset();
  };

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <form type="submit" action="">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{ color: "rgb(121, 47, 111)" }} />
        </div>
        <Autocomplete
          id="custom-input-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                onChange={(e) => handleChange(e)}
                style={{ width: 200 }}
                placeholder="Buscar un servicio..."
                type="text"
                {...params.inputProps}
              />
            </div>
          )}
          inputProps={{ "aria-label": "search" }}
          onSubmit={onFormSubmit}
        />
      </div>
    </form>
  );
};

const top100Films = [
  { title: "Depilación definitiva", price: "$200" },
  { title: "Corte de pelo para hombre ", price: "$100" },
  { title: "Corte de pelo para mujeres", price: "$250" },
  { title: "Masaje", price: "$100" },
  { title: "Pedicura", price: "$100" },
  { title: "Manicura", price: "$100" },
  { title: "Tintura de pelo", price: "$200" },
  { title: "Maquillaje", price: "$200" },
];
export default SearchBar;
