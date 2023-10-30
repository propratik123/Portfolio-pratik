import axios from "axios";
import { useState } from "react";

function EmployeeRegistation() {
  // const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function save(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9090/api/form/send",
        {
          //id: parseInt(id), // Convert the id to a number before sending it to the API.
          email: email,
          name: name,
          message: message,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Form submission was successful.
        alert("Form Submission Successfully");
        // setId("");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        // Form submission failed.
        throw new Error("Form submission failed.");
      }
    } catch (err) {
      // Handle the error response.
      alert("Form submission failed: " + err.message);
    }
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>

            <div className="text-center">
              <button className="btn btn-primary mt-4" onClick={save}>
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeRegistation;
