import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { Skills } from "../molecules/Skills";
import { ChipCustom } from "../atoms/ChipCustom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));
export const CategoriesSkill = ({ skills }) => {
  const classes = useStyles();
  console.log("**", skills);
  return (
    <div className={classes.root}>
      {skills.map((skill, index) => (
        <Fragment key={index}>
          <ChipCustom {...skill} />

          <Skills items={skill.items} />
        </Fragment>
      ))}
    </div>
  );
};
