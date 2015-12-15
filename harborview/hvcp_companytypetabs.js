function hideTabs() {
    var accountTypeName = Xrm.Page.getAttribute("hvcp_accounttypecode").getValue();
    if (accountTypeName == 675390000) {

        Xrm.Page.ui.tabs.get('tab_8').setVisible(false);
        Xrm.Page.ui.tabs.get('tab_6').setVisible(true);
    }
    else if (accountTypeName == 675390002) {
        Xrm.Page.ui.tabs.get('tab_6').setVisible(false);
        Xrm.Page.ui.tabs.get('tab_8').setVisible(true);

    }

}

function setTypes() {
    var AFFinance = Xrm.Page.getAttribute("hvcp_isarfinancing").getValue();
    if (AFFinance == true) {
        var AFFinanceVal = "AR |";
    }
    else { AFFinanceVal = ""; }

    var CapEX = Xrm.Page.getAttribute("hvcp_iscapex").getValue();
    if (CapEX == true) {
        var CapEXVal = "Cap Ex |";
    }
    else { CapEXVal = ""; }

    var Mezz = Xrm.Page.getAttribute("hvcp_ismezzanine").getValue();
    if (Mezz == true) {
        var MezzVal = "Mezz |";
    }
    else { MezzVal = ""; }

    var Equity = Xrm.Page.getAttribute("hvcp_isequity").getValue();
    if (Equity == true) {
        var EquityVal = "Equity |";
    }
    else { EquityVal = ""; }

    var Senior = Xrm.Page.getAttribute("hvcp_issenior").getValue();
    if (Senior == true) {
        var SeniorVal = "Senior |";
    }
    else { SeniorVal = ""; }

    Xrm.Page.getAttribute("new_typesofdeals").setValue(AFFinanceVal + ' ' + CapEXVal + ' ' + MezzVal + ' ' + EquityVal + ' ' + SeniorVal);
    
}
