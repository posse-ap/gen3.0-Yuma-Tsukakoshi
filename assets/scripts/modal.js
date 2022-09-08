'use strict';

{
  let $setTime;
  $('#record-modalButton').on('click',function(){
    $('#modal-top').css("display","none");
    $('#loading').css("display","block");
    $setTime = setTimeout(function(){
        $('#loading').css("display","none");
        $('#access-record').css("display","block");
    },3000);
  });


  $('.js-closeModal').on('click',function(){
    clearTimeout($setTime);
    $('#modal-top').css("display","block");
    $('#loading').css("display","none");
    $('#access-record').css("display","none");
  });

  const $container = $('.overlay')
  const $button = $('.js-openModal')
  const $closeButton = $('.js-closeModal')

  $button.click((e) => {
    $container.addClass('openModal')
  })

  $closeButton.click(() => {
    $container.removeClass('openModal')
  })

  //carender function: showCalender()
}

