import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const printSubmissions = (submissions) => {
    let submissionsFormatted = [];
    for(const line of submissions) {
      submissionsFormatted.push(`<p>${line}</p>`);
    }

    return submissionsFormatted;
  }

  if(props.isSubmitted){
    return (
      <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.revealPoem(props.submissions)}
      </section>
    </div>

    )
  }
  return (
    <div className="FinalPoem">
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
