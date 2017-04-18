import { PropTypes, createElement } from 'react';
import { reduxForm } from 'redux-form';
import { EDIT_INVOICE_FORM } from '../../constants/forms';
import InvoiceHeaderForm from '../InvoiceDetails/InvoiceHeaderForm.react'
import {validateForm} from '../common/redux-form/validateForm';
import constraints from '../InvoiceDetails/InvoiceHeaderFormConstraints';

const EditInvoiceHeaderFormWrapper = ({
  invoice,
  customer,
  supplier,
  termsOfDelivery,
  termsOfPayment,
  methodsOfPayment,
  currencies,
  onUpdateInvoice
}) => {
  return createElement(reduxForm({
    form: EDIT_INVOICE_FORM,
    onSubmit: (values) => {
      console.log(values);
      onUpdateInvoice(values.invoice)
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

EditInvoiceHeaderFormWrapper.propTypes = {
  invoice: PropTypes.object.isRequired,
  supplier: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  termsOfDelivery: PropTypes.array,
  termsOfPayment: PropTypes.array,
  methodsOfPayment: PropTypes.array,
  currencies: PropTypes.array,
  onUpdateInvoice: PropTypes.func.isRequired
};

export default EditInvoiceHeaderFormWrapper;
