 // set images
 var images = [
    "../../assets/dresses/dress-1.jpg",
    "http://hmongouachon.com/_demos/rgbShiftSlider/02-portrait-large.jpg",
    "http://hmongouachon.com/_demos/rgbShiftSlider/03-portrait-large.jpg",
    "http://hmongouachon.com/_demos/rgbShiftSlider/04-portrait-large.jpg",
    "http://hmongouachon.com/_demos/rgbShiftSlider/05-portrait-large.jpg",
  ]

// instanciate slider
var rbgShiftSlider = new rbgShiftSlider({
    nav : true,
    navElement: '.slider-control',
    slideImages: images,
    stageWidth: 610,
    stageHeight: 540,
    
    displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
    fullScreen: false,
    transitionDuration: 0.2, // must be 0.1 > transitionGhostDuration
    transitionGhostDuration : 0.25,
    transitionFilterIntensity: 350,
    transitionSpriteIntensity: 2,
    mouseDispIntensity: 3,
    interactive : true,
    autoPlay : true,
    autoPlaySpeed : 5000,
});