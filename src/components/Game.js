import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

const Game = () => {
  // player number use state
  const [currentPlayer, updatePlayer] = useState(1);
  
  // all submissions 
  const [allSubmissions, updateSubmissions] = useState([]);

  // check for finalPoem state
  const [isSubmitted, updateSubmittedState] = useState(false); 

  // field placeholder
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  // updates app on submit
  const onFormSubmit = () => {

  }

  const onFinishedPoem = () => {
    updateSubmittedState(true);
  }
  
  // how to make this more DRY??? 
  if(isSubmitted) {
    return (
      <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      <FinalPoem submissions = {allSubmissions} isSubmitted = {isSubmitted} revealPoem = {onFinishedPoem}/>

    </div>
    );
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission submission = {allSubmissions.lastItem}/>

      <PlayerSubmissionForm fields = {FIELDS} index = {currentPlayer} sendSubmission={onFormSubmit} isSubmitted = {isSubmitted}/>

      <FinalPoem submissions = {allSubmissions} isSubmitted = {isSubmitted} revealPoem = {onFinishedPoem}/>

    </div>
  );
}

export default Game;
