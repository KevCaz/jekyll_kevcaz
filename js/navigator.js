// Side navbar

var queryh2 = document.querySelectorAll('h2');

for (var i=0; i<queryh2.length; i++){
  if (queryh2[i].id == "") {
    queryh2[i].id  = "auniqueidadded_h2_" + i ;
  }
  document.getElementById('docs-menu').innerHTML += "<li class='docs-nav-title'>"
  + "<a href='#" + queryh2[i].id + "'>" + queryh2[i].innerHTML +
  "</a><li>";
}
