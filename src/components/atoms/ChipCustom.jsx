import React from "react";
import { Chip, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  chip: (props) => ({
    backgroundColor: props.color,
    color: "white",
    fontWeight: 500,
    fontSize: "1.2rem",
    "& > *": {
      margin: theme.spacing(1),
    },
  }),
}));

export const ChipCustom = (props) => {
  const classes = useStyles(props);
  return <Chip label={props.name} className={classes.chip} variant="default" />;
};
