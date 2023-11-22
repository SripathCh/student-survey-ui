import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const UpdateSurvey = () => {
  const navigate = useNavigate();
  const handleEdit = (row) => {
    console.log("Edit", row);
  };

  const handleDelete = (row) => {
    console.log("Delete", row);
  };

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: "Street Address",
      selector: (row) => row.streetaddress,
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
      selector: (row) => row.dateofsurvey,
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

  const [data, setData] = useState([
    {
      id: 1,
      firstname: "UpdatedFirstName",
      lastname: "UpdatedLastName",
      streetaddress: "123 Updated Street",
      city: "UpdatedCity",
      state: "UpdatedState",
      zip: 12345,
      telephone: "123-456-7890",
      email: "updated.email@example.com",
      dateofsurvey: "2023-11-25",
      likings: ["UpdatedLiking1", "UpdatedLiking2"],
      interest: "UpdatedInterest",
      recommendation: "UpdatedRecommendation",
      comments: "Updated comments about the survey",
    },
  ]);

  const redirectToHomePage = () => {
    navigate("/"); 
  };

  return (
    <div
      className="container title-container"
      style={{ minWidth: "70%", minHeight: "70%" }}
    >
      <button
        onClick={redirectToHomePage}
        type="button"
        class="btn btn-primary"
      >
        Back to Home
      </button>
      <DataTable title="Survey Data" columns={columns} data={data} pagination />
      ;
    </div>
  );
};

export default UpdateSurvey;
