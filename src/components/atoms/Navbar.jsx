import React from "react";
import { Grid } from "@material-ui/core";
import { useCache } from "../../hooks/useCache";
import { IconButtonTheme } from "./IconButtonTheme";
import { MySocialNetworks } from "./MySocialNetworks";
import { Menus } from "./Menus";

export const Navbar = ({ handleSwitchTheme }) => {
  const { get } = useCache();

  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <MySocialNetworks />
      {get("darkMode") === "true" ? (
        <IconButtonTheme icon="noon" handleSwitchTheme={handleSwitchTheme} />
      ) : (
        <IconButtonTheme icon="night" handleSwitchTheme={handleSwitchTheme} />
      )}
      <Menus />
    </Grid>
  );
};
