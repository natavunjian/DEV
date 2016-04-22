function getAnniversary() {
	var options = Xrm.Page.getAttribute("serpico_anniversarymonth").getOptions();
        var startdate = Xrm.Page.getAttribute("serpico_startdate").getValue();
        if (startdate != null) {
		    for (i = 0; i < options.length; i++) {
				if (options[i].value == startdate.getMonth()) {
				Xrm.Page.getAttribute("serpico_anniversarymonth").setValue(options[i].value);
	                        Xrm.Page.data.entity.save();
		    	}
	   		}
		}
}