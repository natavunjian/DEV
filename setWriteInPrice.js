function form_OnLoad() {
     SADA.initialize();
}

function set_price_from_quantity() {
     var quantity = SADA.Field("quantity");
     var product = SADA.LookupField("productid");
     var price = SADA.Field("priceperunit");
     var write_in_product = SADA.Field("isproductoverridden").GetValue();

     if (write_in_product === false) {
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
          if (quantity.GetValue() > 0 && quantity.GetValue() < 11) 
               setWriteInPrice(price, "dfi_qty1_10");
          else if (quantity.GetValue() > 10 && quantity.GetValue() < 51) 
               setWriteInPrice(price, "dfi_qty11_50");
          else if (quantity.GetValue() > 50 && quantity.GetValue() < 101) 
               setWriteInPrice(price, "dfi_qty51_100");
          else if (quantity.GetValue() > 100)
               setWriteInPrice(price, "dfi_qty101");
          else {
               alert("Can't have negative or zero quantity!");
               quantity.Clear();
          }   
     }

     var price_per_unit_diff = SADA.Field("priceperunit").GetValue() - price.GetValue();
     var total_discount = price_per_unit_diff * quantity.GetValue();
     SADA.Field("manualdiscountamount").SetValue(total_discount);
}

function setPrice (price, product, quant_field) {
     price.SetValue(SADA.FetchSingleValue("product", quant_field, "productid", product.GetID()));
}

function setWriteInPrice (price, quant_field) {
     price.SetValue(SADA.FetchSingleValue("opportunityproduct", quant_field, quantity, "quantity"));
}

