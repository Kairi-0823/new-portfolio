$(function(){
  $('.toggle-btn').on('click', function () {
    $('header').toggleClass('open');
    $('body').toggleClass('plus');
  });

  $('.mobile-navi a').on('click', function () {
    $('header').toggleClass('open');
    $('body').toggleClass('plus');
  });

  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


  $(function(){
    setTimeout(function(){
      $('.site-title img').fadeIn(2000);
    },800);
  });


  $(window).scroll(function () {
    $(".slide").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
      });
    });



  $(function(){

  // 変数に要素を入れる
  var open = $('.modal-open'),
    close = $('.modal-close'),
    container = $('.modal-container');

  //開くボタンをクリックしたらモーダルを表示する
  // open.on('click',function(){ 
  //   const target = $(this).data('target');
  //   container.addClass('active2');
  //   $("body").addClass("bodyplus");
  //   return false;
  // });

  open.on('click',function(){
    const target = $(this).data('target');
    $("#" + target).addClass("active2");
    $("body").addClass("bodyplus");
    return false;
  });


  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on('click',function(){  
    container.removeClass('active2');
    $("body").removeClass("bodyplus");
  });

  //モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on('click',function(e) {
    if(!$(e.target).closest('.modal-body').length) {
      container.removeClass('active2');
      $("body").removeClass('bodyplus');
    }
  });
});

});