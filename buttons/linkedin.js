function onClick() {
   //Grab Attributes
   var firstName = Xrm.Page.getAttribute("firstname").getValue();
   var lastName = Xrm.Page.getAttribute("lastname").getValue();
   var accountName = Xrm.Page.getAttribute("parentcustomerid").getName();

   var url = "https://www.linkedin.com/vsearch/p?page_num=1&orig=ADVS&firstName=" + firstName + "&lastName=" + lastName + "&company=" + companyName + "&companyScope=CP";
   
   window.open(url, "_blank","resizable=yes, left=30, width=1000, height=800");
}