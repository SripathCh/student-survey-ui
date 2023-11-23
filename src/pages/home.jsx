import React from "react";
import "../styles/home.css"; // Uncomment if you have custom styles
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const redirectToStudentSurveyForm = () => {
        navigate('/submit-survey'); // Replace with your first path
    };

    const redirectToUpdateSurveyPage = () => {
        navigate('/update-survey'); // Replace with your second path
    };
  return (
    <>
      <div className="container mt-3 title-container" style={{minWidth:"70%"}}>
        <h1>Welcome to the Student Survey Form Home Page!!!</h1>
        <button onClick={redirectToStudentSurveyForm} type="button" className="btn btn-primary">
          Submit Form
        </button>
        <button onClick={redirectToUpdateSurveyPage} type="button" className="btn btn-warning">
          View / Delete / Update Survey
        </button>

        <p>
          <b>SWE 645 - HOMEWORK ASSIGNMENT 3</b> <br></br>
          <b>
            Team Members: Siva Chevuri (G), Sripath Cherukuri (G01395231),
            Mahitha (G), Naveen (G)
          </b>
        </p>
      </div>
    </>
  );
};

export default Home;
