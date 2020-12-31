import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AboutMeSection } from "./AboutMeSection";
import Box from "@material-ui/core/Box";
import { CategoriesSkill } from "./CategoriesSkill";
/** colors material ui */
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightBlue from "@material-ui/core/colors/lightBlue";
import indigo from "@material-ui/core/colors/indigo";
import teal from "@material-ui/core/colors/teal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel2");
  const colorIntensity = 300;
  const colorCustom = {
    grey: blueGrey[colorIntensity],
    lightBlue: lightBlue[colorIntensity],
    indigo: indigo[colorIntensity],
    teal: teal[colorIntensity],
  };
  const skills = [
    {
      name: "frontend",
      color: colorCustom.lightBlue,
      variant: "default",
      items: [
        {
          name: "react js",
          color: colorCustom.lightBlue,
          variant: "default",
        },
        {
          name: "Angular js",
          color: colorCustom.lightBlue,
          variant: "default",
        },
        {
          name: "vue js",
          color: colorCustom.lightBlue,
          variant: "default",
        },
        {
          name: "boostrap",
          color: colorCustom.lightBlue,
          variant: "default",
        },
      ],
    },
    {
      name: "backend",
      color: colorCustom.indigo,
      variant: "default",
      items: [
        {
          name: "node js",
          color: colorCustom.indigo,
          variant: "default",
        },
        {
          name: "c#",
          color: colorCustom.indigo,
          variant: "default",
        },
      ],
    },
    {
      name: "Base de datos",
      color: colorCustom.grey,
      variant: "default",
      items: [
        {
          name: "mysql",
          color: colorCustom.grey,
          variant: "default",
        },
        {
          name: "sql serve",
          color: colorCustom.grey,
          variant: "default",
        },
        {
          name: "mongo db",
          color: colorCustom.grey,
          variant: "default",
        },
      ],
    },
    {
      name: "Otros",
      color: colorCustom.teal,
      variant: "default",
      items: [
        {
          name: "Linux",
          color: colorCustom.teal,
          variant: "default",
        },
        {
          name: "Vim",
          color: colorCustom.teal,
          variant: "default",
        },
        {
          name: "docker nodejs",
          color: colorCustom.teal,
          variant: "default",
        },
      ],
    },
  ];
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Actualmente</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AboutMeSection />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Habilidades</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className={classes.heading}
            component={"span"}
            variant={"subtitle1"}
          >
            <Box
              fontSize={{
                xs: "h7.fontSize",
                sm: "h6.fontSize",
                lg: "h5.fontSize",
              }}
            >
              <CategoriesSkill skills={skills} />
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
