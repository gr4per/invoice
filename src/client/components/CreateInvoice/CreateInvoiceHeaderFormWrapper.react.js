import { PropTypes, createElement } from 'react';
import { reduxForm } from 'redux-form';
import { CREATE_INVOICE_FORM } from '../../constants/forms';
import InvoiceHeaderForm from '../InvoiceDetails/InvoiceHeaderForm.react'
import {validateForm} from '../common/redux-form/validateForm';
import constraints from '../InvoiceDetails/InvoiceHeaderFormConstraints';

const CreateInvoiceHeaderFormWrapper = ({
  invoice,
  customer,
  supplier,
  termsOfDelivery,
  termsOfPayment,
  methodsOfPayment,
  currencies,
  onSaveInvoice
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
    validate: validateForm(constraints)
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
  onSaveInvoice: PropTypes.func.isRequired
};

export default CreateInvoiceHeaderFormWrapper;
