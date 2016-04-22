function completeProject () {
    //Set Project Status to complete
    var project_status = Xrm.Page.getAttribute("statuscode");
    
    if(project_status.getValue() == 1) {
        project_status.setValue(931180000);
        Xrm.Page.data.entity.save();
    }

}
