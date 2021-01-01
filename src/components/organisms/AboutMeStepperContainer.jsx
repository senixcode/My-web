import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Stepper, Step, StepLabel, StepContent, Button, Typography } from "@material-ui/core"
import { AboutMeSection } from './AboutMeSection';
import { CategoriesSkill } from './CategoriesSkill';
/** colors material ui */
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightBlue from "@material-ui/core/colors/lightBlue";
import indigo from "@material-ui/core/colors/indigo";
import teal from "@material-ui/core/colors/teal";
import { getSkills } from "../../helper/getSkills";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContianer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3)
    }
}))
const colorIntensity = 300;
const colorCustom = {
    grey: blueGrey[colorIntensity],
    lightBlue: lightBlue[colorIntensity],
    indigo: indigo[colorIntensity],
    teal: teal[colorIntensity],
};
const skills = getSkills(colorCustom);
function getSteps() {
    return ['Luis Romero Jimenez - "senixcode" , Stak full developer', "Habilidades", "Experiencia"];
}
function getStepContent(step) {
    switch (step) {
        case 0:
            return <AboutMeSection />
        case 1:
            return <CategoriesSkill skills={skills} />
        case 2:
            return <AboutMeSection />

        default:
            break;

    }

}
export const AboutMeStepperContainer = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1)
    const steps = getSteps()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {
                    steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>
                                <Typography variant="h6">
                                    {label}
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                                <div className={classes.actionsContianer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Atras
                                 </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            Siguiente
                                 </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))
                }
            </Stepper>

        </div>
    )
}
