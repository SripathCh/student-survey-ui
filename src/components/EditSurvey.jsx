import React from 'react';
import SurveyForm from './SubmitSurveyForm';
import { useParams } from 'react-router-dom';

const EditSurvey = () => {
    const { id } = useParams();
    console.log(id);
    return <SurveyForm id={id} isEditMode={true} />;
};

export default EditSurvey;
