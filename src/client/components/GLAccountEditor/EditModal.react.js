import React, {PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';
import GlAccountForm from './GlAccountForm.react';

const EditModal = ({display, onHide, glAccount, onUpdate}, {i18n}) => (
  <Modal show={display} onHide={onHide} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title>{i18n.getMessage('GlAccount.editGlAccount')}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <GlAccountForm mode='edit' onCancel={onHide} onSubmit={onUpdate} formValue={glAccount}/>
    </Modal.Body>
  </Modal>
);

EditModal.propTypes = {
  display: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  glAccount: PropTypes.object
};

EditModal.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default EditModal;
