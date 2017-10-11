import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string
};

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.value}</p>
      <button
        className="button button--link"
        onClick={(e) => {
          props.removeOption(props.value);
        }}>remove
      </button>
    </div>
  );
};

Option.propTypes = propTypes;
export default Option;