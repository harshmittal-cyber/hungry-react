import * as React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Review({ handleBack, confirmorder, handleNext }) {
  const cart = useSelector((state) => state.cart);
  const { useraddress } = useSelector((state) => state.Address);
  const { isAuth } = useSelector((state) => state.auth);
  const [cartItems, setCartItems] = React.useState(cart.CartItems);

  React.useEffect(() => {
    setCartItems(cart.CartItems);
  }, [cart.CartItems, isAuth]);

  const getCartTotal = () => {
    let total = 0;
    Object.keys(cartItems).map((key) => {
      total += cartItems[key].price * cartItems[key].quantity;
    });
    return total;
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.keys(cartItems).map((key, index) => (
          <ListItem key={cartItems[key].name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={cartItems[key].name}
              secondary={cartItems[key].description}
            />
            <Typography variant="body2">{cartItems[key].price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {getCartTotal()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {useraddress.firstname} {useraddress.lastname}
          </Typography>
          <Typography gutterBottom>
            {useraddress.city},{useraddress.state}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Typography gutterBottom sx={{ mt: 2 }}>
            Cash On Delivery
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <Button
          onClick={confirmorder}
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          className="root_button"
        >
          Place Order
        </Button>
      </Box>
    </React.Fragment>
  );
}
