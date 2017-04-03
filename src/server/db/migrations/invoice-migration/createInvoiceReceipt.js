'use strict';
const Sequelize = require("sequelize");

module.exports = function(queryInterface) {
  return queryInterface.createTable('InvoiceReceipt', {
    InvoiceReceiptSN: {
      type: Sequelize.BIGINT(20),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    BlockingReason: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    BookingDate: {
      type: Sequelize.DATE(),
      allowNull: false
    },
    ChangedBy: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    ChangedOn: {
      type: Sequelize.DATE(),
      allowNull: false,
    },
    Commentary: {
      type: Sequelize.STRING(2000),
      allowNull: true
    },
    ConfirmationUserName: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    ConfirmedAt: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    CreatedBy: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    CreatedOn: {
      type: Sequelize.DATE(),
      allowNull: false
    },
    CreditNote: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    CurrencyID: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    CustomerID: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    ExtInvoiceReceiptID: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    FooterText: {
      type: Sequelize.STRING(2000),
      allowNull: true
    },
    FreightNet: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    FreightTax: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    InvoiceDate: {
      type: Sequelize.DATE(),
      allowNull: false
    },
    InvoiceReceiptID: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    MethodOfPaymentID: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    OrderText: {
      type: Sequelize.STRING(2000),
      allowNull: true
    },
    StatusID: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    SupplierID: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    TermsOfDeliveryID: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    TermsOfPaymentID: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    TotalFreight: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    TotalGrossPrice: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    TotalNetPrice: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    TotalTaxAmount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    TransferStatusID: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    Type: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    UdxNum1: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    UdxNum2: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    UdxNum3: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    UdxSortKey1: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
    UdxSortKey2: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
    UdxSortKey3: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
    UdxText1: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    UdxText2: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    UdxText3: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    PrintedBy: {
      type: Sequelize.STRING(60),
      allowNull: true
    },
    PrintedOn: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    invoice_address_area_code: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    invoice_address_city: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    invoice_address_country: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    invoice_address_email: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    invoice_address_fax_no: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    invoice_address_is_company: {
      type: Sequelize.CHAR(1),
      allowNull: true
    },
    invoice_address_name1: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    invoice_address_name2: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    invoice_address_name3: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    invoice_address_pbx_zip_code: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    invoice_address_phone_no: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    invoice_address_pobox: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    invoice_address_salutation: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    invoice_address_street: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    invoice_address_zip_code: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    CostDistributionSN: {
      type: Sequelize.BIGINT(20),
      allowNull: true,
      references: {
        model: 'CostDistribution',
        key: 'CostDistributionSN'
      }
    },
    invoice_address_state: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    onBehalfOf: {
      type: Sequelize.STRING(60),
      allowNull: true
    },
    invoice_address_method: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ReceivingPerson: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ReceivedOn: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    ScannedOn: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    DueDate: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    DueDateEarlyDiscount: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    DueDateLateDiscount: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    DiscountableValue: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    EarlyDiscount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    LateDiscount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    AccountingRecordID: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    CustomerCountryID: {
      type: Sequelize.STRING(2),
      allowNull: true
    },
    CustomerState: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SupplierCountryID: {
      type: Sequelize.STRING(2),
      allowNull: true
    },
    SupplierState: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ApprovalStatus: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    Assignee: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    IntrastatID: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    SwiftCode: {
      type: Sequelize.STRING(11),
      allowNull: true
    },
    IBAN: {
      type: Sequelize.STRING(43),
      allowNull: true
    },
    TaxID: {
      type: Sequelize.STRING(60),
      allowNull: true
    },
    TaxCountryID: {
      type: Sequelize.STRING(3),
      allowNull: true
    },
    TaxRate: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    ReferenceInformation: {
      type: Sequelize.STRING(140),
      allowNull: true
    },
    OrderNumber: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    PeriodOfServiceFrom: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    PeriodOfServiceTo: {
      type: Sequelize.DATE(),
      allowNull: true
    }
  }).then(() => {
    return Promise.all([
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['CurrencyID'],
        { indexName: 'InvoiceReceipt_CurrencyID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['CustomerId'],
        { indexName: 'InvoiceReceipt_CustomerID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['MethodOfPaymentID'],
        { indexName: 'InvoiceReceipt_MethodOfPaymentID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['StatusID'],
        { indexName: 'InvoiceReceipt_StatusID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['SupplierID'],
        { indexName: 'InvoiceReceipt_SupplierID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['TermsOfDeliveryID'],
        { indexName: 'InvoiceReceipt_TermsOfDeliveryID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['TermsOfPaymentID'],
        { indexName: 'InvoiceReceipt_TermsOfPaymentID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['TransferStatusID'],
        { indexName: 'InvoiceReceipt_TransferStatusID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceipt',
        ['CostDistributionSN'],
        { indexName: 'InvoiceReceipt_CostDistributionSN_idx' }
      )
    ])
  })
};
