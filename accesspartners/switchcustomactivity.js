function toggleSections() {
	var activityValue = Xrm.Page.data.entity.attributes.get("sada_activitytypeid");

	if (activityValue.getValue() != null) {
		var activityType = Xrm.Page.data.entity.attributes.get("sada_activitytypeid").getValue()[0].name;

		if (activityType == "Completed Forms") {
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("FormDetails").setVisible(true);
		}
        else if(activityType == "Sent out Notifications") {
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("NotificationDetails").setVisible(true);
        }
        else if(activityType == "Sample Request") {
        	Xrm.Page.ui.tabs.get("CustomActivity").sections.get("SampleRequest").setVisible(true);

            var sampleRequestedBy = Xrm.Page.data.entity.attributes.get("sada_samplerequestedbyid");
			var requestedOnBehalf = Xrm.Page.data.entity.attributes.get("sada_requestedonbehalfid");
			var account = Xrm.Page.data.entity.attributes.get("sada_accountid");
			var owner = Xrm.Page.data.entity.attributes.get("ownerid");

			if(owner.getValue() != null) {
				sampleRequestedBy.setValue(owner.getValue());
			}
			else {
				return;
			}

			if(account.getValue() != null) {
				requestedOnBehalf.setValue(account.getValue());
			}
        }
		else {
			Xrm.Page.ui.tabs.get("CustomActivity").sections.get("SampleRequest").setVisible(false);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("FormDetails").setVisible(false);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("NotificationDetails").setVisible(false);
		}
	}
	else {
		return;
	}
}

function onLoad() {
	var formType= Xrm.Page.ui.getFormType();
	var activityValue = Xrm.Page.data.entity.attributes.get("sada_activitytypeid");

    if (formType == 1) {
	    Xrm.Page.ui.tabs.get("CustomActivity").sections.get("FormDetails").setVisible(false);
	    Xrm.Page.ui.tabs.get("CustomActivity").sections.get("SampleRequest").setVisible(false);
	    Xrm.Page.ui.tabs.get("CustomActivity").sections.get("NotificationDetails").setVisible(false);
        return;
    }
    else if (formType == 2 && activityValue.getValue() != null) {
		var activityType = Xrm.Page.data.entity.attributes.get("sada_activitytypeid").getValue()[0].name;

		if (activityType == "Completed Forms") {
	        Xrm.Page.ui.tabs.get("CustomActivity").sections.get("FormDetails").setVisible(true);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("NotificationDetails").setVisible(false);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("SampleRequest").setVisible(false);
		}
	    else if(activityType == "Sent out Notifications") {
	   		Xrm.Page.ui.tabs.get("CustomActivity").sections.get("NotificationDetails").setVisible(true);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("SampleRequest").setVisible(false);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("FormDetails").setVisible(false);
	    }
	    else if(activityType == "Sample Request") {
	    	Xrm.Page.ui.tabs.get("CustomActivity").sections.get("SampleRequest").setVisible(true);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("NotificationDetails").setVisible(false);
            Xrm.Page.ui.tabs.get("CustomActivity").sections.get("FormDetails").setVisible(false);
	    }
	}
	else {
		return;
	}
}