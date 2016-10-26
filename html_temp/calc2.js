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
$(".calc_menu li").click(function() {
  $(".calc_menu li").removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  $(".calc_balkon .calc_main").css('background', 'url("img/' + id + 'p.jpg") no-repeat center top');
});
$(".c_width").keyup(function() {
  if ($(".c_width").val() > 700) {
    $(".c_width").val(700)
  }
  //if ($(".c_width").val()<150 || 'NanN'){$(".c_width").val(150)}
  $(".c_width").val(Math.floor($(".c_width").val()));
  if ($(".c_width").val() >= 80) {
    balkonCalc();
  } else {
    $(".itogi .itogo").html('0.-')
    $(".itogi .i_montaz span").html('0 руб.');
    $(".itogi .i_otd span").html('0 руб.');
    $(".itogi .i_rassr span").html('0');
  }
});
$(".c_height").keyup(function() {
  if ($(".c_height").val() > 200) {
    $(".c_height").val(200)
  }
  //if ($(".c_height").val()<120 || 'NaN'){$(".c_height").val(120)}
  $(".c_height").val(Math.floor($(".c_height").val()));
  if ($(".c_width").val() >= 80) {
    balkonCalc();
  } else {
    $(".itogi .itogo").html('0.-')
    $(".itogi .i_montaz span").html('0 руб.');
    $(".itogi .i_otd span").html('0 руб.');
    $(".itogi .i_rassr span").html('0');
  }
})

function balkonCalc() {
  var m2 = 3305;
  var c_width = $('.c_width').val();
  var c_height = $('.c_height').val();
  var itogo = c_width * c_height * m2 / 10000;
  $(".itogi .itogo").html(Math.floor(itogo) + '.-');
  $(".itogi .i_montaz span").html(Math.floor(itogo * 0.2) + ' руб.');
  $(".itogi .i_otd span").html(Math.floor(itogo * 0.3) + ' руб.');
  $(".itogi .i_rassr span").html(Math.floor(itogo / 12));
}
$(function() {
  balkonCalc();
})
$(".v_tel").inputmask("+7 (999) 999-99-99");
$('#callback-send2').click(function() {
  var name = $('.v_name').val();
  var tel = $('.v_tel').val();
  //Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'callback2' }]);
  $.ajax({
    type: "POST",
    url: "forms.php",
    data: "name=" + name + "&tel=" + tel + '&f=callback2&subject=Успей купить по ценам 2014 года!',
    success: function(data) {
      if (data == 'ok') {
        //  alert ('Заявка успешно отправлена');
        $('.s_name').val('');
        $('.s_tel').val('');
        $('#hide-layout').fadeIn(300);
        $('#spasibo').fadeIn(300);
        SendComagic(name, tel, 'callback2014', '');
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
  $('#countdown').countdown({
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
$(window).scroll(function() {
  var blocks = $('.w_blocks').children();
  var windowSize = $(window).height();
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = (viewportTop + windowSize);
  var offset = 100;
  var elemTop = Math.round(blocks.offset().top) - offset;
  var elemBottom = elemTop + (blocks.height());
  if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
    var i = 0;
    animateCircle1(blocks);
  };

  function animateCircle1() {
    $(blocks[i]).addClass('visible animated fadeIn');
    $(blocks[i]).removeClass('hidden');
    i++;
    if (i <= blocks.length) {
      startAnimation();
    }
  }

  function startAnimation() {
    setTimeout(function() {
      animateCircle1();
    }, 450);
  }
});
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
        SendComagic(name, tel, 'callback2', '');
      } else {
        alert('Заявка успешно отправлена');
      };
    }
  });
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
