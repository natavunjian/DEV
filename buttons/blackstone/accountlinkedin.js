function onClick() {
   //Grab Attributes
   var accountName = Xrm.Page.getAttribute("name").getValue();

   var url = "https://www.linkedin.com/vsearch/p?page_num=1&orig=ADVS&company=" + accountName + "&companyScope=CP";
   
   window.open(url, "_blank","resizable=yes, left=30, width=1000, height=800");
}