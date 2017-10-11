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
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.selectedOption}</p>

    <button className="button" onClick={props.closeModal}>Okay</button>
  </Modal>
);

OptionModal.propTypes = propTypes;
export default OptionModal;