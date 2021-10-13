// Script that hides the navbar when scrolling down, and shows the navbar while scrolling up.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbottom").style.bottom = "0";
    document.getElementById("navtop").style.top = "0";
  } else {
    document.getElementById("navbottom").style.bottom = "-50px";
    document.getElementById("navtop").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}