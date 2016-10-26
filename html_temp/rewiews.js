  <script>
  function SendComagic(name, tel, type, txt) {
    try {
      if (txt == '') {
        Comagic.push(['addOfflineRequest', {
          name: name,
          phone: tel,
          message: type
        }]);
      } else {
        Comagic.push(['addOfflineRequest', {
          name: name,
          phone: tel,
          email: txt,
          message: type
        }]);
      }
    } catch (err) {
      return false;
    }

  }
  </script>
  <script>
  $('.tel .call').click(function() {
    $('.popup1 .pop_type').val('call');
    $('.popup1 .header').html('МЫ ПЕРЕЗВОНИМ ЧЕРЕЗ 10 МИНУТ!');
    $('#hide-layout, #popup1').fadeIn(300);
  })

  $('.vyzov .zam a').click(function() {
    $('.popup1 .pop_type').val('zamer');
    $('.popup1 .header').html('ЗАПИСЬ НА <span class="yellow">БЕСПЛАТНЫЙ</span> ЗАМЕР!');
    $('#hide-layout, #popup1').fadeIn(300);
  })
  </script>
  <script>
  var a = 0;

  $(window).scroll(function() {
    if (($(this).scrollTop() > 500) && ($(this).scrollTop() < $(document).height() - 1000)) {
      //if (($(this).scrollTop() > 500)) {
      if (a == 0) {
        $('.scroll').animate({
          right: 15
        });
        a = 1;
      }
    } else {
      if (a == 1) {
        $('.scroll').animate({
          right: -200
        });
        a = 0;
      }
    }
  });

  var b = 0;

  $(window).scroll(function() {
    if (($(this).scrollTop() > 500) && ($(this).scrollTop() < $(document).height() - 1000)) {
      //if (($(this).scrollTop() > 500)) {
      if (b == 0) {
        $('.toptop').animate({
          left: 15
        });
        b = 1;
      }
    } else {
      if (b == 1) {
        $('.toptop').animate({
          left: -200
        });
        b = 0;
      }
    }
  });


  $(".toptop").click(function() {
    $("body,html").animate({
      scrollTop: 0
    }, 100);
    return false
  });
  </script>
  <script>
  $.lockfixed("#callback3otz", {
    offset: {
      top: 10,
      bottom: 1100
    }
  });
  $(".v_tel").inputmask("+7 (999) 999-99-99");
  $('#callback-send_otz').click(function() {
    var name = $('#callback3otz .v_name').val();
    var tel = $('#callback3otz .v_tel').val();
    var txt = $('#callback3otz .v_text').val();
    //Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'otz' }]);
    $.ajax({
      type: "POST",
      url: "forms.php",
      data: "name=" + name + "&tel=" + tel + '&txt=' + txt + '&f=otz',
      success: function(data) {
        if (data == 'ok') {

          //  alert ('Заявка успешно отправлена');
          $('#callback3otz .v_name').val('');
          $('#callback3otz .v_tel').val('');
          $('#hide-layout').fadeIn(300);
          $('#spasibo').fadeIn(300);
          SendComagic(name, tel, 'otz', '');
        } else {
          alert('Заявка успешно отправлена');
        };

      }
    });


  });
  </script>
  <script>
  $(".v_tel3").inputmask("+7 (999) 999-99-99");
  $('#callback-send3').click(function() {
    var name3 = $('.v_name3').val();
    var tel3 = $('.v_tel3').val();
    //Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'callback2' }]);
    $.ajax({
      type: "POST",
      url: "forms.php",
      data: "name=" + name3 + "&tel=" + tel3 + '&f=callback2&subject=РАССЧИТАЕМ ВАШ ЗАКАЗ ЗА 5 МИНУТ!',
      success: function(data) {
        if (data == 'ok') {

          //  alert ('Заявка успешно отправлена');
          $('.s_name').val('');
          $('.s_tel').val('');
          $('#hide-layout').fadeIn(300);
          $('#spasibo').fadeIn(300);
          SendComagic(name3, tel3, 'callback2', '');
        } else {
          alert('Заявка успешно отправлена');
        };

      }
    });


  });
  </script>

  <script type="text/javascript" charset="utf-8">
  $(document).ready(function() {
    // $("a[rel^='prettyPhoto']").prettyPhoto();
    $("div[rel^='prettyPhoto'] a").click(function() {
      return false;

    })
    $("div[rel^='prettyPhoto'] a").prettyPhoto();
  });

  $(document).on('click', '.carousel-button-left', function() {
    //$("a[rel^='prettyPhoto']").prettyPhoto();
    $("div[rel^='prettyPhoto'] a").prettyPhoto();
  });

  $(document).on('click', '.carousel-button-right', function() {
    //$("a[rel^='prettyPhoto']").prettyPhoto();
    $("div[rel^='prettyPhoto'] a").prettyPhoto();
  });
  </script>
  <script>
  $(document).ready(function() {
    // $("body").css("overflow", "hidden");

    var wblocks = $('.w_blocks').children();
    wblocks.addClass('hidden');

    var wblocks = $('.stroki').children();
    wblocks.addClass('hidden');
  })
  </script>
  <script>
  $(function() {
    //  $('#popup1').hide();
    //  $('#hide-layout').hide();
    alignCenter($('#popup1'));
    alignCenter($('#spasibo'));
    alignCenter($('#pozdr'));
    $(window).resize(function() {
      alignCenter($('#popup1'));
      alignCenter($('#spasibo'));
      alignCenter($('#pozdr'));
    })



    //$('#btn-close, #hide-layout').click(function() {
    $('#hide-layout').click(function() {

      $('#hide-layout, #popup1').fadeOut(300);

      $('.pop_name').val('Ваше имя');
      $('.pop_tel').val('Телефон');
    })


    $('#callback-spasibo, #hide-layout').click(function() {
      $('#hide-layout, #spasibo').fadeOut(300);
      //$('.pop_name').css('color','#cccccc');
      //$('.pop_tel').css('color','#cccccc');
      $('.pop_name').val('');
      $('.pop_tel').val('');
    })

    function alignCenter(elem) {
      elem.css({
        left: ($(window).width() - elem.width()) / 2 - 10 + 'px',
        top: 50 + 'px'
      })
    }
  })
  </script>
  <script>
  $(function() {
    $('#callback-send1').click(function() {

      var name = $('.pop_name').val();
      var tel = $('.pop_tel').val();
      var type = $('.pop_type').val();

      //Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: type }]);
      $.ajax({
        type: "POST",
        url: "forms.php",
        data: "name=" + name + "&tel=" + tel + '&f=' + type + "&subject=Вызвать замерщика",
        success: function(data) {
          if (data == 'ok') {

            //alert ('Заявка успешно отправлена');
            $('#popup1').fadeOut(300);
            $('.pop_name').val('');
            $('.pop_tel').val('');
            $('#spasibo').fadeIn(300);
            SendComagic(name, tel, type, '');
          } else {
            alert('Заявка успешно отправлена');
          };

        }
      });


    });






    $('#callback-pozdr').click(function() {

      $.cookie('was', true, {
        expires: 1,
        path: '/'
      });
      var name = $('.pozdr_name').val();
      var tel = $('.pozdr_tel').val();

      //Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'pozdr' }]);
      $.ajax({
        type: "POST",
        url: "forms.php",
        data: "name=" + name + "&tel=" + tel + '&f=pozdr&subject=Поздравляем 10% скидка',
        success: function(data) {
          if (data == 'ok') {

            //  alert ('Заявка успешно отправлена');
            $('.pozdr_name').val('');
            $('.pozdr_tel').val('');
            $('#pozdr').fadeOut(300);
            $('#spasibo').fadeIn(300);
            SendComagic(name, tel, 'pozdr', '');
          } else {
            alert('Заявка успешно отправлена');
          };

        }
      });


    });



    $('.pop_name').blur(function() {
      if ($('.pop_name').val() == '') {
        $('.pop_name').val('Ваше имя');

      }
    });
    $('.pop_tel').blur(function() {
      if ($('.pop_tel').val() == '') {
        $('.pop_tel').val('Телефон');

      }
    });



    $('.v_name').blur(function() {
      if ($('.v_name').val() == '') {
        $('.v_name').val('Ваше имя');

      }
    });
    $('.v_tel').blur(function() {
      if ($('.v_tel').val() == '') {
        $('.v_tel').val('Телефон');

      }
    });


  });
  </script>
  <script>
  $(function() {
    if (!$.cookie('was')) {

      $("#pozdr").delay(30000).fadeIn(400);
      $("#hide-layout").delay(30000).fadeIn(400);


      setTimeout(timer, 30000);


    }


  })


  function timer() {
    var obj = document.getElementById('sec');
    obj.innerHTML--;

    if (obj.innerHTML == 0) {
      $('.pozdr .f-close').click();
    } else {
      setTimeout(timer, 1000);
    }
  }

  $('.pozdr .f-close').click(function() {
    $("#pozdr").fadeOut(400);
    $("#hide-layout").fadeOut(400);
    $.cookie('was', true, {
      expires: 1,
      path: '/'
    });

  })

  $('.popup1 .f-close').click(function() {
    $("#popup1").fadeOut(400);
    $("#hide-layout").fadeOut(400);

  })
  </script>
