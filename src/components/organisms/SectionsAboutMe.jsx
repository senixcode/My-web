import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AboutMeSection } from "./AboutMeSection";
import { Box } from "@material-ui/core";

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
              <p> Node js </p>
              <p> React Vue </p>
              <p> React Native</p>
              <p> c# Net MVC Framework </p>
              <p> Mongodb Sql serve Mysql</p>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
