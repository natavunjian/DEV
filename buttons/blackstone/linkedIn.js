function onClick() {
   //Initialize page
   SADA.initialize();

   //Grab Variable for contact and check if null
   var contact = Xrm.Page.getAttribute("parentcontactid");

   if (contact.getValue() == null) {
   	alert("Please select a primary Contact for the Opportunity!");
   	return;
   }
   else {
   var firstName = FetchSingleValue_Name("contact", "firstname", "contactid", contact);
   var lastName = FetchSingleValue_Name("contact", "lastname", "contactid", contact);
   var accountName = Xrm.Page.getAttribute("parentaccountid");
   
   var url = "https://www.linkedin.com/vsearch/p?page_num=1&orig=ADVS&firstName=" + firstName + "&lastName=" + lastName + "&company=" + accountName + "&companyScope=CP";
   
   window.open(url, "_blank","resizable=yes, left=30, width=1000, height=800");
}