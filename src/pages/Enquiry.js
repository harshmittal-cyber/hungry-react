import React, { useState } from "react";
import { getFormBody } from "../helpers/utils";

function Enquiry() {
  const initialarray = {
    organisation: "",
    username: "",
    contact: "",
    email: "",
    location: "",
    date: "",
    message: "",
  };

  const [values, setValues] = useState(initialarray);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(getFormBody(values)),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        result.success ? setValues(initialarray) : setError(result.message);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={values.username}
            name="username"
            placeholder="UserName"
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            value={values.organisation}
            name="organisation"
            placeholder="Organisation Name"
            onChange={(e) =>
              setValues({ ...values, organisation: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="text"
            value={values.contact}
            name="contact"
            placeholder="contact"
            onChange={(e) => setValues({ ...values, contact: e.target.value })}
          />
        </div>
        <div>
          <input
            type="email"
            value={values.email}
            name="email"
            placeholder="Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            value={values.location}
            name="location"
            placeholder="Location"
            onChange={(e) => setValues({ ...values, location: e.target.value })}
          />
        </div>
        <div>
          <input
            type="date"
            value={values.date}
            name="date"
            placeholder="Date"
            onChange={(e) => setValues({ ...values, date: e.target.value })}
          />
        </div>
        <div>
          <textarea
            value={values.message}
            name="message"
            placeholder="Message"
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Enquiry;
