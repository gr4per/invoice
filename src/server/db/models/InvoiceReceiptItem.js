"use strict";
const Sequelize = require("sequelize");

module.exports.init = function(db, config) {
  /**
   * InvoiceReceiptItem
   * @class InvoiceReceiptItem
   */
  return db.define('InvoiceReceiptItem',
    /** @lends InvoiceReceiptItem*/
    {
      /**
       * Primary key.
       */
      key: {
        type: Sequelize.BIGINT(20),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'InvoiceReceiptItemSN'
      },
      building: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'Building'
      },
      /**
       * The catalogID as string.
       */
      catalogId: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'CatalogID'
      },
      changedBy: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'ChangedBy',
        defaultValue: 'jcadmin'
      },
      changedOn: {
        type: Sequelize.DATE(),
        allowNull: false,
        field: 'ChangedOn',
        defaultValue: Sequelize.NOW
      },

      /**
       * Reference to a CostDistribution structure which contains positions (CostDistributionPos).
       * The positions contain a reference to Costobjects (CostCenter, Projects, ...) and a percentage value.
       * The percentage sum of all CostDistributionPos which belongs to one CostDistribution Object
       * must be always 100 percentage.
       * In OPC the requisitioner is (normally) forced to add CostObjects to every SOI.
       */
      costDistributionSn: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        field: 'CostDistributionSN'
      },
      createdBy: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'CreatedBy',
        defaultValue: 'jcadmin'
      },
      createdOn: {
        type: Sequelize.DATE(),
        allowNull: false,
        field: 'CreatedOn',
        defaultValue: Sequelize.NOW
      },
      /**
       * Currency used for the complete SalesOrder, PurchaseOrder or InvoiceReceipt.
       * The totalNetPrice and the totalGrossPrice are related to this currency.
       */
      currencyId: {
        type: Sequelize.STRING(3),
        allowNull: true,
        field: 'CurrencyID'
      },
      /**
       * Delivery Address and additional Receiving Informations.
       * The delivery address is determinated by Customer2Address
       * of Type "delivery"
       * The other receiving informations can be input by the user
       * in the OPC cart position.
       * A default setting for this fields can be defined inside the CatalogUser.
       */
      deliveryAddressAreaCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
        field: 'delivery_address_area_code'
      },
      deliveryAddressCity: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'delivery_address_city'
      },
      deliveryAddressCountry: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'delivery_address_country'
      },
      deliveryAddressEmail: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'delivery_address_email'
      },
      deliveryAddressFaxNo: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'delivery_address_fax_no'
      },
      deliveryAddressIsCompany: {
        type: Sequelize.CHAR(1),
        allowNull: true,
        field: 'delivery_address_is_company'
      },
      deliveryAddressName1: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'delivery_address_name1'
      },
      deliveryAddressName2: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'delivery_address_name2'
      },
      deliveryAddressName3: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'delivery_address_name3'
      },
      deliveryAddressPbxZipCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
        field: 'delivery_address_pbx_zip_code'
      },
      deliveryAddressPhoneNo: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'delivery_address_phone_no'
      },
      deliveryAddressPobox: {
        type: Sequelize.STRING(10),
        allowNull: true,
        field: 'delivery_address_pobox'
      },
      deliveryAddressSalutation: {
        type: Sequelize.STRING(20),
        allowNull: true,
        field: 'delivery_address_salutation'
      },
      deliveryAddressStreet: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'delivery_address_street'
      },
      deliveryAddressZipCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
        field: 'delivery_address_zip_code'
      },
      /**
       * Estimated date of delivery,
       * calculated based on leadTimeInDays
       */
      deliveryDate: {
        type: Sequelize.DATE(),
        allowNull: true,
        field: 'DeliveryDate'
      },
      department: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'Department'
      },
      /**
       * References to an external Asset account.
       * In OPC CART this field is editable in UI.
       * Normally we use it to transfer this information
       * to an external system.
       */
      extAssetAccountId: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'ExtAssetAccountID'
      },
      /**
       * External GLAccountID without reference to our GLAccount Object.
       * In our standard Application field value can be input by user (as text) in OPC UI.
       * Very often this field is transfered to an external system.
       */
      extGlAccountId: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'ExtGLAccountID'
      },
      floor: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'Floor'
      },
      /**
       * Accounting Information.
       * In OPC Cart we evaluate the GLAccount automatically
       * using the AccountingRule table.
       * This table provides a relation between the GLAccount
       * and a ClassificationGroup or between GLAccount and Product.
       */
      gLAccountId: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'GLAccountID'
      },
      /**
       * Position Price which contains the tax amount:
       * grossPrice = netPrice + taxAmount
       */
      grossPrice: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'GrossPrice'
      },
      /**
       * InvoiceReceipt
       */
      invoiceReceiptSn: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        field: 'InvoiceReceiptSN'
      },
      /**
       * Manufacturer specific informations
       */
      manufacturerId: {
        type: Sequelize.STRING(10),
        allowNull: true,
        field: 'ManufacturerID'
      },
      manufacturerName: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'ManufacturerName'
      },
      mfgProductId: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'MfgProductID'
      },

      /**
       * This is the item price per Unit of quantity
       */
      netPrice: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'NetPrice'
      },
      /**
       * Position number inside SalesOrderItem, PurchaseOrderItem or InvoiceReceiptItem
       * starting with 1
       */
      orderItemNo: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'OrderItemNo'
      },
      /**
       * Additional information for the Supplier which can be input by the requisitioner in OPC.
       * This ordertext is displayed in the PDF Order Formular (which is sent to the supplier).
       * Very often this text is also transfered to external systems (if they are integrated).
       */
      orderText: {
        type: Sequelize.STRING(2000),
        allowNull: true,
        field: 'OrderText'
      },
      /**
       * Factor applied to price when small prices are used,
       * e.g. 0.56 EUR per 100 items
       */
      priceUnit: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        field: 'PriceUnit'
      },
      /**
       *  Product descriptions
       */
      productDescLong: {
        type: Sequelize.STRING(2000),
        allowNull: true,
        field: 'ProductDescLong'
      },
      productDescShort: {
        type: Sequelize.STRING(2000),
        allowNull: true,
        field: 'ProductDescShort'
      },
      /**
       * The productID as string.
       */
      productId: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'ProductID'
      },
      /**
       * This is the string that contains the unique product key. It can be used
       * to retrieve the product in the OPC search. In the OPC fulltext index we
       * don't have a productSN, so we need this key.
       * Typically it contains a concatenation of catalogid and productId
       * but it might also include validFrom, validTo
       */
      productKey: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'ProductKey'
      },
      /**
       *  ValidRange of the product
       */
      productValidFrom: {
        type: Sequelize.DATE(),
        allowNull: true,
        field: 'ProductValidFrom'
      },
      productValidTo: {
        type: Sequelize.DATE(),
        allowNull: true,
        field: 'ProductValidTo'
      },
      purchaseOrderID: {
        type: Sequelize.STRING(30),
        allowNull: true,
        field: 'PurchaseOrderID'
      },
      purchaseOrderItemID: {
        type: Sequelize.BIGINT(20),
        allowNull: true,
        field: 'PurchaseOrderItemID'
      },
      /**
       * Ordered Quantity
       */
      quantity: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: false,
        field: 'Quantity'
      },
      receivingPerson: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'ReceivingPerson'
      },
      room: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'Room'
      },
      /**
       * This field holds the main status information for SalesOrders, PurchaseOrders and InvoiceReceipts.
       * The transfers from one status to another one is set automatically by the application:
       * When approval workflow is started status of SalesOrder is set to "inApproval".
       * When PurchaseOrder is generated status of SalesOrder is set to "ordered".
       * The status information is displayed in our standard Procurement Reports
       * and filtering by the status is also possible.
       */
      statusId: {
        type: Sequelize.STRING(20),
        allowNull: true,
        field: 'StatusID'
      },
      /**
       * SupplierId and name
       */
      supplierId: {
        type: Sequelize.STRING(30),
        allowNull: true,
        field: 'SupplierID'
      },
      supplierName: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'SupplierName'
      },
      /**
       * totalNetPrice + taxAmount =  totalGrossPrice
       */
      taxAmount: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'TaxAmount'
      },
      /**
       * Total Grossprice of the position:
       * totalGrossPrice = totalNetPrice + totalTaxAmount
       */
      totalGrossPrice: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'TotalGrossPrice'
      },
      /**
       * Total Netprice of the position:
       * totalNetPrice = netPrice * quantity/priceUnit
       */
      totalNetPrice: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'TotalNetPrice'
      },
      transferStatusId: {
        type: Sequelize.STRING(20),
        allowNull: true,
        field: 'TransferStatusID'
      },
      /**
       * Sales unit of measure, e.g. kg, pce of the product
       */
      uomId: {
        type: Sequelize.STRING(3),
        allowNull: false,
        field: 'UOMID'
      },
      /**
       * Is used to calculate the due date of this position:
       * DueDate = <dateOfOrder> + <leadTimeInDays>
       */
      leadtimeInDays: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        field: 'LeadtimeInDays'
      },
      commentary: {
        type: Sequelize.STRING(2000),
        allowNull: true,
        field: 'Commentary'
      },
      assetAccountId: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'AssetAccountID'
      },
      /**
       * The the contractId of the contract the price and unitOfMeasure stored in
       * the TransactionItem are determined for.
       * It is required for the Contract Selection feature.
       */
      contractId: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'ContractID'
      },
      extProductId: {
        type: Sequelize.STRING(100),
        allowNull: true,
        field: 'ExtProductId'
      },
      /**
       * This is the item price per Unit of quantity without currency conversion for the currency as
       * stored in the contract.
       */
      contractedNetPrice: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'ContractedNetPrice'
      },
      /**
       * Currency for contractedNetPrice. The currency of the price as provided in the contract.
       */
      contractedCurrencyId: {
        type: Sequelize.STRING(3),
        allowNull: true,
        field: 'ContractedCurrencyID'
      },
      deliveryAddressState: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'delivery_address_state'
      },
      /**
       * This is the item surcharge per Unit of quantity
       */
      surchargeAmount: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'SurchargeAmount'
      },
      /**
       * Total surcharge of the position:
       * totalNetPrice = surchargeAmount * quantity/priceUnit
       */
      totalSurchargeAmount: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'TotalSurchargeAmount'
      },
      /**
       * Indicator(flag) of Surcharge items. These items must be handled differently in a Cart (e.g. no action
       * possible with them with the Cart).
       */
      isSurcharge: {
        type: Sequelize.CHAR(1),
        allowNull: true,
        field: 'IsSurcharge'
      },
      /**
       * Indicator(flag) that NetPrice of item was subtracted by Discount value, is used for displaying discount icon
       * on a Cart in case of Discount was applied to a Product.
       */
      isDiscounted: {
        type: Sequelize.CHAR(1),
        allowNull: true,
        field: 'IsDiscounted'
      },
      /**
       * Discount percentage, should be stored independently for possibility to display this value on UI and transfer it
       * into SAP. (netPrice * quantity) * percentageDiscount / 100 == totalNetPrice.
       */
      percentageDiscount: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'PercentageDiscount'
      },
      /**
       * Discount absolute value, should be stored independently for possibility to display this
       * value on UI and transfer it
       * into SAP. (netPrice * quantity) - percentageDiscount == totalNetPrice.
       */
      absoluteDiscount: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: true,
        field: 'AbsoluteDiscount'
      },
      deliveryAddressMethod: {
        type: Sequelize.STRING(50),
        allowNull: true,
        field: 'delivery_address_method'
      },
      /**
       * Reference to tax
       * Is used for evaluation of the gross prices.
       */
      taxId: {
        type: Sequelize.STRING(60),
        allowNull: false,
        defaultValue: "0",
        field: 'TaxID'
      },
      /**
       * Tax Origin.<p>Provide information about tax:</p>
       *  <ul>
       *      <li><code>taxId</code> - ID of the tax;</li>
       *      <li><code>countryId</code> - Country ID of the tax;</li>
       *      <li><code>rate</code> - Tax rate</li>
       *  </ul>
       */
      taxCountryId: {
        type: Sequelize.STRING(3),
        allowNull: false,
        defaultValue: 'DE',
        field: 'TaxCountryID'
      },
      taxRate: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: false,
        defaultValue: "0.00",
        field: 'TaxRate'
      }
    }, {
      classMethods: {
        associate: function(models) {
          models.InvoiceReceiptItem.hasOne(models.CostDistribution, {
            as: 'costDistribution',
            foreignKey: 'CostDistributionSN',
            targetKey: 'CostDistributionSN'
          });
          models.InvoiceReceiptItem.belongsTo(models.InvoiceReceipt, {
            as: 'invoiceReceipt',
            foreignKey: 'InvoiceReceiptSN'
          });
        }
      },
      timestamps: false,
      tableName: 'InvoiceReceiptItem'
    });
};
