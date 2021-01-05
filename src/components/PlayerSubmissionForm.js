import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  // generate default fields from fields prop
  const defaultFields = (fields) => {
    let newFields = {};
      for(const item of fields) {
        if(!typeof(item) === 'string') {
          // here, we aren't checking against default, so we can submit placeholders if we type it in
          newFields[item.key] = '';
        }
      }
    return newFields
  }
  // track state of form data
  const [formData, updateFormData] = useState(defaultFields(props.fields));

 // detect field value change 
  const onFieldChange = (event) => {
    const fieldName = event.target.name;
    const updatedValue = event.target.value;

    const newFormData = {...formData};

    newFormData[fieldName] = updatedValue;
    updateFormData(newFormData);
  }
  // generate fields from fields prop
  const genFields = (fields) => {
    let newFields = [];

    for(const item of fields) {
      if (typeof(item) === 'string') {
        newFields.push(item);
      } else {
        newFields.push(<input id = {item.key} 
                              name = {item.key} 
                              placeholder = {item.placeholder} 
                              type = 'text' 
                              onChange = {onFieldChange}
                              className = {formData[item.key] ? '' : 'PlayerSubmissionForm__input--invalid'}/>)
      }
    }

    return newFields
  }

  // call props callback on submission 

  const onSubmit = (event) => {
    event.preventDefault();
    props.sendSubmission(formData);
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit = {onSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            // Put your form inputs here... We've put in one below as an example
            genFields(props.fields)
          }
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
