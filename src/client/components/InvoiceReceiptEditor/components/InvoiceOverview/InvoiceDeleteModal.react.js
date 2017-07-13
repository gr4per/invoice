import React, { PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

const InvoiceDeleteModal = ({ isShown, onDelete, onCancel, invoiceId }, context) => {
  return (
    <Modal show={isShown} keyboard={true}>
      <Modal.Header>
        <Modal.Title>
          {context.i18n.getMessage('Labels.areYouSure')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {context.i18n.getMessage('Labels.questionInvoiceDelete')}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-link" onClick={() => onCancel()}>{context.i18n.getMessage('Labels.cancel')}</button>
        <button className="btn btn-primary" onClick={() => onDelete(invoiceId)}>
          {context.i18n.getMessage('Labels.ok')}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

InvoiceDeleteModal.propTypes = {
  isShown: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  invoiceId: PropTypes.number
};

InvoiceDeleteModal.contextTypes = {
  i18n: PropTypes.object.isRequired
};

export default InvoiceDeleteModal;
