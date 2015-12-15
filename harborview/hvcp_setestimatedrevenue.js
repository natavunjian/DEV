function setEstimatedRevenue() {
   var hud = Xrm.Page.getAttribute("hvcp_ishud").getValue();

//   var estimatedrev = Xrm.Page.getAttribute("estimatedvalue").getValue();

   if (hud === true) {
     var hudrev = Xrm.Page.getAttribute("hvcp_totalhudrevenue").getValue();

     if (hudrev != null) {
        Xrm.Page.getAttribute("estimatedvalue").setValue(hudrev);
     } else {
        Xrm.Page.getAttribute("estimatedvalue").setValue(0);
     }
   }

   if (hud === false){
     var standardrev = Xrm.Page.getAttribute("hvcp_totalstandardrevenue").getValue();
     if (standardrev != null) {
        Xrm.Page.getAttribute("estimatedvalue").setValue(standardrev);
     } else {
        Xrm.Page.getAttribute("estimatedvalue").setValue(0);
     } 
   }


}
