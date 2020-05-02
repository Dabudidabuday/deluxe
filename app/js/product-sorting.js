// STYLING FILTER BUTTON GROUP
$('.button-group > .filter-button').click(function () {
  $('.button-group > .filter-button').removeClass('active');
  $(this).addClass('active');
})


var initial_items = 12;
var next_items = 8;

// INITIAL ISOTOPE
var $grid = $('.products-list').isotope({
    itemSelector: '.card',
    stagger: 30,
    transitionDuration: '0.6s',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 30
    }
});

// BIND BUTTON GROUP WITH ISOTOPE SORTING
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  updateFilterCounts();
});


function updateFilterCounts() {
  var itemElems = $grid.isotope('getFilteredItemElements');
  var count_items = $(itemElems).length;
 
  if (count_items > initial_items) {
      $('#showMore').show();
  }
  else {
      $('#showMore').hide();
  }
  if ($('.element-item').hasClass('visible_item')) {
      $('.element-item').removeClass('visible_item');
  }
  var index = 0;

  $(itemElems).each(function () {
      if (index >= initial_items) {
          $(this).addClass('visible_item');
      }
      index++;
  });
  $grid.isotope('layout');
}
// change is-checked class on buttons
$('.button-group-home').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
  });
});

function showNextItems(pagination) {
  var itemsMax = $('.visible_item').length;
  var itemsCount = 0;
  $('.visible_item').each(function () {
      if (itemsCount < pagination) {
          $(this).removeClass('visible_item');
          itemsCount++;
      }
  });
  if (itemsCount >= itemsMax) {
      $('#showMore').hide();
  }
  $grid.isotope('layout');
}

// function that hides items when page is loaded
function hideItems(pagination) {
  var itemsMax = $('.card').length;
  var itemsCount = 0;
  $('.card').each(function () {
      if (itemsCount >= pagination) {
          $(this).addClass('visible_item');
      }
      itemsCount++;
  });
  if (itemsCount < itemsMax || initial_items >= itemsMax) {
      $('#showMore').hide();
  }
  $grid.isotope('layout');
}
$('#showMore').on('click', function (e) {
  e.preventDefault();
  showNextItems(next_items);
});

hideItems(initial_items);







