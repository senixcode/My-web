import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { useCache } from "../../hooks/useCache";
export const Menus = () => {
  const { get } = useCache();
  const useStyles = makeStyles({
    button: {
      "&.active": {
        borderColor: get("darkMode") === "true" ? "white" : "black",
        borderStyle: "solid",
        borderBottomWidth: 1,
      },
      "&:hover": {
        borderBottomWidth: 2,
        fontSize: "large",
      },
      fontSize: "medium",
    },
  });
  const classes = useStyles();

  return (
    <Typography align="inherit">
      <Button component={NavLink} className={classes.button} to="/" exact>
        Sobre mi
      </Button>
      <Button
        component={NavLink}
        className={classes.button}
        to="/projects"
        exact
      >
        Proyectos
      </Button>
    </Typography>
  );
};
