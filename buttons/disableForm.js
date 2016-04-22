function killForm() {
    var dealPromotion = Xrm.Page.data.entity.attributes.get("hvcp_ispromotetodeal").getValue();
    //alert(dealPromotion);
    if (dealPromotion == true) {
        Xrm.Page.data.entity.attributes.forEach(function (attribute, index) {
            var control = Xrm.Page.getControl(attribute.getName());
            if (control) {
                control.setDisabled(true)
            }
        });
    }
}