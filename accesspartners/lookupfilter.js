function preFilterLookup() {    
    Xrm.Page.getControl("sada_manufacturerid").addPreSearch(function () {
    addLookupFilter();
   });
}

function addLookupFilter() {
    var manufacturer = Xrm.Page.getAttribute("sada_manufacturerid").getValue();
    if (manufacturer != null) {
        fetchXml = "<filter type='and'><condition attribute='sada_ismanufacturer' operator='eq' value='1'/></filter>"; 
        Xrm.Page.getControl("sada_manufacturerid").addCustomFilter(fetchXml);
    }
}