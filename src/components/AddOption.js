import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  addOption: PropTypes.func.isRequired
};

class AddOption extends Component {
  state = {
    error: '',
    newoption: ''
  };

  /**
   * Callback used to submit a new option
   * @param e
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target.elements.newoption.value;

    if (newValue) {
      const error = this.props.addOption(newValue);
      if (error) {
        this.setState(() => ({error: error}));
      } else {
        this.setState(() => ({error: undefined, newoption: ''}));
      }
    }
  };

  /**
   * Callback used for input field to save the input
   * @callback AddOption-changeValue
   * @param {object} e
   */
  changeValue = (e) => {
    const newvalue = e.target.value;
    this.setState(() => ({newoption: newvalue}));
  };

  render = () => (
    <div>
      {this.state.error && <div className="error">{this.state.error}</div>}
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="newoption" onChange={this.changeValue} value={this.state.newoption}/>
        <button disabled={!this.state.newoption}>Add</button>
      </form>
    </div>
  );
}

AddOption.propTypes = propTypes;

export default AddOption;