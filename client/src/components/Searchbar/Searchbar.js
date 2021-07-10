
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { getServiceDetails } from "../../Redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
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
}));
const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [keyword, setKeyword] = useState("");

  console.log(keyword);
  const handleChange = async (e) => {
    setKeyword(e.target.value);
  };
  const reset = () => {
    setKeyword("");
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(getServiceDetails(keyword));
      history.push(`/services/details/${keyword}`);
      reset();
    } catch {}
  
  };

  return (
    <form type="submit" action="">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar Tratamiento…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={(e) => handleChange(e)}
          inputProps={{ "aria-label": "search" }}
          onSubmit={onFormSubmit}
        />
      </div>
    </form>
  );
};

export default SearchBar;
