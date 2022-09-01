'use strict';

{
  const $container = $('.overlay')
  const $button = $('.js-openModal')
  const $closeButton = $('.js-closeModal')

  $button.click((e) => {
    $container.addClass('openModal')
  })

  $closeButton.click(() => {
    $container.removeClass('openModal')
  })

}
