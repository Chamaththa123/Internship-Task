import React, { useState } from "react";
import axios from "axios";
import "../styles/AddDataForm.css";

function AddDataForm() {
  //inital userdata
  const userData = {
    Full_Name: "",
    City: "",
    DOB: "",
    TP: "",
    Email: "",
    Address1: "",
    Address2: "",
    NIC: "",
    discount_id: "",
  };

  const [formData, setFormData] = useState(userData); //state for manage user data
  const [nicError, setNicError] = useState(""); // State for nic validation
  const [tpError, setTpError] = useState(""); // state for contact no validation
  //function to handle inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //function for form submition
  const handleSubmit = async (event) => {
    event.preventDefault();
//validate nic
    if (formData.NIC.length !== 10 || !formData.NIC.endsWith("v")) {
      setNicError("NIC should be 9 digits long and end with 'v'");
      return;
    }

    if (formData.TP.length !== 10) {
      setTpError("Contact Number should be 10 digits");
      return;
    }

    try {
      await axios.post(
        "https://interview.supershinecarcare.lk/api/customer",
        formData
      );
      window.alert("Inserted data succefully !!");
      setFormData(userData); // reset form
      window.location.reload(); //reload page
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div>
      <h4 className="text-center">Add New User</h4>
      {nicError && <div class="alert alert-danger">
  {nicError}
</div>}

{tpError && <div class="alert alert-danger">
  {tpError}
</div>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <label className="form-label mt-3">User Name:</label>
            <input
              type="text"
              name="Full_Name"
              className="form-control"
              value={formData.Full_Name}
              onChange={handleInputChange}
            />
          </div>
          <div className="column">
            <label className="form-label mt-3">City:</label>
            <input
              type="text"
              name="City"
              className="form-control"
              value={formData.City}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label className="form-label mt-3">Date of Birth:</label>
            <input
              type="date"
              name="DOB"
              className="form-control"
              value={formData.DOB}
              onChange={handleInputChange}
            />
          </div>
          <div className="column">
            <label className="form-label mt-3">Contact No:</label>
            <input
              type="text"
              name="TP"
              className="form-control"
              value={formData.TP}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="form-label mt-3">User Email:</label>
            <input
              type="text"
              name="Email"
              className="form-control"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>
          <div className="column">
            <label className="form-label mt-3">Address1:</label>
            <input
              type="text"
              name="Address1"
              className="form-control"
              value={formData.Address1}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="form-label mt-3">Address2:</label>
            <input
              type="text"
              name="Address2"
              className="form-control"
              value={formData.Address2}
              onChange={handleInputChange}
            />
          </div>
          <div className="column">
            <label className="form-label mt-3">NIC:</label>
            <input
              type="text"
              name="NIC"
              className="form-control"
              value={formData.NIC}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="form-label mt-3">Discount Id:</label>
            <input
              type="text"
              name="discount_id"
              className="form-control"
              value={formData.discount_id}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-4">
          Submit User Details
        </button>
      </form>
    </div>
  );
}

export default AddDataForm;
