function showAlert() {
   SADA.initialize();
    //Establish Var for FormType
    var formType = Xrm.Page.ui.getFormType();
    //Est Var for Field 
    var nineOneOneMsg = Xrm.Page.getAttribute("serpico_911message");
    //Check for FormType Not equal to New
    if (formType != 1) {
        //Check for null Value in Field
        if (Xrm.Page.getAttribute("serpico_911message").getValue()) {
            //Put warning on top of page
            Xrm.Page.ui.setFormNotification(nineOneOneMsg.getValue(), 'WARNING');
        }
        else {
            //Do Nothing
        }
    }
}