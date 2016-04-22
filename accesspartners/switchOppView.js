function switchOppViews() {
	var manufacturer = Xrm.Page.data.entity.attributes.get("sada_ismanufacturer");
	var distributor = Xrm.Page.data.entity.attributes.get("sada_isdistributor");
	var enduser = Xrm.Page.data.entity.attributes.get("sada_isenduser");

	var targetView = Xrm.Page.getControl("TargetOpportunities").getViewSelector();
	var qualifiedView = Xrm.Page.getControl("QualifiedOpportunities").getViewSelector();
	var negView = Xrm.Page.getControl("InNegotiationOpportunities").getViewSelector();
	var wonView = Xrm.Page.getControl("ClosedWonOpportunities").getViewSelector();
	var lostView = Xrm.Page.getControl("ClosedLostOpportunities").getViewSelector();

	//Manufacturer Views
	var targetManufacturer = {
		entityType: 1039, //SavedQuery
		id:"4BBB6EDF-AEF2-E511-80DD-6C3BE5A818C4",
		name: "Manufacturer Opportunities | 1. Target"
	}
	var qualifiedManufacturer = {
		entityType: 1039, //SavedQuery
		id:"6CB0E3F7-AEF2-E511-80DD-6C3BE5A818C4",
		name: "Manufacturer Opportunities | 2. Qualified"
	}
	var negManufacturer = {
		entityType: 1039, //SavedQuery
		id:"8795CF9E-63EC-E511-80E1-6C3BE5A8C804",
		name: "Manufacturer Opportunities | 3. In Negotiation"
	}
	var wonManufacturer = {
		entityType: 1039, //SavedQuery
		id:"9AF63B1F-64EC-E511-80E1-6C3BE5A8C804",
		name: "Manufacturer Opportunities | 4. Closed - Won"
	}
	var lostManufacturer = {
		entityType: 1039, //SavedQuery
		id:"274699CB-64EC-E511-80E1-6C3BE5A8C804",
		name: "Manufacturer Opportunities | 5. Closed - Lost"
	}
	
	//Distributor Views
	var targetDistributor = {
		entityType: 1039, //SavedQuery
		id:"0D38B4B1-65EC-E511-80E1-6C3BE5A8C804",
		name: "Distributor Opportunities | 1. Target"
	}
	var qualifiedDistributor = {
		entityType: 1039, //SavedQuery
		id:"F546EB38-66EC-E511-80E1-6C3BE5A8C804",
		name: "Distributor Opportunities | 2. Qualified"
	}
	var negDistributor = {
		entityType: 1039, //SavedQuery
		id:"4EF66484-66EC-E511-80E1-6C3BE5A8C804",
		name: "Distributor Opportunities | 3. In Negotiation"
	}
	var wonDistributor = {
		entityType: 1039, //SavedQuery
		id:"18B60428-65EC-E511-80E1-6C3BE5A8C804",
		name: "Distributor Opportunities | 4. Closed - Won"
	}
	var lostDistributor = {
		entityType: 1039, //SavedQuery
		id:"52AB4DCF-66EC-E511-80E1-6C3BE5A8C804",
		name: "Distributor Opportunities | 5. Closed - Lost"
	}

	//End-User Views
	var targetEndUser = {
		entityType: 1039, //SavedQuery
		id:"A2893427-67EC-E511-80E1-6C3BE5A8C804",
		name: "End-User Opportunities | 1. Target"
	}
	var qualifiedEndUser = {
		entityType: 1039, //SavedQuery
		id:"134D7C5D-B0F2-E511-80DD-6C3BE5A818C4",
		name: "End-User Opportunities | 2. Qualified"
	}
	var negEndUser = {
		entityType: 1039, //SavedQuery
		id:"83348571-69EC-E511-80E1-6C3BE5A8C804",
		name: "End-User Opportunities | 3. In Negotiation"
	}
	var wonEndUser = {
		entityType: 1039, //SavedQuery
		id:"0194F72D-6AEC-E511-80E1-6C3BE5A8C804",
		name: "End-User Opportunities | 4. Closed - Won"
	}
	var lostEndUser = {
		entityType: 1039, //SavedQuery
		id:"7ED4E76A-6AEC-E511-80E1-6C3BE5A8C804",
		name: "End-User Opportunities | 5. Closed - Lost"
	}

	if (manufacturer != null) {
		var manValue = manufacturer.getValue();
		if (manValue == 1)
			targetView.setCurrentView(targetManufacturer);
			qualifiedView.setCurrentView(qualifiedManufacturer);
			negView.setCurrentView(negManufacturer);
			wonView.setCurrentView(wonManufacturer);
			lostView.setCurrentView(lostManufacturer);
	}
	else if (distributor != null) {
		var distValue = distributor.getValue();
		if (distValue == 1) 
			targetView.setCurrentView(targetDistributor);
			qualifiedView.setCurrentView(qualifiedDistributor);
			negView.setCurrentView(negDistributor);
			wonView.setCurrentView(wonDistributor);
			lostView.setCurrentView(lostDistributor);
	}
	else if (enduser != null) {
		var enduserValue = enduser.getValue();
		if (enduserValue == 1)
			targetView.setCurrentView(targetEndUser);
			qualifiedView.setCurrentView(qualifiedEndUser);
			negView.setCurrentView(negEndUser);
			wonView.setCurrentView(wonEndUser);
			lostView.setCurrentView(lostEndUser);	
	}

	Xrm.Page.data.entity.save();
}
