let overlay = document.getElementById('overlay');

let deliveryClose = document.querySelector('.delivery-close');

let deliveryModal = document.querySelector('.delivery-modal');

// deliveryClose.addEventListener('click', function() {
//   deliveryModal.style.
// })

$('.tooltip').click(function(){
    var buttonId = $(this).attr('id');
    $('.delivery-modal').removeClass('display-none');
    $('#overlay').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#overlay').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });



  $('.btn-order').click(function(){
    var buttonClass = $(this).attr('class');
    $('.overlay').removeAttr('class').addClass(buttonClass);
    $('body').addClass('modal-active');
  })
  
  $('.overlay').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });