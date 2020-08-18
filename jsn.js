function op(e) {
  e.style.color = "ghostwhite";
  e.childNodes[0].style.left = "0";
  e.style.fontWeight = "500";
  var arrows = document.getElementsByClassName("iconn");
  for (var i = 0; i < arrows.length; i++) {
    if (e != arrows[i]) {
      arrows[i].style.color = "transparent";
      arrows[i].childNodes[0].style.left = "20%";
      arrows[i].style.fontWeight = "500";
    }
  }
}
function border(q) {
  var arrow = document.getElementsByClassName("iconn");
  for (var i = 0; i < arrow.length; i++) {
    if (q === arrow[i]) {
      var x = 100 * i;
      document.getElementById("bor").style.transform =
        "translate(" + x + "%,0)";
    }
  }
}
