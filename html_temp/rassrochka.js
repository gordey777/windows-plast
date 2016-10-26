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
$(".v_tell").inputmask("+7 (999) 999-99-99");
$('#callback-send22').click(function() {
  var name = '-';
  var tel = $('.v_tell').val();
  //Comagic.push(['addOfflineRequest', {name: '',  phone: tel, message: 'callback_ByoOtschet' }]);
  $.ajax({
    type: "POST",
    url: "forms.php",
    data: "name=" + name + "&tel=" + tel + '&f=callback22&subject=Успей купить до подорожания!',
    success: function(data) {
      if (data == 'ok') {
        //  alert ('Заявка успешно отправлена');
        $('.v_tell').val('');
        $('#hide-layout').fadeIn(300);
        $('#spasibo').fadeIn(300);
        SendComagic('', tel, 'callback_ByoOtschet', '');
      } else {
        alert('Заявка успешно отправлена');
      };
    }
  });
});
$(function() {
  var note = $('#note'),
    ts = new Date(2015, 9, 5),
    newYear = true;
  if ((new Date()) > ts) {
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
    newYear = false;
  }
  $('#countdown1').countdown({
    timestamp: ts,
    callback: function(days, hours, minutes, seconds) {
      var message = "";
      //  message += days + " day" + ( days==1 ? '':'s' ) + ", ";
      message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
      message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
      message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";
      if (newYear) {
        message += "left until the new year!";
      } else {
        message += "left to 10 days from now!";
      }
      note.html(message);
    }
  });
});

function grafic() {
  var c1 = 2340;
  var c2 = 2190;
  var c3 = 2500;
  var c4 = 2840;
  var c5 = 3070;
  var c6 = 3220;
  var count = 0;
  var intervalID1 = setInterval(
    function() {
      if (count < c1) {
        count = count + 5;
        $(".col1 .internal .numbers").html(count);
      } else {
        $(".col1 .internal .numbers").html(c1);
        clearInterval(intervalID1);
      }
    }, 1 // интервал в мс.
  );
  $(".col1 .internal").animate({
    bottom: "0px"
  }, 1000, function() {
    var count = 0;
    var intervalID2 = setInterval(
      function() {
        if (count < c2) {
          count = count + 5;
          $(".col2 .internal .numbers_y").html(count);
        } else {
          $(".col2 .internal .numbers_y").html(c2);
          clearInterval(intervalID2);
        }
      }, 1 // интервал в мс.
    );
    $(".col2 .internal").animate({
      bottom: "0px"
    }, 1000, function() {
      $('.s_grafic').fadeIn(300);
      var count = 0;
      var intervalID3 = setInterval(
        function() {
          if (count < c3) {
            count = count + 5;
            $(".col3 .internal .numbers").html(count);
          } else {
            $(".col3 .internal .numbers").html(c3);
            clearInterval(intervalID3);
          }
        }, 1 // интервал в мс.
      );
      $(".col3 .internal").animate({
        bottom: "0px"
      }, 1000, function() {
        var count = 0;
        var intervalID4 = setInterval(
          function() {
            if (count < c4) {
              count = count + 5;
              $(".col4 .internal .numbers").html(count);
            } else {
              $(".col4 .internal .numbers").html(c4);
              clearInterval(intervalID4);
            }
          }, 1 // интервал в мс.
        );
        $(".col4 .internal").animate({
          bottom: "0px"
        }, 1000, function() {
          var count = 0;
          var intervalID5 = setInterval(
            function() {
              if (count < c5) {
                count = count + 5;
                $(".col5 .internal .numbers").html(count);
              } else {
                $(".col5 .internal .numbers").html(c5);
                clearInterval(intervalID5);
              }
            }, 1 // интервал в мс.
          );
          $(".col5 .internal").animate({
            bottom: "0px"
          }, 1000, function() {
            var count = 0;
            var intervalID6 = setInterval(
              function() {
                if (count < c6) {
                  count = count + 5;
                  $(".col6 .internal .numbers").html(count);
                } else {
                  $(".col6 .internal .numbers").html(c6);
                  clearInterval(intervalID6);
                }
              }, 1 // интервал в мс.
            );
            $(".col6 .internal").animate({
              bottom: "0px"
            }, 1000);
          })
        })
      })
    })
  });
}
var ii = 1;
$(window).scroll(function() {
  var blocks = $('.grafic');
  var windowSize = $(window).height();
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = (viewportTop + windowSize);
  var offset = 100;
  var elemTop = Math.round(blocks.offset().top) - offset;
  var elemBottom = elemTop + (blocks.height());
  if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
    if (ii == 1) {
      grafic();
    }
    ii = 0;
  };
});
$(".v_tel").inputmask("+7 (999) 999-99-99");
$('#callback-send2').click(function() {
  var name = $('.v_name').val();
  var tel = $('.v_tel').val();
  $.ajax({
    type: "POST",
    url: "forms.php",
    data: "name=" + name + "&tel=" + tel + '&f=rassrochka&subject=Оформите рассрочку уже сегодня!',
    success: function(data) {
      if (data == 'ok') {
        //  alert ('Заявка успешно отправлена');
        $('.s_name').val('');
        $('.s_tel').val('');
        $('#hide-layout').fadeIn(300);
        $('#spasibo').fadeIn(300);
      } else {
        alert('Заявка успешно отправлена');
      };
    }
  });
});
$(document).ready(function() {
  $('#otz_carousel').boutique({
    container_width: 800,
    front_img_width: 164,
    hovergrowth: 0,
    autoplay: true,
    autoplay_interval: 5000,
    stop_autoplay_on_click: true,
    behind_topmargin: 80,
    behind_opacity: 1,
    behind_size: 0.7,
    back_opacity: 1,
    back_size: 0.7,
    back_topmargin: 120,
  });
  $('#otz_carousel .frame3 img').attr('src', 'img/' + ($('#otz_carousel .frame3 img').attr('id') + '.png'));
  $('#otz_carousel .frame3 .otz_prof').removeClass('hide');
  $('#otz_carousel .frame3 .otz_name').css('color', '#000');
  $('.otz .otz1').removeClass('hide');
});

function pre_move_callback(anchor, instance, framenumber) {
  //  alert('Callback example: Frame '+framenumber+', with the link "'+anchor+'", moved forward (in Boutique with an ID of "'+instance+'").');
  var len = $("#otz_carousel > li").length / 2;
  for (var i = 1; i <= len; i++) {
    $('#otz_carousel .frame' + i + ' img').attr('src', 'img/' + ($('#otz_carousel .frame' + i + ' img').attr('id') + '_b.png'));
    $('#otz_carousel .frame' + i + ' .otz_prof').addClass('hide');
    $('#otz_carousel .frame' + i + ' .otz_name').css('color', '#999');
    $('.otz .otz' + i + '').addClass('hide');
  }
}

function move_callback(anchor, instance, framenumber) {
  $('#otz_carousel .frame3 img').attr('src', 'img/' + ($('#otz_carousel .frame3 img').attr('id') + '.png'));
  $('#otz_carousel .frame3 .otz_prof').removeClass('hide');
  $('.otz .' + $('#otz_carousel .frame3 img').attr('id') + '').removeClass('hide');
  $('#otz_carousel .frame3 .otz_name').css('color', '#000');
}
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
