function filterCapProvider() {
    Xrm.Page.getControl("hvcp_lenderid").addPreSearch(addStateFilter);
}

function addStateFilter() {
    if (Xrm.Page.getAttribute("hvcp_stateid") == null ||
            Xrm.Page.getAttribute("hvcp_regionid").getValue() == null) {
        return;
    }

    //GetLocationandTypes
    var state = Xrm.Page.getAttribute("hvcp_stateid").getValue();
    var region = Xrm.Page.getAttribute("hvcp_regionid").getValue();
    var AFFinance = Xrm.Page.getAttribute("hvcp_isarfinancing").getValue();
    var CapEX = Xrm.Page.getAttribute("hvcp_iscapex").getValue();
    var Mezz = Xrm.Page.getAttribute("hvcp_ismezzanine").getValue();
    var Equity = Xrm.Page.getAttribute("hvcp_isequity").getValue();
    var Senior = Xrm.Page.getAttribute("hvcp_issenior").getValue();
    
    //GetPropTypes
    var Healthcare = Xrm.Page.getAttribute("hvcp_ishealthcare").getValue();
    var MultiFamily = Xrm.Page.getAttribute("hvcp_ismultifamily").getValue();
    var Lodging = Xrm.Page.getAttribute("hvcp_islodging").getValue();
    var Office = Xrm.Page.getAttribute("hvcp_isoffice").getValue();
    var Retail = Xrm.Page.getAttribute("hvcp_isretail").getValue();
    var Industrial = Xrm.Page.getAttribute("hvcp_isindustrial").getValue();
    var Mixed = Xrm.Page.getAttribute("hvcp_ismixeduse").getValue();
    var StudentHousing = Xrm.Page.getAttribute("hvcp_isstudenthousing").getValue();
 
    //if (state && region == null) {
    //    return;
    //}

    fetchXml = '<filter type="and" >' +
                '<filter type="or" >' +
                           '<condition attribute="hvcp_stateid" operator="eq" value="' +
                                          state[0].id + '" />' +
                            '<condition attribute="hvcp_regionid" operator="eq" value="' +
                                          region[0].id + '" />' +
                            '<condition attribute="hvcp_isnopreference" operator="eq" value="1" />' +
                '</filter>' +
                '<filter type="or">' +
                            '<condition attribute="hvcp_ishealthcare" operator="eq" value="' +
                                          Healthcare + '" />' +
                            '<condition attribute="hvcp_ismultifamily" operator="eq" value="' +
                                          MultiFamily + '" />' +
                            '<condition attribute="hvcp_islodging" operator="eq" value="' +
                                          Lodging + '" />' +
                            '<condition attribute="hvcp_isoffice" operator="eq" value="' +
                                          Office + '" />' +
                            '<condition attribute="hvcp_isretail" operator="eq" value="' +
                                          Retail + '" />' +
                            '<condition attribute="hvcp_isindustrial" operator="eq" value="' +
                                          Industrial + '" />' +
                            '<condition attribute="hvcp_ismixeduse" operator="eq" value="' +
                                          Mixed + '" />' +
                            '<condition attribute="hvcp_isstudenthousing" operator="eq" value="' +
                                          StudentHousing + '" />' +
                '</filter>' +
                '</filter>';

    Xrm.Page.getControl("hvcp_lenderid").addCustomFilter(fetchXml);
}

