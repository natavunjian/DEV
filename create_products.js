function createOppProd(product_name) {
    
    //Set Current Field and the Product Lookup Field associated with the current field
    var current_field = SADA.LookupField("dfi_" + product_name + "id");
    var product_field;
    if (product_name !== "baseproduct") product_field = SADA.LookupField("dfi_" + product_name + "productid");
    else product_field = SADA.LookupField("dfi_baseproductid");
   
    //Check if the current field has data
    if (current_field.GetName() !== "") {
        
        //Set the associated product field to the child product of the current field's product union or to the base product
        if (product_name !== "baseproduct") {
           var child_product = SADA.FetchSingleValue("dfi_productunion", "dfi_childproductid",
                                                                                      "dfi_productunionid", current_field.GetID());
           product_field.SetSingleValue(child_product, current_field.GetName(), "product");
        }
        //dec opp prod entity
        var new_opp_product = SADA.CrmObject("opportunityproduct");
        
        //Hard Code Unit of Measure
        var lUomID = "00334458-22B5-4A92-8818-72AB5306B692";
        
        var IOppID = Xrm.Page.data.entity.getId();
        var fPassed = true;
       
        var fPrice = SADA.FetchSingleValue("product", "dfi_qty1_10", "productid", product_field.GetID());
       
        //Set Field Values on OppProd
        new_opp_product.SetLookupValue("opportunityid", IOppID, "opportunity");
        new_opp_product.SetBooleanValue("ispriceoverridden", true);
        new_opp_product.SetLookupValue("uomid", lUomID, "uom");
        new_opp_product.SetLookupValue("productid", product_field.GetID(), "product");
        new_opp_product.SetDecimalValue("quantity", 1);
        new_opp_product.SetMoneyValue("priceperunit", fPrice);
        new_opp_product.SetMoneyValue("priceperunit_base", fPrice);
        new_opp_product.SetMoneyValue("dfi_priceperunit", fPrice);
        new_opp_product.SetMoneyValue("dfi_priceperunit_base", fPrice);
        
        var new_opp_product_id = new_opp_product.Create();
        if(product_name === "baseproduct") {
            SADA.LookupField("dfi_processorid").Show();
            SADA.LookupField("dfi_memoryid").Show();
            SADA.LookupField("dfi_harddriveid").Show();
            SADA.LookupField("dfi_videocardid").Show();
            SADA.LookupField("dfi_accessoriesid").Show();
            SADA.LookupField("dfi_operatingsystemid").Show();
        }
    }
   else if(product_name === "baseproduct") {
        SADA.LookupField("dfi_processorid").ClearAndHide();
        SADA.LookupField("dfi_memoryid").ClearAndHide();
        SADA.LookupField("dfi_harddriveid").ClearAndHide();
        SADA.LookupField("dfi_videocardid").ClearAndHide();
        SADA.LookupField("dfi_accessoriesid").ClearAndHide();
        SADA.LookupField("dfi_operatingsystemid").ClearAndHide();
    }
}
