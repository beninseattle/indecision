import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const propTypes = {
  selectedOption: PropTypes.string,
  closeModal: PropTypes.func.isRequired
};

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel={"Selected Option"}
    onRequestClose={props.closeModal}
  >
    <h3>Selected Option</h3>
    <h4>{props.selectedOption}</h4>

    <button onClick={props.closeModal}>Okay</button>
  </Modal>
);

OptionModal.propTypes = propTypes;
export default OptionModal;