function op(el) {
  el.style.opacity = "1";
  var arrows = document.getElementsByClassName("home");
  for (var i = 0; i < arrows.length; i++) {
    if (el != arrows[i]) {
      arrows[i].style.opacity = "0.5";
    }
  }
}
function border(e) {
  var arrow = document.getElementsByClassName("home");
  for (var i = 0; i < arrow.length; i++) {
    if (e === arrow[i]) {
      var x = 100 * i;
      document.getElementById("slider").style.transform =
        "translate(" + x + "%,0)";
    }
  }
}
