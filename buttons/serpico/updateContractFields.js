function updateContractFields() {
    SADA.initialize();
    var cAccountManager = Xrm.Page.getAttribute("serpico_accountmanagercode");
    var checkNull = Xrm.Page.getAttribute("serpico_accountnameid");

    if(checkNull.getValue() != null) {
        var cAccountName = Xrm.Page.getAttribute("serpico_accountnameid").getValue()[0].name;
        var accountManager = SADA.FetchSingleValue("account", "serpico_accountmanager", "name", cAccountName, false);

        if (accountManager != null) {
            cAccountManager.setValue(accountManager);
            Xrm.Page.data.entity.save();
        }
        else {
            return;
        }
    }
}
