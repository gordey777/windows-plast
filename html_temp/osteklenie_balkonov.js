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
$(function() {
  $(".bl_sw").slider({
    min: 0, //hot
    max: 1, //cold
    animate: "slow",
    change: function(event, ui) {
      //alert ($(this).slider( "option", "value" ));
      if ($(this).slider("option", "value") == '0') {
        $(".features_cold").addClass('hide');
        $(".features_hot").removeClass('hide');
        $(".bl_cold").removeClass('active_');
        $(".bl_cold").addClass('inactive_');
        $(".bl_hot").removeClass('inactive_');
        $(".bl_hot").addClass('active_');
        $(".bal_bg").removeClass('cold_bg');
      } else {
        $(".features_cold").removeClass('hide');
        $(".features_hot").addClass('hide');
        $(".bl_hot").removeClass('active_');
        $(".bl_hot").addClass('inactive_');
        $(".bl_cold").removeClass('inactive_');
        $(".bl_cold").addClass('active_');
        $(".bal_bg").addClass('cold_bg');
      }
    }
  });
  $(".bl_cold").click(function() {
    $(".bl_sw").slider("value", 1);
  })
  $(".bl_hot").click(function() {
    $(".bl_sw").slider("value", 0);
  })
});
$('.combo .combo_option .select').click(function() {
  $('.combo .combo_option').removeClass('active');
  $(this).parent().addClass('active');
  var id = $(this).attr('id');
  //alert(id);
  var n = 'gofra_';
  if (id == 'select1') {
    n = 'gofra_';
  } else {
    n = 'sid_';
  }
  var e = $('.variants_gal .active').attr('id');
  $('.bal_left .bal_shell').css('background', 'url("img/bal_config/' + n + e + '.png") no-repeat left top');
})
$('.variants_gal div').click(function() {
  $('.variants_gal div').removeClass('active');
  $(this).addClass('active');
  var id = $('.combo .combo_option.active .select').attr('id');
  //`alert (id);
  var n = 'gofra_';
  if (id == 'select1') {
    n = 'gofra_';
  } else {
    n = 'sid_';
  }
  var e = $('.variants_gal .active').attr('id');
  $('.bal_left .bal_shell').css('background', 'url("img/bal_config/' + n + e + '.png") no-repeat left top');
})
$(".hot_").click(function() {
  $(".sw_block .bl_hot").click();
})
$(".cold_").click(function() {
  $(".sw_block .bl_cold").click();
})
$(".v_tel").inputmask("+7 (999) 999-99-99");
$('#callback-send2').click(function() {
  var name = $('.v_name').val();
  var tel = $('.v_tel').val();
  //Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'callback2' }]);
  $.ajax({
    type: "POST",
    url: "forms.php",
    data: "name=" + name + "&tel=" + tel + '&f=callback2&subject=РАССЧИТАЕМ ВАШ ЗАКАЗ ЗА 5 МИНУТ!',
    success: function(data) {
      if (data == 'ok') {
        //  alert ('Заявка успешно отправлена');
        $('.s_name').val('');
        $('.s_tel').val('');
        $('#hide-layout').fadeIn(300);
        $('#spasibo').fadeIn(300);
        SendComagic(name, tel, 'callback2', '');
      } else {
        alert('Заявка успешно отправлена');
      };
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
$(document).ready(function() {
  // $("body").css("overflow", "hidden");
  var wblocks = $('.w_blocks').children();
  wblocks.addClass('hidden');
  var wblocks = $('.stroki').children();
  wblocks.addClass('hidden');
})
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
