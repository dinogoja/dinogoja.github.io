ScrollReveal().reveal(".headline");
ScrollReveal().reveal(".tagline", { delay: 500 });
ScrollReveal().reveal(".punchline", { delay: 2000 });
ScrollReveal().reveal(".punchline2", { delay: 3000 });
ScrollReveal().reveal(".punchline3", { delay: 4000 });
ScrollReveal().reveal(".punchline4", { delay: 5000 });
ScrollReveal().reveal(".punchline5", { delay: 6000 });
ScrollReveal().reveal(".punchline6", { delay: 7000 });
ScrollReveal().reveal(".punchline7", { delay: 8000 });

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  duration: 100, // the scene should last for a scroll distance of 100px
  offset: 50 // start this scene after scrolling for 50px
})
  .setPin(".tagline") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

// speriamo che funzioni

// init controller
var controller = new ScrollMagic.Controller({ vertical: false });

// build tween
var tween = TweenMax.to(".tagline", 0.5, { backgroundColor: "green", width: "+=400" });

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".punchline", duration: 500 })
  .setTween(tween)
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
