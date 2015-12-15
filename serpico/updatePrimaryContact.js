function setContact() {

    //Initialize the Code
    SADA.initialize();
    //Get the Fields
    var entityName, entityId, entityLabel, lookupFieldObject;
    var fAccount = SADA.LookupField("parentaccountid");
    
    //Make sure parentaccount is not null
    if (Xrm.Page.getAttribute("parentaccountid").getValue() != null) {
        //go get the ID of the primary contact
        var fPrimContactID = SADA.FetchSingleValue("account", "primarycontactid", "accountid", fAccount.GetID());
        if (fPrimContactID != null) {
            //go get the name value of the primary contact from the contact entity  
            var fPrimContactName = SADA.FetchSingleValue("contact", "fullname", "contactid", fPrimContactID);
            //Set all three parts of the array for the parentcontact field
            Xrm.Page.getAttribute("parentcontactid").setValue([{
                id: fPrimContactID,
                name: fPrimContactName,
                entityType: "contact"

            }]);
        }
    }
    else {
        return;
    }
}