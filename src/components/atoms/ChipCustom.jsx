import React from "react";
import { Chip, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  chip: (props) => ({
    backgroundColor: props.color,
    color: "white",
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    "& > *": {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.pxToRem(19),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
}));

export const ChipCustom = (props) => {
  const classes = useStyles(props);
  return <Chip label={props.name} className={classes.chip} variant="default" />;
};
