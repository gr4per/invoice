let Labels = {};
Labels.irPositions = 'Invoice Positions';
Labels.managePositions = 'Manage Positions';
Labels.saved = 'Invoice Receipt Item was saved successfully.';
Labels.notSaved = 'Invoice Receipt Item was not saved.';
Labels.applied = 'Applied...';
Labels.recalculated = 'Recalculated...';
Labels.questionInvoiceItemDelete = 'Do you really want to delete Invoice/Invoice Position?';
Labels.invoiceItemDeleted = 'Invoice Receipt Item with key {id} was deleted.';
Labels.addMultiplePositions = 'Add multiple positions';
Labels.addSinglePosition = 'Add single position and position without PO-relation';

Labels.invoiceReceiptId = 'Internal Invoice No.';
Labels.supplier = 'Supplier';
Labels.customer = 'Customer';
Labels.status = 'Status';
Labels.createdDate = 'Created';
Labels.dueDate = 'Due';

Labels.totalNetPrice = 'Total Net Price';
Labels.totalTaxAmount = 'Total Tax Amount';
Labels.totalGrossPrice = 'Total Gross Price';
Labels.remainingTotals = 'Remaining totals';

Labels.poPoi = 'PO/POI';
Labels.productId = 'Product ID';
Labels.productDescShort = 'Description';
Labels.ean = 'EAN';
Labels.quantity = 'Quantity';
Labels.quantityUom = 'Quantity/UoM';
Labels.uom = 'UoM';
Labels.netPrice = 'Net Price';
Labels.priceUnit = 'Price Unit';
Labels.netPrice_PriceUnit = `${Labels.netPrice}/${Labels.priceUnit}`;
Labels.taxRate = 'VAT Rate';
Labels.itemTaxList = 'Tax Country: {taxCountry}';
Labels.accountingDetails = 'Accounting Details';
Labels.gLAccount = 'GL Account';
Labels.recalculateTotalPrices = 'Recalculate Total Prices';

Labels.taxAmount = 'Tax Amount';
Labels.totalGrossPrice = 'Total Gross Price';

let Commands = {};
Commands.togglePdf = 'Toggle PDF';
Commands.backtoInvoice = 'Back to Invoice';
Commands.reset = 'Reset';
Commands.addNewPosition = 'Add New Position';
Commands.saveAllPositions = 'Save All Positions';

let States = {};
States.open = 'Open';
States.registered = 'Registered';
States.transferred = 'Transferred';

let Errors = {};
Errors.notNull = 'Property cannot be null';
Errors.invalidNumber = 'Value must be a valid number';
Errors.notGreaterThanOrEqualTo = "Value is less than minimum value '0'";

export default {
    Labels: Labels,
    States: States,
    Commands: Commands,
    Errors: Errors
};
