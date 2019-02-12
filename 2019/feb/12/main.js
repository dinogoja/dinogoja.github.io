var shine = new Shine(document.getElementById("headline"));

window.addEventListener(
  "mousemove",
  function(event) {
    shine.light.position.x = event.clientX;
    shine.light.position.y = event.clientY;
    shine.draw();
  },
  false
);

// all parameters are optional and can be changed later
var config = new shinejs.Config({
  numSteps: 4,
  opacity: 0.2,
  offset: 0.9,
  shadowRGB: new shinejs.Color(255, 0, 0)
});

// pass the config in the constructor
var shineA = new Shine(document.getElementById("headline"), config);
var shineB = new Shine(document.getElementById("my-shine-object-b"), config);

// or assign it to an instance later
var shineC = new Shine(document.getElementById("my-shine-object-c"));
shineC.config = config;
shineA.draw(); // make sure to re-draw
