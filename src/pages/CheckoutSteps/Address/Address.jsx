import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { createaddress } from "../../../helpers/http/index";
import { setAddress } from "../../../store/address";
import { getAddress } from "../../../actions/address.action";

const Address = ({ handleNext }) => {
  React.useEffect(() => {
    getAddress();
  }, []);

  const dispatch = useDispatch();
  const { useraddress } = useSelector((state) => state.Address);
  const addressarray = {
    firstname: useraddress.firstname ? useraddress.firstname : "",
    lastname: useraddress.lastname ? useraddress.lastname : "",
    phone: useraddress.phone ? useraddress.phone : "",
    pincode: useraddress.pincode ? useraddress.pincode : "",
    locality: useraddress.locality ? useraddress.locality : "",
    address: useraddress.address ? useraddress.address : "",
    state: useraddress.state ? useraddress.state : "",
    city: useraddress.city ? useraddress.city : "",
    alternatephone: useraddress.alternatephone
      ? useraddress.alternatephone
      : "",
  };
  const [values, setValues] = React.useState(addressarray);
  const [check, setCheck] = React.useState(false);

  function handleaddress(e) {
    if (e.target.checked) {
      setCheck(true);
    } else if (!e.target.checked) {
      setCheck(false);
    }
  }
  const handleSubmit = async () => {
    try {
      // e.preventDefault();
      const payload = {
        address: {
          firstname: values.firstname,
          lastname: values.lastname,
          phone: values.phone,
          pincode: values.pincode,
          locality: values.locality,
          address: values.address,
          state: values.state,
          city: values.city,
          alternatephone: values.alternatephone,
        },
      };

      const res = await createaddress({ payload });

      if (res.status === 201) {
        setValues(addressarray);
        const { address } = res.data;
        address.address.id = address._id;
        dispatch(setAddress(address));
        handleNext();
      }
    } catch (err) {
      console.log("address error", err);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={values.firstname}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) =>
              setValues({ ...values, firstname: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={values.lastname}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => setValues({ ...values, lastname: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            value={values.address}
            fullWidth
            autoComplete="shipping Address"
            variant="standard"
            onChange={(e) => setValues({ ...values, address: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="locality"
            name="locality"
            label="Locality"
            value={values.locality}
            fullWidth
            autoComplete="shipping Locality"
            variant="standard"
            onChange={(e) => setValues({ ...values, locality: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            value={values.phone}
            fullWidth
            autoComplete="shipping Phone"
            variant="standard"
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={values.city}
            label="City"
            fullWidth
            autoComplete="shipping city"
            variant="standard"
            onChange={(e) => setValues({ ...values, city: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State"
            value={values.state}
            fullWidth
            variant="standard"
            onChange={(e) => setValues({ ...values, state: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pincode"
            name="pincode"
            label="Pincode"
            value={values.pincode}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => setValues({ ...values, pincode: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="alternatephone"
            label="Alternate Phone"
            value={values.alternatephone}
            fullWidth
            autoComplete="shipping Alternate Phone"
            variant="standard"
            onChange={(e) =>
              setValues({ ...values, alternatephone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="saveAddress"
                value="yes"
                onChange={(e) => handleaddress(e)}
              />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {check ? (
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, ml: 1 }}
            className="root_button"
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled
            style={{ color: "#fff" }}
            sx={{ mt: 3, ml: 1 }}
            className="root_button"
          >
            Next
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

export default Address;
