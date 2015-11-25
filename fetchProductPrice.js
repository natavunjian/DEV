function fetchProductPrice () {
     SADA.initialize();
     var product_field = SADA.LookupField("serpico_productid");
     var product_price_field = SADA.Field("serpico_productprice");
     if(product_field.GetName() !== ""){
          product_price_field.SetValue(SADA.FetchSingleValue("serpico_product", "serpico_price", "serpico_productid", product_field.GetID()));
     }
} 