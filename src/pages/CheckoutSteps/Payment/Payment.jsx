import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Payment = ({ handleBack, handleNext }) => {
  return (
    <div>
      <div style={{ fontWeight: 600 }}>Payment Options</div>
      <br />
      <input type="radio" id="cod" name="cod" value="COD" defaultChecked />
      &nbsp;
      <label htmlFor="cod">Cash On Delivery</label>
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
