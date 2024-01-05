import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "./NavBar";

function UpdateDataForm() {
  const { id } = useParams(); //get id from url
  const [userData, setUserData] = useState({}); //state for hold fetch data
  const [isLoading, setIsLoading] = useState(true); //loading state
  // const history = useHistory();
  //hold form data
  const [formData, setFormData] = useState({
    Full_Name: "",
    City: "",
    DOB: "",
    TP: "",
    Email: "",
    Address1: "",
    Address2: "",
    NIC: "",
    discount_id: "",
  });

  //fetch data for specific user
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.get(
          `https://interview.supershinecarcare.lk/api/customer/${id}`
        );
        setUserData(result.data);
        setFormData(result.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  //handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //hnadle form submition
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://interview.supershinecarcare.lk/api/customer/${id}`,
        formData
      );
      window.alert("User data updated successfully!");
      window.location.href = "/";
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <h4 className="text-center mt-5 mb-5">Update User Details</h4>
        {isLoading ? (
          // loading indicators
          <div className="text-center mt-4">
            <p>Loading User Details... Please Wait</p>
            <div className="spinner-grow text-primary">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-primary">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-primary">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="column">
                <label className="form-label mt-3">User Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="Full_Name"
                  name="Full_Name"
                  value={formData.Full_Name}
                  onChange={handleChange}
                />
              </div>
              <div className="column">
                <label className="form-label mt-3">City:</label>
                <input
                  type="text"
                  name="City"
                  className="form-control"
                  id="City"
                  value={formData.City}
                  onChange={handleChange}
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
                  id="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                />
              </div>
              <div className="column">
                <label className="form-label mt-3">Contact No:</label>
                <input
                  type="text"
                  name="TP"
                  className="form-control"
                  id="TP"
                  value={formData.TP}
                  onChange={handleChange}
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
                  id="Email"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="column">
                <label className="form-label mt-3">Address1:</label>
                <input
                  type="text"
                  name="Address1"
                  className="form-control"
                  id="Address1"
                  value={formData.Address1}
                  onChange={handleChange}
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
                  id="Address2"
                  value={formData.Address2}
                  onChange={handleChange}
                />
              </div>
              <div className="column">
                <label className="form-label mt-3">NIC:</label>
                <input
                  type="text"
                  name="NIC"
                  className="form-control"
                  id="NIC"
                  value={formData.NIC}
                  onChange={handleChange}
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
                  id="discount_id"
                  value={formData.discount_id}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-warning mt-4 mb-4">
              Update User Details
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default UpdateDataForm;
