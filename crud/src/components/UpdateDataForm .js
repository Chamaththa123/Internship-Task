import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateDataForm() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    Full_Name: '',
    City: '',
    DOB: '',
    TP: '',
    Email: '',
    Address1: '',
    Address2: '',
    NIC: '',
    discount_id: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://interview.supershinecarcare.lk/api/customer/${id}`);
        setUserData(response.data);
        setFormData(response.data); // Initialize form data with fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://interview.supershinecarcare.lk/api/customer/${id}`, formData);
      // Successful update, you can add success handling here
      console.log('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      <h1>User Details</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : Object.keys(userData).length === 0 ? (
        <p>No user data available.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Full_Name">Full Name:</label>
            <input type="text" id="Full_Name" name="Full_Name" value={formData.Full_Name} onChange={handleChange} />
          </div>
          {/* Add other input fields for user details */}
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default UpdateDataForm;
