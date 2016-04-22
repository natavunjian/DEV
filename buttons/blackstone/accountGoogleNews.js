function onLoad() {
   var newsTopic = Xrm.Page.getAttribute("name").getValue();
   var url = "https://www.google.com/search?hl=en&gl=us&tbm=nws&authuser=0&q=" + "\"" + newsTopic + "\"" + "&oq=" + "\"" + newsTopic + "\"" ;
   
   window.open(url, "_blank","resizable=yes, left=30, width=1000, height=800");
}