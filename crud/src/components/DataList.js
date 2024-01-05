import React, { useEffect, useState } from "react";
import axios from "axios";

const DataList = () => {
  //state to store data
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        //get data from API
        const result = await axios.get(
          "https://interview.supershinecarcare.lk/api/customer"
        );
        setData(result.data);
      } catch (error) {
        //display errorn in console
        console.log("Error In Fetching  Data", error);
        //display error in alert
        window.alert("Error In Fetching  Data - " + error);
      }
    };

    //call function
    getUserData();
  }, []);

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container-fluid">

      <button className="btn btn-primary mt-4" onClick={toggleForm}>Click to Add User</button>
      {showForm && 
      <div>
        scsdcsdvsdvsd</div>}
      <h4 className="text-center mt-5 mb-5">All Users List</h4>

      {/* display data in table */}
      <div style={{ overflowX: "auto" }}>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th></th>
              <th>Customer Id</th>
              <th>Full Name</th>
              <th>City</th>
              <th>Date of Birth</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Address 01</th>
              <th>Address 02</th>
              <th>NIC</th>
              <th>Discount Id</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          {data.map((item, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{item.idCustomer}</td>
                <td>{item.Full_Name}</td>
                <td>{item.City}</td>
                <td>{item.DOB}</td>
                <td>{item.TP}</td>
                <td>{item.Email}</td>
                <td>{item.Address1}</td>
                <td>{item.Address2}</td>
                <td>{item.NIC}</td>
                <td>{item.discount_id}</td>
                <td>
                  <button className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default DataList;
