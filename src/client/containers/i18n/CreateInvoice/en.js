let CreateInvoice = {};
CreateInvoice.header = 'Create Invoice';
CreateInvoice.supplier = 'Supplier';
CreateInvoice.customer = 'Customer';
CreateInvoice.type = 'Type';
CreateInvoice.uploadInvoice = 'Upload Invoice';
CreateInvoice.next = 'Next';
CreateInvoice.browseFile = 'Browse file';

let Types = {
    'invoice': 'Invoice',
    'credit note': 'Credit',
    'invoice confidential': 'Invoice confidential',
    'credit note confidential': 'Credit confidential'
};

let Errors = {};
Errors.notNull = 'Property cannot be null';
Errors.pdfFileRequired = 'File type not allowed. Allowed types are: \'pdf\'.';

export default {
    CreateInvoice: CreateInvoice,
    Types: Types,
    Errors: Errors
};