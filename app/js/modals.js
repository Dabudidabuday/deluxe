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
$('.card .btn-order').click(function(event){
    event.stopPropagation();
    $('#product-request-modal').removeAttr('class').addClass('in');
    $('#product-request-modal').addClass('modal-active');
})

$("#product-request-modal").click(function(event) {
    event.stopPropagation();
    $('#product-request-modal').addClass('out');
    $('#product-request-modal').removeClass('modal-active');
});

// $('*:not(#product-request-modal)').click(function(e){
//     e.preventDefault();
// });

$('.modal-background').click(function(event){
    event.stopPropagation();
});


jQuery(document).on('click',function (e) {
    var el = '.element';
    if (jQuery(e.target).closest(el).length) return;
    // дальше пишем код который нужно выполнить по клику вне элемента
   });







// $('#product-request-modal').click(function(e){
//   e.stopPropagation();
//     $(this).addClass('out');
//     $('body').removeClass('modal-active');
// });

// $(document).on('click',function (e) {
//   var el = '.modal-background';
//   console.log($(e.target).closest(el));
//   if ($(e.target).closest(el).length) return;
//     $('#product-request-modal').addClass('out');
//     $('body').removeClass('modal-active');
//  });


 