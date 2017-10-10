import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const propTypes = {
  options: PropTypes.array,
  removeOption: PropTypes.func.isRequired
};

const Options = (props) => (
  <div>
    {props.options.length === 0 && <p>Add an option to get started...</p>}
    {
      props.options.map((text) =>
        <Option
          key={text}
          value={text}
          removeOption={props.removeOption}
        />
      )
    }
  </div>
);

Options.propTypes = propTypes;
export default Options;