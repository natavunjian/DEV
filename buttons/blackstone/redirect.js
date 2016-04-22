function redirectToProject () {
	//Define lead URL
	var projectUrl = Xrm.Page.data.entity.attributes.get("bstone_projectUrl");
	window.open.replace(projectUrl);
}