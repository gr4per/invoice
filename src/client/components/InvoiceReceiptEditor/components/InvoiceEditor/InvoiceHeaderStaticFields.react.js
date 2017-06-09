import React, { PropTypes } from 'react';
import FormGroupMarkup from '../../../common/FormGroupMarkup/index';
import _ from 'lodash';

const _extractInvoiceAddress = (addressAssociations) => {
  if(!addressAssociations) {
    return null;
  }
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

const _addressToString = (address) => {
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

const _contactToString = (contact) => {
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

const InvoiceHeaderStaticFields = ({ customer, supplier }) => {

  const fields = [
    {
      name: 'supplierInfo',
      label: 'Labels.supplier',
      value: `${supplier.supplierId} - ${supplier.supplierName}`
    },
    {
      name: 'supplierAddress',
      label: 'Labels.supplierAddress',
      value: _addressToString(_extractInvoiceAddress(supplier.addressAssociations))
    },
    {
      name: 'supplierContact',
      label: 'Labels.supplierContact',
      value: _contactToString(supplier.contact)
    },
    {
      name: 'customerInfo',
      label: 'Labels.customer',
      value: `${customer.id} - ${customer.customerName}`
    },
    {
      name: 'customerAddress',
      label: 'Labels.customerAddress',
      value: _addressToString(_extractInvoiceAddress(customer.addressAssociations))
    },
    {
      name: 'vatRegNo',
      label: 'Labels.vatRegNo',
      value: supplier.supplierVatRegNo
    }
  ];

  return (
    <div>
      {fields.map((field) => (
        <FormGroupMarkup key={field.name} label={field.label}>
            <span>
              {field.value || '-'}
            </span>
        </FormGroupMarkup>
      ))}
    </div>
  )
};

InvoiceHeaderStaticFields.propTypes = {
  customer: PropTypes.object.isRequired,
  supplier: PropTypes.object.isRequired
};

export default InvoiceHeaderStaticFields;
