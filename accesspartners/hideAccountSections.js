function hideSection() {

     Xrm.Page.ui.tabs.get("Summary").sections.get("ComplaintRequest").setVisible(false);
     Xrm.Page.ui.tabs.get("Summary").sections.get("ComplaintDetails").setVisible(false);
     Xrm.Page.ui.tabs.get("Summary").sections.get("InternalInfo").setVisible(false);

     var subject = Xrm.Page.getAttribute("subjectid");
     if(subject.getValue() != null)
     	alert(subject.getValue[0].name);
     
     if (subject.getValue() != null && subject.getValue()[0].name="Complaint Request") {
            Xrm.Page.ui.tabs.get('Summary').sections.get("ComplaintRequest").setVisible(true);
            Xrm.Page.ui.tabs.get("Summary").sections.get("ComplaintDetails").setVisible(true);
     		Xrm.Page.ui.tabs.get("Summary").sections.get("InternalInfo").setVisible(true);
     }
     Xrm.Page.data.entity.save();
}
