
// let overlay = document.querySelector('.overlay');
// let btnOrder = document.querySelectorAll('.btn-order');

const modalOrder =  $('#product-request-modal');
const btnOrder = $('.btn-order')

btnOrder.click(function(){
    var buttonClass = $(this).attr('class');
    modalOrder.removeAttr('class').addClass(buttonClass);
    $('body').addClass('modal-active');
})

modalOrder.click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});


















