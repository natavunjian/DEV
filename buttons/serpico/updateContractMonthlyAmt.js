function onLoad() {
  SADA.initialize();
}

/*
* Function that grabs most Active Contract from Account
* and updates "Active Contract Monthly Revenue Field"
* with appropriate Monthly amount value in Account
* Form onLoad
*/

function updateContractMonthlyAmt() {
  //grab necessary variables from Account and Contract
  var account = Xrm.Page.getAttribute("name").getValue();
  var account_id = SADA.Field("accountid").GetValue();
  alert("account_id");

  if (account != null) {
      var account_monthly_amt = SADA.Field("serpico_contractmonthlyamount");
      var contract_monthly_amt = SADA.FetchSingleValue("serpico_contract", "serpico_monthlyamount", "serpico_accountnameid", account_id);
      if (contract_monthly_amt != null) {
        account_monthly_amt.SetValue(contract_monthly_amt);
      }
  }
}

