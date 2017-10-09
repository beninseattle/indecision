import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  error: PropTypes.string,
  newoption: PropTypes.string
};

const defaultProps = {
  error: undefined,
  newoption: ''
};

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error,
      newoption: props.newoption
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newValue = e.target.elements.newoption.value;

    if (newValue) {
      const error = this.props.addOption(newValue);
      if (error) {
        this.setState(() => {
          return {
            error: error
          };
        });
      } else {
        this.setState(() => {
          return {
            error: undefined,
            newoption: ''
          };
        });
      }
    }
  }

  changeValue(e) {
    const newvalue = e.target.value;
    this.setState(() => {
      console.log('setting to new value: ' + newvalue);
      return {newoption: newvalue};
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <div className="error">{this.state.error}</div>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="newoption" onChange={this.changeValue} value={this.state.newoption}/>
          <button disabled={!this.state.newoption}>Add</button>
        </form>
      </div>
    )
  }
}

AddOption.propTypes = propTypes;
AddOption.defaultProps = defaultProps;

export default AddOption;