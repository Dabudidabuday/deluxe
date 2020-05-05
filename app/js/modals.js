// MODAL DELIVERY
$('.tooltip').click(function(){
    var buttonId = $(this).attr('id');
    $('#delivery-modal').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#delivery-modal').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });

// MODAL ORDER
$('#btn-order').click(function(){
    var buttonId = $(this).attr('id');
    $('#product-request-modal').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#product-request-modal').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});

