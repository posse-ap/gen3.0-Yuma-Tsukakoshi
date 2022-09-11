'use strict';

{
  let $Timeloading;
  $('#record-modalButton').on('click',function(){
    $('#modal-top').css("display","none");
    $('#loading').css("display","block");
    $Timeloading = setTimeout(function(){
        $('#loading').css("display","none");
        $('#access-record').css("display","block");
    },3000);
  });

  $('.js-closeModal').on('click',function(){
    clearTimeout($Timeloading);
    $('#modal-top').css("display","block");
    $('#loading').css("display","none");
    $('#access-record').css("display","none");
  });

  let $TimeCalendar;
  $('#studyDay-modalButton').on('click',function(){
    $('#modal-top').css("display","none");
    $('#loading').css("display","block");
    $TimeCalendar = setTimeout(function(){
        $('#loading').css("display","none");
        $('#show-calendar').css("display","block");
        $('.js-closeModal').css("display","none");
        $('.modal-back-button').css("display","block");
    },0);
  })

  $('.js-closeModal').on('click',function(){
    clearTimeout($TimeCalendar);
    $('#modal-top').css("display","block");
    $('#loading').css("display","none");
    $('#access-record').css("display","none");
    $('#show-calendar').css("display","none");
    $('.modal-back-button').css("display","none");
    $('.js-closeModal').css("display","block");
  });

  $('.js-backModal').on('click',function(){
    $('.js-closeModal').css("display","block");
    $('#show-calendar').css("display","none");
    $('#modal-top').css("display","block");
    $('.modal-back-button').css("display","none");
  });
  $('#decision-button').on('click',function(){
    $('.js-closeModal').css("display","block");
    $('#show-calendar').css("display","none");
    $('#modal-top').css("display","block");
    $('.modal-back-button').css("display","none");
  });

  const $container = $('.overlay')
  const $button = $('.js-openModal')
  const $closeButton = $('.js-closeModal')

  $button.click((e) => {
    $container.addClass('openModal')
    $('.modal-back-button').css("display","none");
  })

  $closeButton.click(() => {
    $container.removeClass('openModal')
  })
}

