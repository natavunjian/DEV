function setOriginalLead() {
    //Initialize the Code
    SADA.initialize();
    var formType = Xrm.Page.ui.getFormType();
    if(formType == 1) {
      return;
    }
    
    var contactid = Xrm.Page.data.entity.getId();
    var originalLead = SADA.LookupField("silray_convertedleadid");
    originalLeadID = originalLead.GetID();
    var createLead = Xrm.Page.getAttribute("silray_iscreatenewlead");
    
    if (originalLead.GetValue() == null && contactid != null) {
    var connectedTo = SADA.FetchSingleValue("connection", "record2id", "record1id", contactid, false);
	var connectedName = SADA.FetchSingleValue_Name("connection", "record2id", "record1id", contactid, false);
		         
	if (connectedTo != null) {
	    Xrm.Page.getAttribute("silray_convertedleadid").setValue([{
				id: connectedTo,
			    name: connectedName,
			    entityType: "lead"
			}]);
		}
	}
}