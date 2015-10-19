function form_OnLoad() {
     SADA.initialize();
}

function set_price_from_quantity() {
     //initialize / define variables
     var quantity = SADA.Field("quantity");
     var quant_value = SADA.Field("quantity").GetValue();
     var product = SADA.LookupField("productid");
     var price = SADA.Field("dfi_priceperunit");
     var final_price = SADA.Field("priceperunit");
     var qty1_10 = SADA.Field("dfi_qty1_10").GetValue();
     var qty11_50 = SADA.Field("dfi_qty11_50").GetValue();
     var qty51_100 = SADA.Field("dfi_qty51_100").GetValue();
     var qty101 = SADA.Field("dfi_qty101").GetValue();
     var writein_product = Xrm.Page.getAttribute("isproductoverridden").getValue();

     // if write in product is false (existing product)
     if (writein_product === false) {
          //set price from product entities
          if (quant_value > 0 && quant_value < 11) 
                    setPrice(price, product, "dfi_qty1_10");
               else if (quant_value > 10 && quant_value < 51) 
                    setPrice(price, product, "dfi_qty11_50");
               else if (quant_value > 50 && quant_value < 101) 
                    setPrice(price, product, "dfi_qty51_100");
               else if (quant_value > 100)
                    setPrice(price, product, "dfi_qty101");
               else {
                    alert("Can't have negative or zero quantity!");
                    quantity.Clear();
               }
     }
     else if (writein_product === true) {
          if (price.GetValue() != null)
          //set write in product price based on quantity entered 
               if(quant_value > 0 && quant_value < 11)
                    final_price.SetValue(qty1_10);
               else if(quant_value > 10 && quant_value < 51)
                    final_price.SetValue(qty11_50);
               else if(quant_value > 50 && quant_value < 101)
                    final_price.SetValue(qty51_100);
               else if(quant_value > 100)
                    final_price.SetValue(qty101);
               else {
                    alert("Can't have negative or zero quantity!");
                    quantity.Clear();
               }          
     }
     else {
          return;
     }
}

function setPrice (price, product, quant_field) {
     price.SetValue(SADA.FetchSingleValue("product", quant_field, "productid", product.GetID()));
}

function clearExistingFields () {
     var write_in = Xrm.Page.getAttribute("isproductoverridden").getValue();

     //checks to see if product is existing or write in
     if (write_in === false) {
          SADA.Field("dfi_qty1_10").Hide();
          SADA.Field("dfi_qty11_50").Hide();
          SADA.Field("dfi_qty51_100").Hide();
          SADA.Field("dfi_qty101").Hide(); 
          SADA.Field("dfi_priceperunit").Hide();
     }
}