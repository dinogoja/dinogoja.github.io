// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
  triggerElement: ".intro"
})
  .setClassToggle(".intro", "show")
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".importante"
})
  .setClassToggle(".importante", "show")
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".molto"
})
  .setClassToggle(".molto", "fade-in")
  .addTo(controller);

// wait for document ready
// init
var controller3 = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave"
  }
});

// get all slides
var slides = document.querySelectorAll("section.panel");

// create scene for every slide
for (var i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i]
  })
    .setPin(slides[i])
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller3);
}
