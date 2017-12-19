// Pure JS
var main = document.getElementById("main"),
    zoom = document.getElementById("zoom");

main.addEventListener("mousemove", function(e) {
  var x = e.clientX - 75,
      y = e.clientY - 75;
  zoom.style.left = x + "px";
  zoom.style.top = y + "px";
});
