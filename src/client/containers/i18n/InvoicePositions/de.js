let Labels = {};
Labels.irPositions = 'Rechnungspositionen';
Labels.managePositions = 'Positionen verwalten';
Labels.saved = 'Rechnungsposition wurde gespeichert.';
Labels.notSaved = 'Achtung: Rechnungsposition konnte nicht gespeichert werden!';
Labels.applied = 'Angewendet...';
Labels.recalculated = 'Neu berechnet...';
Labels.questionInvoiceItemDelete = 'Wollen Sie die Rechnung/Rechnungsposition wirklich löschen?';
Labels.invoiceItemDeleted = 'Die Rechnungsposition (mit der ID {id}) wurde gelöscht.';
Labels.addMultiplePositions = 'Mehrere Rechnungspositionen erfassen';
Labels.addSinglePosition = 'Einzelposition und Position ohne Bestellbezug erfassen';

Labels.invoiceReceiptId = 'Interne Rechnungsnummer';
Labels.supplier = 'Lieferant';
Labels.customer = 'Kunde';
Labels.status = 'Status';
Labels.createdDate = 'Erstellt am';
Labels.dueDate = 'Fälligkeitsdatum';

Labels.totalNetPrice = 'Netto-Summe';
Labels.totalTaxAmount = 'Steuerbetrag';
Labels.totalGrossPrice = 'Gesamtbruttopreis';
Labels.remainingTotals = 'Verbleibende Summen';

Labels.poPoi = 'Bestellung/Pos.';
Labels.productId = 'Produkt ID';
Labels.productDescShort = 'Beschreibung';
Labels.ean = 'EAN';
Labels.quantity = 'Menge';
Labels.quantityUom = 'Menge/ME';
Labels.uom = 'ME';
Labels.netPrice = 'Nettopreis';
Labels.priceUnit = 'Preiseinheit';
Labels.netPrice_PriceUnit = `${Labels.netPrice}/${Labels.priceUnit}`;
Labels.taxRate = 'Steuersatz';
Labels.itemTaxList = 'Steuerland: {taxCountry}';
Labels.accountingDetails = 'Kontierung';
Labels.gLAccount = 'Sachkonto';
Labels.recalculateTotalPrices = 'Gesamtpreis neu berechnen';

Labels.taxAmount = 'Steuerbetrag';
Labels.totalGrossPrice = 'Brutto-Summe';

let Commands = {};
Commands.togglePdf = 'PDF ein-/ausblenden';
Commands.backtoInvoice = 'Zurück zur Rechnung';
Commands.reset = 'Zurücksetzen';
Commands.addNewPosition = 'Eine neue Position hinzufügen';
Commands.saveAllPositions = 'Alle Positionen speichern';

let States = {};
States.open = 'offen';
States.registered = 'registriert';
States.transferred = 'übertragen';

export default {
    Labels: Labels,
    States: States,
    Commands: Commands
};