import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addorder } from "../../../helpers/http/index";
import { resetCart } from "../../../store/cart";
import { setOrder } from "../../../store/order";
import { getOrders } from "../../../actions/order.action";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const Payment = ({ handleBack, handleNext }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  const cart = useSelector((state) => state.cart);
  const [failure, setFailure] = React.useState("");
  const [cartItems, setCartItems] = React.useState(cart.CartItems);
  const { user, isAuth } = useSelector((state) => state.auth);
  const { useraddress } = useSelector((state) => state.Address);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setCartItems(cart.CartItems);
    console.log(value);
  }, [cart.CartItems, value]);

  const confirmcardorder = async () => {
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
      let payload;
      if (value === "card") {
        payload = {
          address: useraddress.id,
          items,
          totalAmount,
          paymentStatus: "completed",
          paymentType: "card",
        };
      } else {
        payload = {
          address: useraddress.id,
          items,
          totalAmount,
          paymentStatus: "pending",
          paymentType: "cod",
        };
      }

      const res = await addorder(payload);
      if (res.status === 201) {
        const { order } = res.data;
        dispatch(setOrder({ order }));
        dispatch(resetCart());
        getOrders();
        handleNext();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (event) => {
    event.preventDefault();
    setValue(event.target.value);
    setError("");
    setFailure("");
  };

  const handlePayment = async () => {
    const userid = { userId: user.id };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/orders`,
      userid
    );
    if (!data) {
      return;
    }
    const { amount, id: order_id, currency } = data.order;
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: currency,
      amount: amount.toString(),
      order_id: order_id,
      name: "HUNGRY",
      image: `http://localhost:2000/images/favicon.svg`,
      description: "Payment Receipt",
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          amount: amount.toString(),
          currency: currency,
        };
        console.log("resultdata", data);
        await axios
          .post(`${process.env.REACT_APP_API_URL}/success`, data)
          .then((res) => {
            console.log("res", res);
            if (res.data.signatureIsValid) {
              setFailure("");
              confirmcardorder();
            }
          });
      },
      prefill: {
        name: user.name,
        email: "mittalharsh4321@gmail.com",
        phone_number: user.phone,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      setFailure(response.error.description);
    });
    paymentObject.open();
  };

  const handleError = () => {
    setError("Choose Payment Method");
  };

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment Options
        </Typography>
        <FormControl component="fieldset" error={error} failure={failure}>
          <RadioGroup
            aria-label="Payment Options"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="cod"
              control={<Radio />}
              name="cod"
              label="Cash On Delivery"
            />
            <FormControlLabel
              name="card"
              value="card"
              control={<Radio />}
              label="Card"
            />
          </RadioGroup>
          <FormHelperText style={{ color: "#f2222c" }}>{error}</FormHelperText>
          <FormHelperText style={{ color: "#f2222c" }}>
            {failure}
          </FormHelperText>
        </FormControl>
      </React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        {value === "" || value === "cod" ? (
          <>
            {value === "" ? (
              <>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  className="root_button"
                  style={{ cursor: "pointer" }}
                  onClick={handleError}
                >
                  Confirm Order
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  className="root_button"
                  onClick={confirmcardorder}
                >
                  Confirm Order
                </Button>
              </>
            )}
          </>
        ) : (
          <>
            <Button
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              className="root_button"
              onClick={handlePayment}
            >
              Continue
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default Payment;
