var $teamSlider = $('.team__members-list').flickity({
    cellAlign: 'left',
    prevNextButtons: false,
    contain: true,
    pageDots: false,
    wrapAround: true,
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
