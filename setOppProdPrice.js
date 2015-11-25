function form_OnLoad() {
     SADA.initialize();
}

function set_price_from_quantity() {
     //initialize and define variables
     var quantity = SADA.Field("quantity");
     var quant_value = SADA.Field("quantity").GetValue();
     var product = SADA.LookupField("productid");
     var price = SADA.Field("dfi_priceperunit");
     var final_price = SADA.Field("priceperunit");
     var writein_product = Xrm.Page.getAttribute("isproductoverridden").getValue();
     var qty1_10 = SADA.Field("dfi_qty1_10").GetValue();
     var qty11_50 = SADA.Field("dfi_qty11_50").GetValue();
     var qty51_100 = SADA.Field("dfi_qty51_100").GetValue();
     var qty101 = SADA.Field("dfi_qty101").GetValue();

     // if write in product is false (existing product)
     if (writein_product === false) {
          //fetch base cost from product and set equal to base cost in opp product
          var base_cost = SADA.FetchSingleValue("product", "price", "productid", product.GetID());
          price.SetValue(base_cost);
          Xrm.Page.data.entity.save();
          Xrm.Utility.openEntityForm(“opportunityproduct”, Xrm.Page.data.entity.getId());
               if(quant_value >= 0 && quant_value < 11)
                    final_price.SetValue(qty1_10);
               else if(quant_value > 10 && quant_value < 51)
                    final_price.SetValue(qty11_50);
               else if(quant_value > 50 && quant_value < 101)
                    final_price.SetValue(qty51_100);
               else if(quant_value > 100)
                    final_price.SetValue(qty101);
               else {
                    quantity.Clear();
               }          
     }
     
     else if (writein_product === true) {
          if (price.GetValue() != null)
          //set write in product price based on quantity entered 
               if(quant_value >= 0 && quant_value < 11)
                    final_price.SetValue(qty1_10);
               else if(quant_value > 10 && quant_value < 51)
                    final_price.SetValue(qty11_50);
               else if(quant_value > 50 && quant_value < 101)
                    final_price.SetValue(qty51_100);
               else if(quant_value > 100)
                    final_price.SetValue(qty101);
               else {
                    quantity.Clear();
               }          
     }
     else {
          return;
     }
}