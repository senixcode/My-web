import { Hidden, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { Brightness5 as Noon, Brightness6 as Night } from "@material-ui/icons";
import { PopoverCustom } from "../molecules/PopoverCustom";

export const IconButtonTheme = ({ icon, handleSwitchTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const PopoverTheme = ({ message }) => {
    return (
      <Hidden mdDown>
        <PopoverCustom
          anchorEl={anchorEl}
          handlePopoverClose={handlePopoverClose}
          message={message}
        />
      </Hidden>
    );
  };
  return (
    <IconButton
      onClick={handleSwitchTheme}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {icon === "noon" ? (
        <>
          <Noon fontSize="large" />
          <PopoverTheme message="Tema Claro" />
        </>
      ) : (
        <>
          <Night fontSize="large" />
          <PopoverTheme message="Tema Oscuro" />
        </>
      )}
    </IconButton>
  );
};
