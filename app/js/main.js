var $teamSlider = $('.team__members-list').flickity({
    cellAlign: 'left',
    prevNextButtons: false,
    contain: true,
    pageDots: false,
    wrapAround: true,
    autoPlay: 3200,
    wrapAround: true,
    selectedAttraction: 0.05,
    friction: 0.8
  });

  $('.previous').on( 'click', function() {
    $teamSlider.flickity('previous');
  });
  $('.next').on( 'click', function() {
    $teamSlider.flickity('next');
  });



  // SHOW MORE PRODUCTS

  var areCardsShown = false;
$(".products__more").on("click", function() {
  if (areCardsShown) {
    // Hide cards
    $(".card.card-toggle").removeClass("show");
    $(this).text("Show More");
  } else {
    // Show cards
    $(".card.card-toggle").addClass("show");
    $(this).text("Show Less");
  }
  
  areCardsShown = !areCardsShown;
});



// FILTERING PRODUCTS


  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    stagger: 30,
    transitionDuration: '0.6s',
    initLayout: false
  });


// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});





$('.button-group > .filter-button').click(function () {
  $('.button-group > .filter-button').removeClass('active');
  $(this).addClass('active');
})































// $(document).ready(function()
// {
//   var sub_width = 0;
//   var sub_height = 0;
//    $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

//   $(".zoom-area").mousemove(function(e){
//     if(!sub_width && !sub_height)
//     {
//       var image_object = new Image();
//       image_object.src = $(".small").attr("src");
//       sub_width = image_object.width;
//       sub_height = image_object.height;
//     }
//     else
//     {
//       var magnify_position = $(this).offset();

//       var mx = e.pageX - magnify_position.left;
//       var my = e.pageY - magnify_position.top;
      
//       if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
//           $(".large").fadeIn(100);

//       } else {
//         $(".large").fadeOut(100);
//       }

//       if($(".large").is(":visible")) {
//         var rx = Math.round(mx/$(".small").width()*sub_width - $(".large").width()/2)*-1;
//         var ry = Math.round(my/$(".small").height()*sub_height - $(".large").height()/2)*-1;

//         var bgp = rx + "px " + ry + "px";
        
//         var px = mx - $(".large").width()/2;
//         var py = my - $(".large").height()/2;

//         $(".large").css({left: px, top: py, backgroundPosition: bgp});
//       }
//     }
//   })
// })