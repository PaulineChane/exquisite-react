import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  // generate fields from fields prop
  const genFields = (fields) => {
    let newFields = [];

    for(const item of fields) {
      if (typeof(item) === 'string') {
        newFields.push(item);
      } else {
        newFields.push(<input placeholder = {item.placeholder} type = "text" />)
      }
    }

    return newFields
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            // Put your form inputs here... We've put in one below as an example
            genFields(props.fields)
          }
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" onSubmit={props.sendSubmission} value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
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
