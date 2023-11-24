import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Toast from './Toast';



const UpdateSurvey = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([
    {
      id: 2,
      city: "Louisville",
      state: "KY",
      zip: 40233,
      telephone: "5022176695",
      email: "ctander1@blinklist.com",
      likings: ["Campus", "Friends"],
      interest: "Television",
      recommendation: "Very Likely",
      comments: "Robust intangible interface",
      firstName: "Consalve",
      lastName: "Tander",
      streetAddress: "9 Fair Oaks Way",
      dateOfSurvey: "2022-09-29",
    },
  ]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/surveys");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const FinalData = await response.json();
      setData(FinalData);
      console.log(FinalData);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (row) => {
    console.log("Edit", row);
    navigate(`/edit-survey/${row.id}`);
  };

  const handleDelete = async (row) => {
    console.log("Delete", row);
    try {
      const response = await fetch(
        `http://localhost:8080/api/surveys/${row.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error in deletion");
      }

      // Record deleted successfully
      console.log("Record deleted:", row.id);
      setToastMessage(`Record with ID ${row.id} deleted successfully.`);
      setShowToast(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Deletion failed:", error);
    }
  };


  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Street Address",
      selector: (row) => row.streetAddress,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "Zip",
      selector: (row) => row.zip,
    },
    {
      name: "Telephone",
      selector: (row) => row.telephone,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Date of Survey",
      selector: (row) => row.dateOfSurvey,
    },
    {
      name: "Likings",
      selector: (row) => row.likings.join(", "),
    },
    {
      name: "Interest",
      selector: (row) => row.interest,
    },
    {
      name: "Recommendation",
      selector: (row) => row.recommendation,
    },
    {
      name: "Comments",
      selector: (row) => row.comments,
    },
    {
      name: "Edit",
      button: true,
      cell: (row) => <button onClick={() => handleEdit(row)}>Edit</button>,
    },
    {
      name: "Delete",
      button: true,
      cell: (row) => <button onClick={() => handleDelete(row)}>Delete</button>,
    },
  ];

  const redirectToHomePage = () => {
    navigate("/");
  };

  if (isLoading) {
    return <Spinner />; // Use the Spinner component
  }

  return (
    <>
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
      <div className="container title-container" style={{ minWidth: "100%", minHeight: "65%" }}>
        <button onClick={redirectToHomePage} type="button" className="btn btn-primary">
          Back to Home
        </button>
        <DataTable title="Survey Data" columns={columns} data={data} pagination />
      </div>
    </>
  );
};

export default UpdateSurvey;
