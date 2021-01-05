import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  // to print all submissions when poem is finished
  const printSubmissions = (submissions) => {

    return submissions.map((submission)=> <p>{submission}</p>);
  }

  const renderObject = (isSubmitted) => {
    if(isSubmitted){
      return(
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            {printSubmissions(props.submissions)}
        </section>
            );
    } else {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" onClick = {props.revealPoem} value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        </div>
      );

    }
  }
  return (
    <div className="FinalPoem">
      {renderObject(props.isSubmitted)}
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
