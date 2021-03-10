import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 0 20px;
  font-family: sans-serif;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#176f2c" }} position="static">
        <Container fixed>
          <Toolbar variant="dense">
            <NavLink to="/">Strona startowa</NavLink>
            <NavLink to="/AddProformaFormPage">Dodaj nową proformę</NavLink>
            <NavLink to="/ProformaTablePage">Wyświetl listę proform</NavLink>
            <NavLink to="/FilterProformaTablePage">Szukaj proformy</NavLink>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
