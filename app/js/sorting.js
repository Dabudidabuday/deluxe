
  // init Isotope
  var $grid = $grid.isotope({
    getSortData: {
      evening: '.evening',
      wedding: '.wedding',
      another: '.another',
      accessories: '.accessories'
    }
  });
  
  // sort items on button click
  $('.sort-by-button-group').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
asasdasdasdasdasdasdasdas