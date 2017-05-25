import React, {PropTypes} from 'react';
import {Modal, Button} from 'react-bootstrap';

const DeleteModal = ({display, onHide, onDelete}, {i18n}) => (
  <Modal show={display} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{i18n.getMessage('GlAccount.areYouSureMessage')}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {i18n.getMessage('GlAccount.areYouSureMessage')}
    </Modal.Body>

    <Modal.Footer>
      <Button bsStyle="default" onClick={onHide}>{i18n.getMessage('GlAccount.cancelButton')}</Button>
      <Button bsStyle="primary" onClick={onDelete}>{i18n.getMessage('GlAccount.deleteButton')}</Button>
    </Modal.Footer>
  </Modal>
);

DeleteModal.propTypes = {
  display: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

DeleteModal.defaultProps = {
  display: false
};

DeleteModal.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default DeleteModal;
