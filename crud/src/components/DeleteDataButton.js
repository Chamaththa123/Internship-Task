import React from "react";
import axios from "axios";

const DeleteDataButton = ({ id, onDelete }) => {
  //delete function
  const handleDelete = async () => {
    //confirmation alert
    const confirmDelete = window.confirm(
      "Are you sure..Do you want to delete?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://interview.supershinecarcare.lk/api/customer/${id}`
        );
        onDelete(id); //trigger the onDelete callback
      } catch (error) {
        window.alert("Error in Deleting Data - " + error); //error handling for API requests.
      }
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteDataButton;
