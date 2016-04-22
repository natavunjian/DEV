function redirectToLead () {
	//Define lead URL
	var leadURL = Xrm.Page.data.entity.attributes.get("silray_redirectURL");
	window.location.replace(leadURL);
}