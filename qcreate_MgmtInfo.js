function qcreate_updateMgmtInfo () {

     SADA.initialize();

     var management_company = SADA.LookupField("serpico_managementcompanyid");
     var address_street = SADA.Field("address1_line1");
     var business_phone = SADA.Field("telephone1");
     var address_city = SADA.Field("address1_city");
     var address_postal = SADA.Field("address1_postalcode");
     

     if(management_company.GetName() !== "") {
         address_street.SetValue(SADA.FetchSingleValue("serpico_managementcompany", "serpico_street",
           "serpico_managementcompanyid", management_company.GetID()));
         business_phone.SetValue(SADA.FetchSingleValue("serpico_managementcompany", "serpico_mainphone",
           "serpico_managementcompanyid", management_company.GetID()));
         address_city.SetValue(SADA.FetchSingleValue("serpico_managementcompany", "serpico_city",
           "serpico_managementcompanyid", management_company.GetID()));
         address_postal.SetValue(SADA.FetchSingleValue("serpico_managementcompany", "serpico_zippostalcode",
           "serpico_managementcompanyid", management_company.GetID()));
     }
} 