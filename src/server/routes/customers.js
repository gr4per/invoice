'use strict';

/**
 * Stub rest endpoint - that alays loads the same bio001 supplier
 * @param app
 * @param db
 */
module.exports = function(app, db) {
  app.get('/api/customers/:customerId', (req, res) => {
    res.json(
      {
        "id": 1,
        "key": 1,
        "changedBy": "jcadmin",
        "changedOn": "2017-03-30T06:09:38.000+02:00",
        "createdBy": "jcadmin",
        "createdOn": "2017-03-30T05:30:50.000+02:00",
        "currency": { "class": "com.jcatalog.core.Currency", "id": "EUR" },
        "extAccountCode": null,
        "extGlobalId": null,
        "extName": null,
        "extShortName": null,
        "language": { "class": "com.jcatalog.core.i18n.Language", "id": "de" },
        "logo": null,
        "addressAssociations": [
          {
            "id": 1,
            "address": {
              "id": 5,
              "addressId": "bio001",
              "areaCode": null,
              "changedBy": "jcadmin",
              "changedOn": "2017-03-29T04:19:43.000+02:00",
              "city": "Prince Williams Sund",
              "corporateURL": "http://www.biohazard.com",
              "country": { "class": "com.jcatalog.core.GormCountry", "id": "AQ" },
              "createdBy": "jcadmin",
              "createdOn": "2017-03-29T04:19:43.000+02:00",
              "email": null,
              "faxNo": null,
              "isCompany": null,
              "name1": "BioHazard Ltd.",
              "name2": null,
              "name3": null,
              "numOfEmployees": null,
              "phoneNo": null,
              "pobox": null,
              "poboxZipCode": null,
              "salutation": null,
              "state": null,
              "street": null,
              "zipCode": "54579"
            },
            "changedBy": "jcadmin",
            "changedOn": "2016-03-14 06:09:02.613",
            "createdBy": "jcadmin",
            "createdOn": "2016-03-14 06:09:02.613",
            "isDefault": null,
            "type": "default"
          }
        ],
        "customerGroup": null,
        "customerId": "jcat001",
        "customerName": "jCat001",
        "debitLimit": null,
        "dunsNo": null,
        "eutaxId": null,
        "footerText": null,
        "headerText": null,
        "hierarchyCode": "000",
        "information": null,
        "invToleranceAbs": null,
        "invTolerancePercent": null,
        "isCustomerGrpMaster": null,
        "locked": null,
        "parentCustomer": null,
        "tax": { "class": "com.jcatalog.tax.Tax", "id": 3 },
        "vatIdentNo": null,
        "withVAT": null,
        "customerProfile": { "class": "com.jcatalog.profile.CustomerProfile", "id": 1 }
      }
    )
  });
};
