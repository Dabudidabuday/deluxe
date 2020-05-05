let overlay = document.getElementById('overlay');

let deliveryClose = document.querySelector('.delivery-close');

let deliveryModal = document.querySelector('.delivery-modal');

// deliveryClose.addEventListener('click', function() {
//   deliveryModal.style.
// })

$('.tooltip').click(function(){
    var buttonId = $(this).attr('id');
    $('.delivery-modal').removeClass('display-none');
    $('#delivery-modal').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#delivery-modal').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });

  
  $('.overlay').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });


  $('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });