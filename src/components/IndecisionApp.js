import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

const defaultProps = {
  title: 'Indecision'
};

class IndecisionApp extends Component {
  errors = {
    alreadyExists: 'That option is already present.',
    emptyOption: 'Cannot save an empty option.'
  };

  state = {
    options: [],
    selectedOption: undefined
  };

  /**
   * Load options array from local storage
   */
  componentDidMount = () => {
    try {
      const optionsJson = localStorage.getItem('options');
      const options = JSON.parse(optionsJson);
      if (options) {
        this.setState(() => ({options: options}));
      }
    } catch (e) {
      // ignore errors from json parsing failing
    }
  };

  /**
   * Save the current set of options to storage if the any were added or removed
   * @param {Object} prevProps
   * @param {Object} prevState
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  /**
   * Remove all options
   * @callback IndecisionApp-handleRemoveAllOptions
   */
  handleRemoveAllOptions = () => {
    this.setState(() => ({options: []}));
  };

  /**
   * Remove the option matching the given option string
   * @param {string} option
   */
  handleRemoveOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  /**
   * Add a new option if it doesn't exist
   * @param newOption
   * @returns {string} error text if new optoin cannot be added
   */
  handleAddOption = (newOption) => {
    if (newOption.length < 1) {
      return this.errors.emptyOption;
    }

    if (this.state.options.indexOf(newOption) !== -1) {
      return this.errors.alreadyExists;
    }

    this.setState((prevState) => ({options: prevState.options.concat(newOption)}));
  };

  /**
   * Randomly pick one of the options
   */
  handlePickOption = () => {
    const randomPick = Math.floor(Math.random() * this.state.options.length);

    this.setState(() => ({selectedOption: this.state.options[randomPick]}));
  };

  handleCloseModal = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  render = () => (
    <div>
      <Header title={this.props.title} subtitle={this.props.subtitle}/>
      <div className="container">
        <Action pickOption={this.handlePickOption} disabled={this.state.options.length < 1}/>
        <div className="widget">
          <Options options={this.state.options} removeOption={this.handleRemoveOption}
                   removeAllOptions={this.handleRemoveAllOptions}/>
          <AddOption addOption={this.handleAddOption}/>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} closeModal={this.handleCloseModal} />
      </div>
    </div>
  );
}

IndecisionApp.propTypes = propTypes;
IndecisionApp.defaultProps = defaultProps;

export default IndecisionApp;
