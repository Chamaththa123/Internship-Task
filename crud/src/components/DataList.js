import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DataList.css";
import AddDataForm from "./AddDataForm";
import DeleteDataButton from "./DeleteDataButton";

const DataList = () => {
  const [userData, setUserData] = useState([]); // State to store data
  const [isLoading, setIsLoading] = useState(true); //loading state
  const [showForm, setShowForm] = useState(false); // State for add form visibility
  const [deletemsg, setDeletemsg] = useState(""); // State for delete msg

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://interview.supershinecarcare.lk/api/customer"
        );
        setUserData(result.data);
      } catch (error) {
        window.alert("Error fetching data - " + error); //error handling for API requests
      } finally {
        setIsLoading(false); //update loading state
      }
    };

    fetchData();
  }, []);

  // Form visibility function
  const formAction = () => {
    setShowForm(!showForm);
  };

  //handle delete
  const handleDelete = (id) => {
    setUserData(userData.filter((item) => item.idCustomer !== id)); // Remove deleted item from state
    setDeletemsg(`User with ID ${id} has been deleted.`);
  };

  return (
    <div className="container-fluid">
      <button className="btn btn-primary mt-4" onClick={formAction}>
        Click to Add User
      </button>
      {showForm && (
        <div>
          <AddDataForm />
        </div>
      )}

      <h4 className="text-center mt-5 mb-5">All Users List</h4>
      {deletemsg && <div class="alert alert-danger">{deletemsg}</div>}
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
      ) : userData.length === 0 ? (
        //check whether data avilabe or not
        <p className="msg">No User Data Available.</p>
      ) : (
        //display data
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
          <tbody>
            {userData.map((item, index) => (
              <tr key={index}>
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
                  <a
                    className="btn btn-warning"
                    href={`/Update/${item.idCustomer}`}
                  >
                    Update
                  </a>
                </td>
                <td>
                  {/* delete component */}
                  <DeleteDataButton
                    id={item.idCustomer}
                    onDelete={handleDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataList;
