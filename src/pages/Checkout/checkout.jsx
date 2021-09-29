import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link as RedirectLink } from "react-router-dom";
import Address from "../CheckoutSteps/Address/Address";
import Payment from "../CheckoutSteps/Payment/Payment";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Toolbar from "@mui/material/Toolbar";
import { addorder } from "../../helpers/http/index";
import { resetCart } from "../../store/cart";
import { setOrder } from "../../store/order";
import { getOrders } from "../../actions/order.action";
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

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step, handleNext, handleBack, confirmorder) {
  switch (step) {
    case 0:
      return <Address handleNext={handleNext} />;
    case 1:
      return <Payment handleNext={handleNext} handleBack={handleBack} />;
    case 2:
      return (
        <Review
          handleBack={handleBack}
          confirmorder={confirmorder}
          handleNext={handleNext}
        />
      );

    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const { isAuth } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const { useraddress } = useSelector((state) => state.Address);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const confirmorder = async () => {
    try {
      const items = Object.keys(cart.CartItems).map((key) => ({
        productId: key,
        price: cart.CartItems[key].price,
        quantity: cart.CartItems[key].quantity,
      }));

      const totalAmount = Object.keys(cart.CartItems).reduce(
        (totalprice, key) => {
          const { price, quantity } = cart.CartItems[key];
          return totalprice + price * quantity;
        },
        0
      );

      const payload = {
        address: useraddress.id,
        items,
        totalAmount,
        paymentStatus: "pending",
        paymentType: "cod",
      };

      const res = await addorder(payload);
      if (res.status === 201) {
        const { order } = res.data;
        handleNext();
        dispatch(setOrder({ order }));
        dispatch(resetCart());
        getOrders();
        handleNext();
      }
    } catch (err) {
      console.log(err);
    }
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
                {getStepContent(
                  activeStep,
                  handleNext,
                  handleBack,
                  confirmorder
                )}
                {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    className="root_button"
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box> */}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
// const steps = {
//   1: Address,
//   2: Payment,
// };

// const Checkout = (props) => {
//   const [step, setStep] = useState(1);
//   const Step = steps[step];
//   const { isAuth } = useSelector((state) => state.auth);
//   const { cartTotalItems } = useSelector((state) => state.cart);

//   function onNext() {
//     setStep(step + 1);
//   }

//   function onPrev() {
//     setStep(step - 1);
//   }

//   return (
//     <div>
//       <Step onNext={onNext} onPrev={onPrev} />
//     </div>
//   );
// };

// export default Checkout;
