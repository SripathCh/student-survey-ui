import React, { useState } from "react";
import "../styles/submitsurveyform.css";
import { useNavigate } from "react-router-dom";

const SubmitSurveyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    phoneNum: "",
    email: "",
    date: "",
    likedStudents: false,
    likedLocation: false,
    likedCampus: false,
    likedAtmosphere: false,
    likedDormRooms: false,
    likedSports: false,
    interestSource: "",
    recommend: "",
    raffle: "",
    comments: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Process form data here
  };
  const redirectToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <button
        onClick={redirectToHomePage}
        type="button"
        class="btn btn-primary"
      >
        Back to Home
      </button>
      <form onSubmit={handleSubmit}>
        <h2>Student Survey Form</h2>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                required
              />
            </div>
          </div>
          <label htmlFor="streetAddress">Street address *</label>
          <input
            type="text"
            className="form-control"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Enter your street address"
            required
          />
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city e.g. Fairfax"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter State e.g. Virginia"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="zip">Zip *</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Enter your 5-digit zipcode"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNum">Phone Number *</label>
              <input
                type="text"
                className="form-control"
                id="phoneNum"
                name="phoneNum"
                value={formData.phoneNum}
                onChange={handleChange}
                placeholder="Enter your Phone No"
                required
              />
            </div>
          </div>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your e-mail, e.g. sripath.cherukuri@gmail.com"
            required
          />
          <label htmlFor="date">Date of Survey *</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>What did you like most about the campus?</label>
          <br />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="likedStudents"
              name="likedStudents"
              checked={formData.likedStudents}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="likedStudents">
              Students
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="likedLocation"
              name="likedLocation"
              checked={formData.likedLocation}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="likedLocation">
              Location
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="likedCampus"
              name="likedCampus"
              checked={formData.likedCampus}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="likedCampus">
              Campus
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="likedAtmosphere"
              name="likedAtmosphere"
              checked={formData.likedAtmosphere}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="likedAtmosphere">
              Atmosphere
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="likedDormRooms"
              name="likedDormRooms"
              checked={formData.likedDormRooms}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="likedDormRooms">
              Dorm Rooms
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="likedSports"
              name="likedSports"
              checked={formData.likedSports}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="likedSports">
              Sports
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>How did you become interested in the university?</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="interestFriends"
              name="interestSource"
              value="friends"
              checked={formData.interestSource === "friends"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="interestFriends">
              Friends
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="interestTelevision"
              name="interestSource"
              value="television"
              checked={formData.interestSource === "television"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="interestTelevision">
              Television
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="interestInternet"
              name="interestSource"
              value="internet"
              checked={formData.interestSource === "internet"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="interestInternet">
              Internet
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="interestOther"
              name="interestSource"
              value="other"
              checked={formData.interestSource === "other"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="interestOther">
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="recommend">
            How likely are you to recommend this school to other prospective
            students?
          </label>
          <select
            className="form-control"
            id="recommend"
            name="recommend"
            value={formData.recommend}
            onChange={handleChange}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="Very Likely">Very Likely</option>
            <option value="Likely">Likely</option>
            <option value="Unlikely">Unlikely</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="raffle">
            Raffle (Enter ten comma separated numbers from 1 to 100)
          </label>
          <input
            type="text"
            className="form-control"
            id="raffle"
            name="raffle"
            value={formData.raffle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            rows="4"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
        <button type="button" className="btn btn-outline-danger">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SubmitSurveyForm;
