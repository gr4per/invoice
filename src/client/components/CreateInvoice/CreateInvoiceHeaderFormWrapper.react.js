import { PropTypes, createElement } from 'react';
import { reduxForm } from 'redux-form';
import { CREATE_INVOICE_FORM } from '../../constants/forms';
import InvoiceHeaderForm from '../InvoiceDetails/InvoiceHeaderForm.react'

const CreateInvoiceHeaderFormWrapper = ({
  invoice,
  customer,
  supplier,
  termsOfDelivery,
  termsOfPayment,
  methodsOfPayment,
  currencies,
  onSaveInvoice,
  statusLabel
}) => {
  return createElement(reduxForm({
    form: CREATE_INVOICE_FORM,
    onSubmit: (values) => {
      onSaveInvoice(values.invoice)
    },
    initialValues: {
      invoice: invoice,
      supplier: supplier,
      customer: customer,
      termsOfDelivery: termsOfDelivery,
      termsOfPayment: termsOfPayment,
      methodsOfPayment: methodsOfPayment,
      currencies: currencies,
    },
    statusLabel: statusLabel
  })(InvoiceHeaderForm));
};

CreateInvoiceHeaderFormWrapper.propTypes = {
  invoice: PropTypes.object.isRequired,
  supplier: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  termsOfDelivery: PropTypes.array,
  termsOfPayment: PropTypes.array,
  methodsOfPayment: PropTypes.array,
  currencies: PropTypes.array,
  statusLabel: PropTypes.func.isRequired,
  onSaveInvoice: PropTypes.func.isRequired
};

export default CreateInvoiceHeaderFormWrapper;
