function form_OnLoad() {
     SADA.initialize();
     SADA.LookupField("dfi_baseproductid").SetSimpleFilter("dfi_producttypecode", "eq", 222790000);
     
     if (SADA.LookupField("dfi_baseproductid").GetName() === "") {
          SADA.LookupField("dfi_processorid").Hide();
          SADA.LookupField("dfi_memoryid").Hide();
          SADA.LookupField("dfi_harddriveid").Hide();
          SADA.LookupField("dfi_videocardid").Hide();
          SADA.LookupField("dfi_accessoriesid").Hide();
          SADA.LookupField("dfi_operatingsystemid").Hide(); 
     }    
}