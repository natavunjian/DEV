function priority_from_problem() {
          var f1 = SADA.LookupField("serpico_problemid");
          if(f1.GetName() !== "") {
SADA.PicklistField("serpico_prioritycode").SetValue(SADA.FetchSingleValue("serpico_problem", "serpico_prioritycode", "serpico_problemid", f1.GetID()));
          }
}