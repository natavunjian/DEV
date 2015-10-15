function form_OnLoad() {
     SADA.initialize();
}

function set_price_from_quantity() {
     var quantity = SADA.Field("quantity");
     var product = SADA.LookupField("productid");
     var price = SADA.Field("new_priceperunit");
     var edit_margin = SADA.PicklistField("dfi_iseditprofitmargin").GetSelectedOption();
     var sell_at_cost = SADA.FetchSingleValue("product", "dfi_issellatcost", "productid", product.GetID());
     
     if (sell_at_cost === false) {
          if (edit_margin.text === "No") { 
               if (quantity.GetValue() > 0 && quantity.GetValue() < 11) 
                    setPrice(price, product, "dfi_qty1_10");
               else if (quantity.GetValue() > 10 && quantity.GetValue() < 51) 
                    setPrice(price, product, "dfi_qty11_50");
               else if (quantity.GetValue() > 50 && quantity.GetValue() < 101) 
                    setPrice(price, product, "dfi_qty51_100");
               else if (quantity.GetValue() > 100)
                    setPrice(price, product, "dfi_qty101");
               else {
                    alert("Can't have negative or zero quantity!");
                    quantity.Clear();
               }
          }
          else {
               var base_cost = SADA.FetchSingleValue("product", "price", "productid", product.GetID());
               var new_margin = SADA.Field("dfi_customprofitmargin").GetValue();
               var final_price = base_cost / (1 - (new_margin/100));
               price.SetValue(final_price);
          }
     }
     else {
          setPrice (price, product, "price");
     }
     var price_per_unit_diff = SADA.Field("priceperunit").GetValue() - price.GetValue();
     var total_discount = price_per_unit_diff * quantity.GetValue();
     SADA.Field("manualdiscountamount").SetValue(total_discount);
}

function setPrice (price, product, quant_field) {
     price.SetValue(SADA.FetchSingleValue("product", quant_field, "productid", product.GetID()));
}

