module.exports = function(queryInterface) {
  const columns = [
    'UdxNum1',
    'UdxNum2',
    'UdxNum3',
    'UdxSortKey1',
    'UdxSortKey2',
    'UdxSortKey3',
    'UdxText1',
    'UdxText2',
    'UdxText3',
    'BlockingReason',
    'ConfirmationUserName',
    'ConfirmedAt',
    'CreditNote',
    'FooterText',
    'FreightNet',
    'FreightTax',
    'TotalFreight',
    'TransferStatusID',
    'invoice_address_area_code',
    'invoice_address_city',
    'invoice_address_country',
    'invoice_address_email',
    'invoice_address_fax_no',
    'invoice_address_is_company',
    'invoice_address_name1',
    'invoice_address_name2',
    'invoice_address_name3',
    'invoice_address_pbx_zip_code',
    'invoice_address_phone_no',
    'invoice_address_pobox',
    'invoice_address_salutation',
    'invoice_address_street',
    'invoice_address_zip_code',
    'invoice_address_state',
    'onBehalfOf',
    'invoice_address_method',
    'CustomerCountryID',
    'CustomerState',
    'SupplierCountryID',
    'SupplierState',
    'ApprovalStatus',
    'Assignee',
  ].map((name) => queryInterface.removeColumn('InvoiceReceipt', name));

  return Promise.all(columns);
};