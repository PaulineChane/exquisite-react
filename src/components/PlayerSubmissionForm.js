import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  // detect field value change 

  const onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
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
                              className = 'PlayerSubmissionForm__input--invalid'/>)
      }
    }

    return newFields
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit = {props.sendSubmission}>

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
