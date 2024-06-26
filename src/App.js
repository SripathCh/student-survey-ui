// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import SubmitSurveyForm from "./components/SubmitSurveyForm";
import UpdateSurvey from "./components/UpdateSurvey";
import EditSurvey from "./components/EditSurvey";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-survey" element={<SubmitSurveyForm id={0} isEditMode={false}/>} />
        <Route path="/edit-survey/:id" element={<EditSurvey />} />
        <Route path="/update-survey" element={<UpdateSurvey />} />
        
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
