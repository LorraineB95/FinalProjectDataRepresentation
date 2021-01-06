import React, { useState } from "react";  
import axios from 'axios';  
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    float: 'right',
    marginRight: '70px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Enter your Name', 'Enter your E-mail', 'Completed'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <form><div style={{ textAlign: "center", display: 'inline-block', }} className="form-group">
      <label style={{ float: "left",  }}>Enter First Name:</label>
      <input type='text'
          className='form-control' 
          required></input >
  </div><br></br>
  <div style={{ textAlign: "center", display: 'inline-block', }} className="form-group">
      <label style={{ float: "left",  }}>Enter Last Name:</label>
      <input type='text'
          className='form-control' 
          required></input >
  </div>
  </form>;
    case 1:
      return <div style={{ textAlign: "center", display: 'inline-block', }} className="form-group">
      <label style={{ float: "left",  }}>Enter Your E-Mail:</label>
      <input type='text'
          className='form-control' 
          required></input >
  </div>;
  <br></br>
    case 2:
      return 
    default:
      return 'Unknown stepIndex';
  }
}
// Declares stepper functionality to go back and forward within the form
export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
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
      <br></br>
      <h2>Follow Us</h2>
      <hr></hr>
      <br></br>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}