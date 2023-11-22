import React, { useState } from "react";
import FormStyles from "../styles/submitsurveyform.css";

const SubmitSurveyForm = () => {
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
    console.log(formData); // Here you can handle the form data, e.g., send to a server
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2>Student Survey Form</h2>

        {/* Name and Address Fields */}
        {/* ...similar structure for other input fields like firstName, lastName, etc... */}

        {/* Liked About Campus */}
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
          {/* ...similar structure for other checkboxes like likedLocation, likedCampus, etc... */}
        </div>

        {/* Interested In University */}
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
          {/* ...similar structure for other radio buttons like interestTelevision, interestInternet, etc... */}
        </div>

        {/* Recommendation */}
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

        {/* Raffle */}
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

        {/* Additional Comments */}
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

        {/* Buttons */}
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

export function links() {
    return [{ rel: "stylesheet", href: FormStyles }];
  }

export default SubmitSurveyForm;
