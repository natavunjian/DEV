function setEstimatedRevenue() {
   var hud = Xrm.Page.getAttribute("hvcp_ishud").getValue();
   var standardrev = Xrm.Page.getAttribute("hvcp_totalstandardrevenue").getValue();
   var hudrev = Xrm.Page.getAttribute("hvcp_totalhudrevenue").getValue();
   var estimatedrev = Xrm.Page.getAttribute("estimatedvalue").getValue();

   if (hud == 1 && hudrev != null) {
     estimatedrev.SetValue(hudrev);
   } else if (hud == 0 && standardrev != null) {
     estimatedrev.SetValue(standardrev);
   }
}
