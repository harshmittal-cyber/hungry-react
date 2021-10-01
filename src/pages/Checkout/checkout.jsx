import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link as RedirectLink } from "react-router-dom";
import Address from "../CheckoutSteps/Address/Address";
import Payment from "../CheckoutSteps/Payment/Payment";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Review from "../CheckoutSteps/Review/Review";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={`http://localhost:2001`}>
        Hungry.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Order Summary", "Payment details"];

function getStepContent(step, handleNext, handleBack) {
  switch (step) {
    case 0:
      return <Address handleNext={handleNext} />;
    case 1:
      return <Review handleBack={handleBack} handleNext={handleNext} />;
    case 2:
      return <Payment handleNext={handleNext} handleBack={handleBack} />;

    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { isAuth } = useSelector((state) => state.auth);
  const { order } = useSelector((state) => state.order);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { from } = { from: { pathname: "/cart" } };
  if (!isAuth) {
    return <Redirect to={from} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            {activeStep === steps.length ? "Order Successful" : "Checkout"}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your Order ID is #{order.order_id}. We have emailed your order
                  confirmation, and will send you an update when your order will
                  Out For Delivery.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <RedirectLink to="/menu">
                    <Button
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                      className="root_button"
                    >
                      Back to Menu
                    </Button>
                  </RedirectLink>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, handleNext, handleBack)}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
