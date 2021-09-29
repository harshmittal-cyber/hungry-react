import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Payment = ({ handleBack, handleNext }) => {
  return (
    <div>
      <div>Payment</div>
      <input type="radio" id="cod" name="cod" value="COD" />
      <label htmlFor="cod">COD</label>
      <br />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 3, ml: 1 }}
          className="root_button"
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Payment;
