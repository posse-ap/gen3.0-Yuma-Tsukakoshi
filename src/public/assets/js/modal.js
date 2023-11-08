'use strict';

{
  //投稿後の初期化  //ツイート機能
  const checkbox = document.querySelectorAll(".input-checkbox");
  const InputTexts = document.querySelectorAll(".input-text");
  const tweetArea = document.getElementById("tweet-area");
  const shareTweet = document.querySelector(".js-twitter");

  const unChecked = (checkbox) => {
    checkbox.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }; 

  const Textclear = (InputTexts) => {
    InputTexts.forEach((text) => {
      text.value = "";
    });
  }; 

  const tweet = () => {
    if (shareTweet.checked) {
      const tweetText = `${tweetArea.value}`;
      window.open(
        `http://twitter.com/intent/tweet?&text=${tweetText}`
      );
    }
  }; 

  
  //modal遷移
  $('#record-modalButton').on('click',function(e){
    e.preventDefault();
    $("#error-record").css("display","none");
    $('#modal-top').css("display","none");
    $('#loading').css("display","block");

    let date = $('input[name="study_day"]').val();
    let contents = [];
    let languages = [];
    let study_hour = $('input[name="study_hour"]').val();

    $('input[name="contents[]"]:checked').each(function () {
      contents.push($(this).val());
    });
    $('input[name="languages[]"]:checked').each(function () {
      languages.push($(this).val());
    });

    $.ajax({
      url: 'http://localhost/webapp_store',
      type: 'POST',
      dataType: 'text',
      data: {
        date: date,
        contents: contents,
        languages: languages,
        study_hour: study_hour,
      }
    })
    .done(function (data) {
      $('#loading').css("display","none");
      $('#access-record').css("display","block");
      unChecked(checkbox);
      Textclear(InputTexts);
      tweet();

      const today = new Date();
      $('#studyDay-modalButton').val(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`);
    
    })
    .fail(function (XMLHttpRequest, textStatus, errorThrown) {
      $('#loading').css("display","none");
      $('#error-record').css("display","block");
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
    })
  });

  $('.js-closeModal').on('click',function(){
    unChecked(checkbox);
    Textclear(InputTexts);
    $('#modal-top').css("display","block");
    $('#loading').css("display","none");
    $('#access-record').css("display","none");
    $("#error-record").css("display","none");
  });

  $('#studyDay-modalButton').on('click',function(){
    $('#modal-top').css("display","none");
    $("#error-record").css("display","none");
    $('#show-calendar').css("display","block");
    $('.js-closeModal').css("display","none");
    $('.modal-back-button').css("display","block");
  })

  $('.js-closeModal').on('click',function(){
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

