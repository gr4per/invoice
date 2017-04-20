'use strict';
const Sequelize = require("sequelize");

module.exports = function(queryInterface) {
  return queryInterface.createTable('InvoiceReceiptItem', {
    InvoiceReceiptItemSN: {
      type: Sequelize.BIGINT(20),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Building: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    CatalogID: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    ChangedBy: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    ChangedOn: {
      type: Sequelize.DATE(),
      allowNull: false
    },
    CostDistributionSN: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      references: {
        model: 'CostDistribution',
        key: 'CostDistributionSN'
      }
    },
    CreatedBy: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    CreatedOn: {
      type: Sequelize.DATE(),
      allowNull: false
    },
    CurrencyID: {
      type: Sequelize.STRING(3),
      allowNull: true,
    },
    delivery_address_area_code: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    delivery_address_city: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    delivery_address_country: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    delivery_address_email: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    delivery_address_fax_no: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    delivery_address_is_company: {
      type: Sequelize.CHAR(1),
      allowNull: true,
    },
    delivery_address_name1: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    delivery_address_name2: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    delivery_address_name3: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    delivery_address_pbx_zip_code: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    delivery_address_phone_no: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    delivery_address_pobox: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    delivery_address_salutation: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    delivery_address_street: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    delivery_address_zip_code: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    DeliveryDate: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    Department: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    ExtAssetAccountID: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    ExtGLAccountID: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    Floor: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    GLAccountID: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    GrossPrice: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    InvoiceReceiptSN: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      references: {
        model: 'InvoiceReceipt',
        key: 'InvoiceReceiptSN'
      },
      onDelete: 'CASCADE'
    },
    ManufacturerID: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    ManufacturerName: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    MfgProductID: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    NetPrice: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    OrderItemNo: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    OrderText: {
      type: Sequelize.STRING(2000),
      allowNull: true,
    },
    PriceUnit: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    ProductDescLong: {
      type: Sequelize.STRING(2000),
      allowNull: true,
    },
    ProductDescShort: {
      type: Sequelize.STRING(2000),
      allowNull: true,
    },
    ProductID: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    ProductKey: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    ProductValidFrom: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    ProductValidTo: {
      type: Sequelize.DATE(),
      allowNull: true
    },
    PurchaseOrderID: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    PurchaseOrderItemID: {
      type: Sequelize.BIGINT(20),
      allowNull: true
    },
    Quantity: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: false
    },
    ReceivingPerson: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    Room: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    StatusID: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    SupplierID: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    SupplierName: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    TaxAmount: {
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
    TransferStatusID: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    UOMID: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    LeadtimeInDays: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    Commentary: {
      type: Sequelize.STRING(2000),
      allowNull: true,
    },
    AssetAccountID: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    ContractID: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    ExtProductId: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    ContractedNetPrice: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    ContractedCurrencyID: {
      type: Sequelize.STRING(3),
      allowNull: true
    },
    delivery_address_state: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    SurchargeAmount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    TotalSurchargeAmount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    IsSurcharge: {
      type: Sequelize.CHAR(1),
      allowNull: true,
    },
    IsDiscounted: {
      type: Sequelize.CHAR(1),
      allowNull: true,
    },
    PercentageDiscount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    AbsoluteDiscount: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: true
    },
    delivery_address_method: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    TaxID: {
      type: Sequelize.STRING(60),
      allowNull: false,
      defaultValue: "0"
    },
    TaxCountryID: {
      type: Sequelize.STRING(3),
      allowNull: false,
      defaultValue: 'DE'
    },
    TaxRate: {
      type: Sequelize.DECIMAL(19, 2),
      allowNull: false,
      defaultValue: "0.00"
    }
  }).then(() => {
    return Promise.all([
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['CostDistributionSN'],
        { indexName: 'InvoiceReceiptItem_CostDistributionSN_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['InvoiceReceiptSN'],
        { indexName: 'InvoiceReceiptItem_InvoiceReceiptSN_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['CurrencyID'],
        { indexName: 'InvoiceReceiptItem_CurrencyID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['UOMID'],
        { indexName: 'InvoiceReceiptItem_UOMID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['ContractedCurrencyID'],
        { indexName: 'InvoiceReceiptItem_ContractedCurrencyID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['GLAccountID'],
        { indexName: 'InvoiceReceiptItem_GLAccountID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['StatusID'],
        { indexName: 'InvoiceReceiptItem_StatusID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['TransferStatusID'],
        { indexName: 'InvoiceReceiptItem_TransferStatusID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['AssetAccountID'],
        { indexName: 'InvoiceReceiptItem_AssetAccountID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['PurchaseOrderID'],
        { indexName: 'InvoiceReceiptItem_PurchaseOrderID_idx' }
      ),
      queryInterface.addIndex(
        'InvoiceReceiptItem',
        ['PurchaseOrderItemID'],
        { indexName: 'InvoiceReceiptItem_PurchaseOrderItemID_idx' }
      ),
    ])
  })
};
