/*$('.menumobile').click(function (){
    $('.menumobile').css('width','100%')
    $('.menumobile').css('height','auto')
    $('.menumobile').css('overflow','auto')
    $('.menumobile>ul').css('display','inline-block')
    $('.menumobile').css('background-image','url(../imagens/bg.webp)')
})
  function segundoclick() {
  $('.menumobile').click(function (){
  $('.menumobile').css('width','60px%')
  $('.menumobile').css('height','60px')
  $('.menumobile').css('overflow','hidden')
  $('.menumobile>ul').css('display','none')
  $('.menumobile').css('background-image','url(../imagens/bg.webp)')
})
  }*/
  $('.menumobile').click(function () {
    $('.menumobile').removeClass('menumobile')
    $('#menumobile').addClass('menumobileon');
  })