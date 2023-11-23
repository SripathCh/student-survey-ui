import React, { useState, useEffect } from "react";
import "../styles/submitsurveyform.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from "react-bootstrap";

const SubmitSurveyForm = ({ id, isEditMode }) => {
  console.log();
  const navigate = useNavigate(id, isEditMode);

  const redirectToHomePage = () => {
    navigate("/");
  };

  const formatDate = (inputDate) => {
    // Split the input date by "/"
    const parts = inputDate.split("/");

    // Extract the parts of the date
    const month = parts[0];
    const day = parts[1];
    const year = parts[2];

    // Reassemble in the desired format "yyyy-MM-dd"
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isEditMode && id) {
      fetch(`http://localhost:8080/api/surveys/${id}`)
        .then((response) => response.json())
        .then((data) => setFormData(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [id, isEditMode]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    telephone: "",
    email: "",
    likings: [],
    interest: "",
    comments: "",
    recommendation: "",
    dateOfSurvey: formatDate(new Date().toLocaleDateString()),
  });

  const [numberData, setNumberData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const numbers = numberData
      .split(",")
      .filter((num) => !isNaN(parseInt(num, 10)) && num.trim() !== "");

    if (numbers.length === 10) {
      const endpoint = isEditMode
        ? `http://localhost:8080/api/surveys/${id}`
        : "http://localhost:8080/api/surveys";
      const method = isEditMode ? "PUT" : "POST";

      try {
        console.log(formData);
        const response = await fetch(endpoint, {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Please enter exactly 10 comma-separated integers.");
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const handleNumberDataChange = (event) => {
    setNumberData(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const checked = formData.likings.includes(event.target.id);
    setFormData({
      ...formData,
      likings: checked
        ? formData.likings.filter((like) => like !== event.target.id)
        : [...formData.likings, event.target.id],
    });
  };

  const handleRadioChange = (event) => {
    setFormData({ ...formData, interest: event.target.value });
  };

  const handleZipChange = (zip) => {
    setFormData({ ...formData, zip: zip });
  };

  return (
    <div className="wholediv">
      <center>
        <p className="h1 text-center">
          {isEditMode ? "Edit Survey Form" : "Student Survey Form"}
        </p>
      </center>
      <form id="surveyForm" className="form-group" onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-6 col-form-label">
            First Name<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              required
              autoFocus
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-6 col-form-label">
            Last Name<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Street Address */}
        <div className="form-group row">
          <label htmlFor="streetAddress" className="col-sm-6 col-form-label">
            Street Address<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="streetAddress"
              placeholder="Street Address"
              required
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* City */}
        <div className="form-group row">
          <label htmlFor="city" className="col-sm-6 col-form-label">
            City<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* State */}
        <div className="form-group row">
          <label htmlFor="state" className="col-sm-6 col-form-label">
            State<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="State"
              required
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Zip Code */}
        <div className="form-group row">
          <label htmlFor="zip" className="col-sm-6 col-form-label">
            Zip Code<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Zip Code"
              required
              value={formData.zip}
              onChange={(event) => {
                handleZipChange(parseInt(event.target.value));
              }}
            />
          </div>
        </div>

        {/* Telephone */}
        <div className="form-group row">
          <label htmlFor="telephone" className="col-sm-6 col-form-label">
            Telephone<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="telephone"
              placeholder="Phone"
              required
              value={formData.telephone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-6 col-form-label">
            E-mail<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Date of Survey */}
        <div className="form-group row">
          <label htmlFor="datesurvey" className="col-sm-6 col-form-label">
            Date of Survey<span className="required-field"></span>
          </label>
          <div className="col-sm-6">
            <p className="form-control-static">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Likings (Checkboxes) */}
        <div className="form-group row">
          <p className="col-sm-6">What did you like about the university?</p>
          <div className="col-sm-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="Students"
                onChange={handleCheckboxChange}
                checked={formData.likings.includes("Students")}
              />
              <label className="form-check-label" htmlFor="Students">
                Students
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="Location"
                onChange={handleCheckboxChange}
                checked={formData.likings.includes("Location")}
              />
              <label className="form-check-label" htmlFor="Location">
                Location
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="Campus"
                onChange={handleCheckboxChange}
                checked={formData.likings.includes("Campus")}
              />
              <label className="form-check-label" htmlFor="Campus">
                Campus
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="Atmosphere"
                onChange={handleCheckboxChange}
                checked={formData.likings.includes("Atmosphere")}
              />
              <label className="form-check-label" htmlFor="Atmosphere">
                Atmosphere
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="Dorms"
                onChange={handleCheckboxChange}
                checked={formData.likings.includes("Dorms")}
              />
              <label className="form-check-label" htmlFor="Dorms">
                Dorms
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="Sports"
                onChange={handleCheckboxChange}
                checked={formData.likings.includes("Sports")}
              />
              <label className="form-check-label" htmlFor="Sports">
                Sports
              </label>
            </div>
          </div>
        </div>

        {/* Interest (Radio buttons) */}
        <fieldset className="form-group">
          <div className="row">
            <p className="col-form-label col-sm-6 pt-0">
              How did you become interested in the university?
            </p>
            <div className="col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="Television"
                  onChange={handleRadioChange}
                  checked={formData.interest === "Television"}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Television
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="Internet"
                  onChange={handleRadioChange}
                  checked={formData.interest === "Internet"}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Internet
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="Friends"
                  onChange={handleRadioChange}
                  checked={formData.interest === "Friends"}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Friends
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="Other"
                  onChange={handleRadioChange}
                  checked={formData.interest === "Other"}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Other
                </label>
              </div>
              {/* Repeat for other radio buttons */}
              {/* ... */}
            </div>
          </div>
        </fieldset>

        {/* Additional Comments */}
        <div className="form-group row">
          <label htmlFor="comments" className="col-sm-6 col-form-label">
            Additional Comments
          </label>
          <div className="col-sm-6">
            <textarea
              className="form-control"
              id="comments"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        {/* Raffle */}
        <div className="form-group row">
          <label htmlFor="numberData" className="col-sm-6 col-form-label">
            Raffle
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="numberData"
              placeholder="Enter Ten Comma Separated Numbers"
              value={numberData}
              onChange={handleNumberDataChange}
            />
          </div>
        </div>

        {/* Dropdown */}
        <div className="form-group row">
          <label htmlFor="recommendation" className="col-sm-6 col-form-label">
            What is the likelihood of you recommending this school to other
            prospective students?
          </label>
          <div className="col-sm-6">
            <select
              className="form-control"
              id="recommendation"
              value={formData.recommendation}
              onChange={handleInputChange}
            >
              <option value="">Open this select menu</option>
              <option value="Very Likely">Very Likely</option>
              <option value="Likely">Likely</option>
              <option value="Unlikely">Unlikely</option>
            </select>
          </div>
        </div>

        {/* Form Submit and Reset Buttons */}
        <div className="form-group row">
          <div className="col-sm-6">
            <button type="submit" className="btn btn-success successbutton">
              Submit
            </button>
            <button type="reset" className="btn btn-success failbutton">
              Cancel
            </button>
            <button
              onClick={redirectToHomePage}
              type="button"
              className="btn btn-primary"
            >
              Back to Home
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitSurveyForm;
