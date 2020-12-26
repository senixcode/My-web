import React from "react";
import { makeStyles, Popover, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));
export const PopoverCustom = ({ anchorEl, handlePopoverClose, message }) => {
  const classes = useStyles();
  const open = Boolean(anchorEl);

  return (
    <Popover
      id="mouse-over-popover"
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography>{message}</Typography>
    </Popover>
  );
};
