import React, { useEffect } from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { QontoConnector, QontoStepIcon } from "./styles";
import { FormikErrors, FormikProps, FormikValues } from "formik";

interface StepperProps {
  errors: FormikErrors<FormikValues>;
  formik: any;
}

const CustomizedSteppers: React.FC<StepperProps> = ({
  children,
  errors,
  formik,
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const steps = getSteps();
  const x = React.Children.toArray(children);

  const childrenArray = [[x[0], x[1], x[2]], x[3], x[4]];

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleNext = () => {
    let filteredErrors: any = null;
    const errorKeys = Object.keys(errors);
    if (activeStep === 0) {
      filteredErrors = errorKeys.filter((val) =>
        ["firstName", "lastName", "email"].includes(val)
      );
    }
    if (activeStep === 1) {
      filteredErrors = errorKeys.filter((val) => ["packages"].includes(val));
    }
    if (activeStep === 2) {
      filteredErrors = errorKeys.filter((val) =>
        ["termsChecked"].includes(val)
      );
    }
    if (filteredErrors && filteredErrors.length > 0) {
      return;
    }
    if (activeStep === steps.length - 1) {
      const typeSafeFormik: FormikProps<FormikValues> = formik;
      typeSafeFormik.handleSubmit();
      typeSafeFormik.handleReset();
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div className={classes.formElements}>
              {childrenArray[activeStep]}
            </div>
            <div className={classes.actions}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CustomizedSteppers;
function getSteps() {
  return [
    "Add Personal Details",
    "Select Package",
    "Agree To Terms And Conditions",
  ];
}
