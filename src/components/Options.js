import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const propTypes = {
  options: PropTypes.array,
  removeOption: PropTypes.func.isRequired,
  removeAllOptions: PropTypes.func.isRequired
};

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button__link" disabled={props.options.length === 0} onClick={props.removeAllOptions}>Remove All</button>
    </div>

      {props.options.length === 0 && <p className="widget__message">Add an option to get started...</p>}
    {
      props.options.map((text, index) =>
        <Option
          key={text}
          value={text}
          count={index + 1}
          removeOption={props.removeOption}
        />
      )
    }
  </div>
);

Options.propTypes = propTypes;
export default Options;