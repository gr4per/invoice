let CreateInvoice = {};
CreateInvoice.header = 'Rechnung erfassen';
CreateInvoice.supplier = 'Lieferant';
CreateInvoice.customer = 'Kunde';
CreateInvoice.type = 'Typ';
CreateInvoice.uploadInvoice = 'Rechnung hochladen';
CreateInvoice.next = 'Weiter';
CreateInvoice.browseFile = 'Dateiverzeichnis durchsuchen';

let Types = {
    'invoice': 'Rechnung',
    'credit note': 'Gutschrift',
    'invoice confidential': 'Vertrauliche Rechnung',
    'credit note confidential': 'Vertrauliche Gutschrift'
};

let Errors = {};
Errors.notNull = 'Die Eigenschaft darf nicht null sein';
Errors.pdfFileRequired = 'Dateityp nicht erlaubt. Erlaubte Dateitypen sind: \'pdf\'.';

export default {
    CreateInvoice: CreateInvoice,
    Types: Types,
    Errors: Errors
};