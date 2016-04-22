function setLookupField() {
    var existingValue = Xrm.Page.getAttribute("record2roleid").getValue();
    var sourceValue = Xrm.Page.getAttribute("record1roleid").getValue();
    var sourceID = Xrm.Page.getAttribute("record1id").getValue();

    if (existingValue === null) {
        var lookupValue = new Array();
        lookupValue[0] = new Object();
        lookupValue[0].id = "{375C75A3-DFCA-E511-80DE-6C3BE5A8DAD0}";
        lookupValue[0].name = "Tag";
        lookupValue[0].entityType = "connectionrole";
        Xrm.Page.getAttribute("record2roleid").setValue(lookupValue);
    }
}

function getLookupDetails() {
    var entityName, entityId, entityLabel, lookupFieldObject;

    // parentaccountid is the lookup field name that we try to reach its values
    lookupFieldObject = Xrm.Page.data.entity.attributes.get('record1id');
    if (lookupFieldObject.getValue() != null) {
        entityId = lookupFieldObject.getValue()[0].id;
        entityName = lookupFieldObject.getValue()[0].entityType;
        entityLabel = lookupFieldObject.getValue()[0].name;
        //alert(entityName)

        if (entityName == 'account') {
            var existingValue = Xrm.Page.getAttribute("record2roleid").getValue();
            var sourceValue = Xrm.Page.getAttribute("record1roleid").getValue();
            var sourceID = Xrm.Page.getAttribute("record1id").getValue();

            if (existingValue === null) {

                //Set FROM
                var lookupValue = new Array();
                lookupValue[0] = new Object();
                lookupValue[0].id = "{375C75A3-DFCA-E511-80DE-6C3BE5A8DAD0}";
                lookupValue[0].name = "Tag";
                lookupValue[0].entityType = "connectionrole";
                Xrm.Page.getAttribute("record2roleid").setValue(lookupValue);

                //Set TO
                var lookupValueTo = new Array();
                lookupValueTo[0] = new Object();
                lookupValueTo[0].id = "{1EB54AB1-58B7-4D14-BF39-4F3E402616E8}";
                lookupValueTo[0].name = "Account";
                lookupValueTo[0].entityType = "connectionrole";
                Xrm.Page.getAttribute("record1roleid").setValue(lookupValueTo);
            }
        }
      else if(entityName == 'contact') {
            var existingValue = Xrm.Page.getAttribute("record2roleid").getValue();
            var sourceValue = Xrm.Page.getAttribute("record1roleid").getValue();
            var sourceID = Xrm.Page.getAttribute("record1id").getValue();

            if (existingValue === null) {

                //Set FROM
                var lookupValue = new Array();
                lookupValue[0] = new Object();    
                lookupValue[0].id = "{375C75A3-DFCA-E511-80DE-6C3BE5A8DAD0}";
                lookupValue[0].name = "Tag";
                lookupValue[0].entityType = "connectionrole";
                Xrm.Page.getAttribute("record2roleid").setValue(lookupValue);

                //Set TO
                var lookupValueTo = new Array();
                lookupValueTo[0] = new Object();
                lookupValueTo[0].id = "{35A23B91-EC62-41EA-B5E5-C59B689FF0B4}";
                lookupValueTo[0].name = "Contact";
                lookupValueTo[0].entityType = "connectionrole";
                Xrm.Page.getAttribute("record1roleid").setValue(lookupValueTo);
            }
        }

      else if(entityName == 'bstone_project') {
            var existingValue = Xrm.Page.getAttribute("record2roleid").getValue();
            var sourceValue = Xrm.Page.getAttribute("record1roleid").getValue();
            var sourceID = Xrm.Page.getAttribute("record1id").getValue();

            if (existingValue === null) {

                //Set FROM
                var lookupValue = new Array();
                lookupValue[0] = new Object();    
                lookupValue[0].id = "{375C75A3-DFCA-E511-80DE-6C3BE5A8DAD0}";
                lookupValue[0].name = "Tag";
                lookupValue[0].entityType = "connectionrole";
                Xrm.Page.getAttribute("record2roleid").setValue(lookupValue);

                //Set TO
                var lookupValueTo = new Array();
                lookupValueTo[0] = new Object();
                lookupValueTo[0].id = "{741BB1DE-EEDB-E511-80DF-6C3BE5A8DAD0}";
                lookupValueTo[0].name = "Project";
                lookupValueTo[0].entityType = "connectionrole";
                Xrm.Page.getAttribute("record1roleid").setValue(lookupValueTo);
            }
        }  
    }
}

function closeOnSave() {
    var entityName, entityId, entityLabel, lookupFieldObject;

    lookupFieldObject = Xrm.Page.data.entity.attributes.get('new_tagid');
    subTag = Xrm.Page.data.entity.attributes.get("bstone_subtag");

    if (lookupFieldObject.getValue() != null) {
        entityId = lookupFieldObject.getValue()[0].id;
        entityName = lookupFieldObject.getValue()[0].entityType;
        entityLabel = lookupFieldObject.getValue()[0].name;

        //If existing value is empty, then set new value
        var existingValue = Xrm.Page.getAttribute("record2id").getValue();

        Xrm.Page.getAttribute("record2id").setValue([{
              id: entityId,
              name: entityLabel,
              entityType: entityName
        }]);
    }
    else {
        return;
    }
}