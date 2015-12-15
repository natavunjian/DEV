function hideSections() {
     var numberOfProperties = Xrm.Page.getAttribute("hvcp_numberofpropertiescode").getValue();

     if (numberOfProperties == 675390000) {
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_5').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_6').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_7').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_8').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_9').setVisible(false);

     } else     if (numberOfProperties == 675390001) {
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_5').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_6').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_7').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_8').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_9').setVisible(false);

     } else     if (numberOfProperties == 675390002) {
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_5').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_6').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_7').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_8').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_9').setVisible(false);

     } else     if (numberOfProperties == 675390003) {
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_5').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_6').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_7').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_8').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_9').setVisible(false);

     } else     if (numberOfProperties == 675390004) {
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_5').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_6').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_7').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_8').setVisible(true);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_9').setVisible(true);
     } else  {
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_5').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_6').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_7').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_8').setVisible(false);
          Xrm.Page.ui.tabs.get('tab_7').sections.get('tab_7_section_9').setVisible(false);
     }
}
