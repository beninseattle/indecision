import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

import AddOption from './AddOption';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  options: PropTypes.array
};

const defaultProps = {
  title: 'Indecision',
  options: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
  }

  errors = {
    alreadyExists: 'That option is already present.',

  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      };
    })
  }

  handleAddOption(newOption) {
    if (newOption.length < 1) {
      return "Please enter an option";
    }

    if (this.state.options.indexOf(newOption) !== -1) {
      return this.errors.alreadyExists;
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(newOption)
      }
    });
  }

  handlePickOption() {
    const randomPick = Math.floor(Math.random() * this.state.options.length);

    alert('Do ' + this.state.options[randomPick]);
  }

  render() {
    const Header = (props) => {
      return (
        <div>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      )
    };

    const Action = (props) => {
      return (
        <div>
          <button onClick={props.pickOption}>What should I do?</button>
        </div>
      )
    };

    const Options = (props) => {
      const Option = (props) => {
        return (
          <div>
            {props.value}
          </div>
        )
      };

      return (
        <div>
          {props.options.map((text) => <Option key={text} value={text}/>)}
        </div>
      )
    };

    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle}/>
        <Action pickOption={this.handlePickOption}/>
        <Options options={this.state.options}/>
        <AddOption addOption={this.handleAddOption}/>
        <button disabled={this.state.options.length < 1} onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    )
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
