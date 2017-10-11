import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button" onClick={props.pickOption} disabled={props.disabled}>What should I do?</button>
  </div>
);

export default Action;