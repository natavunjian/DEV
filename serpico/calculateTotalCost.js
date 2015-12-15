function calculateTotalCost () {
     var product_price;
     var quantity;

     try {
     	//get value of product price
     	var product_price_field = Xrm.Page.getAttribute("serpico_productprice");
     	if ((product_price_field.getValue() != null) && (product_price_field.getValue() != "undefined")) {
     		product_price = product_price_field.getValue();
     	}

     	else {
     		price = 0;
     	}

     	//get value of quantity
     	var quantity_field = Xrm.Page.getAttribute("serpico_dec_quantity");
     	if((quantity_field.getValue()!= null) && (quantity_field.getValue() != "undefined")) {
     		quantity = quantity_field.getValue();
     	}

     	else {
     		quantity = 0;
     	}

     	//set value of calculated cost to quantity * product price
		var calculated_cost = (product_price * quantity);
		        Xrm.Page.getAttribute("serpico_calculatedcost").setValue(calculated_cost);
		        Xrm.Page.data.entity.attributes.get("serpico_calculatedcost").setSubmitMode("always");          
		//because field is set to read only, we need to set this to insure save.
		}

		catch (err) {
		    alert('Error with javascript on updating total cost ' + err);
		}
		
		return 0;
} 