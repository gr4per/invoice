import React, { PropTypes } from 'react';
import FormGroupMarkup from '../common/FormGroupMarkup';
import { Fields } from 'redux-form';
import _ from 'lodash';

const renderStaticFields = (fields) => (
  <div>
    {fields.names.map((fieldName) => {
      return (
        <FormGroupMarkup key={fieldName} label={fields.labels[fieldName]}>
        <span>
          {fields.staticText[fieldName]}
        </span>
        </FormGroupMarkup>
      )
    })}
  </div>
);

const extractInvoiceAddress = (addressAssociations) => {
  let addressAssociation = _.find(addressAssociations, (association) => {
    return association.address.type === 'invoice' && association.isDefault
  });

  if (!addressAssociation) {
    addressAssociation = _.find(addressAssociations, (association) => {
      return association.type === "default"
    })
  }

  return addressAssociation.address
};

const addressToString = (address) => {
  let result = '';
  let addressFields = [];
  if (address) {
    if (address.street) {
      addressFields.push(address.street)
    }
    if (address.zipCode) {
      addressFields.push(address.zipCode)
    }
    if (address.city) {
      addressFields.push(address.city)
    }
    if (address.countryCode) {
      addressFields.push(address.countryCode)
    }
  }
  if (addressFields.length) {
    result = _.join(addressFields, ", ")
  }
  return result;
};

const contactToString = (contact) => {
  if (_.isEmpty(contact) || _.isNil(contact)) {
    return ''
  }

  let result = '';
  let contactFields = [];
  if (contact.firstName) {
    contactFields.push(contact.firstName)
  }
  if (contact.lastName) {
    contactFields.push(contact.lastName)
  }
  if (contact.phone) {
    contactFields.push(contact.phone)
  }
  if (contactFields.length) {
    result = _.join(contactFields, ", ")
  }
  return result
};

const InvoiceHeaderStaticFields = ({ invoice, customer, supplier }) => {
  return (
  <Fields
    names={[
      'supplierInfo',
      'supplierAddress',
      'supplierContact',
      'customerInfo',
      'customerAddress',
      'vatRegNo'
    ]}
    labels={{
      supplierInfo: "Labels.supplier",
      supplierAddress: "Labels.supplierAddress",
      supplierContact: "Labels.supplierContact",
      customerInfo: "Labels.customer",
      customerAddress: "Labels.customerAddress",
      vatRegNo: "Labels.vatRegNo",
    }}
    staticText={{
      supplierInfo: `${supplier.supplierId} - ${supplier.supplierName}`,
      supplierAddress: addressToString(extractInvoiceAddress(supplier.addressAssociations)),
      supplierContact: contactToString(supplier.contact),
      customerInfo: `${customer.customerId} - ${customer.customerName}`,
      customerAddress: addressToString(extractInvoiceAddress(customer.addressAssociations)),
      vatRegNo: supplier.supplierVatRegNo
    }}
    component={renderStaticFields}
  />
  );
};

InvoiceHeaderStaticFields.propTypes = {
  invoice: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  supplier: PropTypes.object.isRequired
};

export default InvoiceHeaderStaticFields;
