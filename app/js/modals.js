let overlay = document.getElementById('overlay');

let deliveryClose = document.querySelector('.delivery-close');

let deliveryModal = document.querySelector('.delivery-modal');

// deliveryClose.addEventListener('click', function() {
//   deliveryModal.style.
// })

$('.tooltip').click(function(){
    var buttonId = $(this).attr('id');
    $('#overlay').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#overlay').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });