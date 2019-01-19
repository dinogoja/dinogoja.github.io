anime({
    targets: " .intro",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 }
    ]
  });
  
  anime({
    targets: " img",
    left: "240px",
    backgroundColor: "#FFF",
    borderRadius: ["0%", "50%"],
    easing: "easeInOutQuad",
    loop: 3
  });
  
  anime({
    targets: " p",
    left: "240px",
    backgroundColor: "#005",
    opacity: 0.1,
    easing: "easeInOutQuad",
    loop: 3
  });
  
 function myFunction() {
  var x = document.getElementById("myImg");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}