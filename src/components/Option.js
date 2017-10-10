import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  value: PropTypes.string
};

const Option = (props) => {
  return (
    <div>
      {props.value}
      <button onClick={(e) => {
        props.removeOption(props.value);
      }}>remove</button>
    </div>
  );
};

Option.propTypes = propTypes;
export default Option;