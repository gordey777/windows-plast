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
      } else {
        alert('Заявка успешно отправлена');
      };
    }
  });
});





var current_id = "o1_1";
$(function() {
  $("#slider-vertical").slider({
    orientation: "vertical",
    range: "min",
    min: 80,
    max: 220,
    step: 10,
    value: 120,
    slide: function(event, ui) {
      $(".c_height").val(ui.value);
      $(".z_h").html(ui.value + ' см');
      var a = $('#slider-vertical span').css('bottom');
      $(".z_h").css('bottom', a);
      oknaCalc();
    }
  });
  $(".c_height").val($("#slider-vertical").slider("value"));
  $(".z_h").html($("#slider-vertical").slider("value") + ' см');
});
$(function() {
  $("#slider-horizontal").slider({
    range: "min",
    min: 80,
    max: 300,
    step: 10,
    value: 120,
    slide: function(event, ui) {
      $(".c_width").val(ui.value);
      $(".z_w").html(ui.value + ' см');
      var a = $('#slider-horizontal span').css('left');
      $(".z_w").css('left', a);
      oknaCalc();
    }
  });
  $(".c_width").val($("#slider-horizontal").slider("value"));
  $(".z_w").html($("#slider-horizontal").slider("value") + ' см');
});
$(".calc_menu li").click(function() {
  $(".calc_menu li").removeClass('active');
  var id = $(this).attr('id');
  $(".calc_sub").removeClass('hide');
  $(".calc_sub").addClass('hide');
  $(".calc_sub." + id).removeClass('hide');
});
$(".calc .calc_sub div").click(function() {
  var id = $(this).attr('class');
  //alert (id);
  current_id = $(this).attr('id');
  $(".calc .calc_sub").removeClass('hide');
  $(".calc .calc_sub").addClass('hide');
  $('#' + id).html('<img src="img/' + current_id + '.png">');
  $('.calc_main').css('background', 'url("img/' + current_id + '.jpg") no-repeat scroll center top rgba(0, 0, 0, 0)');
  $('#' + id).addClass('active');
  oknaCalc();
});
$(".c_width").keyup(function() {
  if ($(".c_width").val() > 300) {
    $(".c_width").val(300)
  }
  $(".c_width").val(Math.floor($(".c_width").val()));
  $("#slider-horizontal").slider({
    value: $(".c_width").val()
  });
  $(".z_w").html($(".c_width").val() + ' см');
  var a = $('#slider-horizontal span').css('left');
  $(".z_w").css('left', a);
  if ($(".c_width").val() >= 80) {
    oknaCalc();
  } else {
    $(".itogi .itogo").html('0.-')
    $(".itogi .i_montaz span").html('0 руб.');
    $(".itogi .i_otd span").html('0 руб.');
    $(".itogi .i_rassr span").html('0');
  }
});
$(".c_height").keyup(function() {
  if ($(".c_height").val() > 220) {
    $(".c_height").val(220)
  }
  $(".c_height").val(Math.floor($(".c_height").val()));
  $("#slider-vertical").slider({
    value: $(".c_height").val()
  });
  $(".z_h").html($(".c_height").val() + ' см');
  var a = $('#slider-vertical span').css('bottom');
  $(".z_h").css('bottom', a);
  if ($(".c_height").val() >= 80) {
    oknaCalc();
  } else {
    $(".itogi .itogo").html('0.-')
    $(".itogi .i_montaz span").html('0 руб.');
    $(".itogi .i_otd span").html('0 руб.');
    $(".itogi .i_rassr span").html('0');
  }
})

function oknaCalc() {
  var gluh = 2798;
  var povorot = 4845;
  var full = 5128;
  //  current_id
  var c_width = $('.c_width').val();
  var c_height = $('.c_height').val();
  if (current_id == "o1_1") {
    var itog = c_width * c_height / 10000 * gluh;
  }
  if (current_id == "o1_2") {
    var itog = c_width * c_height / 10000 * povorot;
  }
  if (current_id == "o1_3") {
    var itog = c_width * c_height / 10000 * full;
  }
  if (current_id == "o2_1") {
    var itog = (c_width / 2) * c_height / 10000 * gluh + (c_width / 2) * c_height / 10000 * povorot;
  }
  if (current_id == "o2_2") {
    var itog = (c_width / 2) * c_height / 10000 * gluh + (c_width / 2) * c_height / 10000 * full;
  }
  if (current_id == "o2_3") {
    var itog = (c_width / 2) * c_height / 10000 * povorot + (c_width / 2) * c_height / 10000 * povorot;
  }
  if (current_id == "o2_4") {
    var itog = (c_width / 2) * c_height / 10000 * povorot + (c_width / 2) * c_height / 10000 * full;
  }
  if (current_id == "o3_1") {
    var itog = (c_width / 3) * c_height / 10000 * gluh + (c_width / 3) * c_height / 10000 * povorot + (c_width / 3) * c_height / 10000 * gluh;
  }
  if (current_id == "o3_2") {
    var itog = (c_width / 3) * c_height / 10000 * povorot + (c_width / 3) * c_height / 10000 * gluh + (c_width / 3) * c_height / 10000 * povorot;
  }
  if (current_id == "o3_3") {
    var itog = (c_width / 3) * c_height / 10000 * povorot + (c_width / 3) * c_height / 10000 * gluh + (c_width / 3) * c_height / 10000 * full;
  }
  if (current_id == "o4_1") {
    var itog = c_width * c_height / 10000 * gluh;
  }
  if (current_id == "o4_2") {
    var itog = (c_width / 2) * c_height / 10000 * gluh + (c_width / 2) * c_height / 10000 * gluh;
  }
  var itogo = Math.floor(itog);
  $(".itogi .itogo").html(Math.floor(itogo) + '.-');
  $(".itogi .i_montaz span").html(Math.floor(itogo * 0.2) + ' руб.');
  $(".itogi .i_otd span").html(Math.floor(itogo * 0.3) + ' руб.');
  $(".itogi .i_rassr span").html(Math.floor(itogo / 12));
}
$(function() {
  oknaCalc();
})






function init() {
  myMap = new ymaps.Map("map", {
    center: [51.640954, 39.235932],
    zoom: 16,
    controls: ['zoomControl'],
  });
  myPlacemark = new ymaps.Placemark([51.640954, 39.235932], {
    hintContent: 'Доступные Окна',
    balloonContent: 'Доступные Окна'
  }, {
    iconLayout: 'default#image',
    //iconImageHref: 'путь к картинке',
    // Размеры метки.
    // iconImageSize: [149, 117],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    // iconImageOffset: [-70, -117]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
}



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



var roof = 'roof2';
var okno = 'okno2';
var shell = 'shell1';
var struct = 'struct1';
var otdelka = 'otdelka1';
var skaf = 'skaf1';
var floor = 'floor10';
var price = new Object();
//крыша
price['roof1'] = 0;
price['roof2'] = 2500;
price['roof3'] = 2500;
//остекление
price['okno1'] = 2190;
price['okno2'] = 1850;
//обшивка
price['shell1'] = 0;
price['shell2'] = 600;
price['shell3'] = 800;
//кладка
price['struct1'] = 0;
price['struct2'] = 600;
//пвх вагонка
price['otdelka1'] = 600;
price['otdelka2'] = 600;
price['otdelka3'] = 600;
price['otdelka4'] = 600;
price['otdelka5'] = 600;
//пвх вагонка широкая
price['otdelka6'] = 800;
price['otdelka7'] = 800;
price['otdelka8'] = 800;
price['otdelka9'] = 800;
price['otdelka10'] = 800;
// вагонка
price['otdelka11'] = 400;
//Шкаф
price['skaf1'] = 2400;
price['skaf2'] = 2400;
price['skaf3'] = 2400;
price['skaf4'] = 1700;
//пол линолеум
price['floor1'] = 400;
price['floor2'] = 400;
price['floor3'] = 400;
price['floor4'] = 400;
price['floor5'] = 400;
//пол ламинат
price['floor6'] = 650;
price['floor7'] = 650;
price['floor8'] = 650;
price['floor9'] = 650;
//пол доска
price['floor10'] = 250;
var k = 3; //коэффициент
function l_calc() {
  var itog = (price[roof] + price[okno] + price[shell] + price[struct] + price[otdelka] + price[skaf] + price[floor]) * k;
  $('.l_price .price').html(itog);
  $('.l_price .rassr span').html(Math.floor(itog / 12));
}
l_calc();
$('.l_roof .vars div').click(function() {
  $('.l_roof div').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  roof = id;
  if (okno == 'okno2') {
    $('.l_center .maket_roof').css('background', 'url("img/' + id + '_m.png") no-repeat');
  } else {
    $('.l_center .maket_roof').css('background', 'url("img/' + id + '_mh.png") no-repeat');
  }
  l_calc();
})
$('.l_okno .vars div').click(function() {
  $('.l_okno div').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  okno = id;
  $('.l_center .maket_okno').css('background', 'url("img/' + id + '_m.png") no-repeat');
  if (okno == 'okno2') {
    $('.l_center .maket_roof').css('background', 'url("img/' + roof + '_m.png") no-repeat');
  } else {
    $('.l_center .maket_roof').css('background', 'url("img/' + roof + '_mh.png") no-repeat');
  }
  l_calc();
})
$('.l_shell .vars div').click(function() {
  $('.l_shell div').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  shell = id;
  $('.l_center .maket_shell').css('background', 'url("img/' + id + '_m.png") no-repeat');
  l_calc();
})
$('.l_struct .vars div').click(function() {
  $('.l_struct div').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  struct = id;
  $('.l_center .maket_struct').css('background', 'url("img/' + id + '_m.png") no-repeat');
  l_calc();
})
$('.l_otdelka .swich span').click(function() {
  $('.l_otdelka .swich span').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  $('.l_otdelka .vars div').removeClass('hide');
  $('.l_otdelka .vars div').addClass('hide');
  $('.l_otdelka .vars div.' + id).removeClass('hide');
  $('.l_otdelka .vars div.' + id + ' div').removeClass('hide');
})
$('.l_otdelka .vars div').click(function() {
  $('.l_otdelka div').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  otdelka = id;
  $('.l_center .maket_otdelka').css('background', 'url("img/' + id + '_m.png") no-repeat');
  l_calc();
})
$('.l_skaf .vars div').click(function() {
  $('.l_skaf div').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  otdelka = id;
  $('.l_center .maket_skaf').css('background', 'url("img/' + id + '_m.png") no-repeat');
  l_calc();
})
$('.l_floor .swich span').click(function() {
  $('.l_floor .swich span').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  $('.l_floor .vars div').removeClass('hide');
  $('.l_floor .vars div').addClass('hide');
  $('.l_floor .vars div.' + id).removeClass('hide');
  $('.l_floor .vars div.' + id + ' div').removeClass('hide');
})
$('.l_floor .vars div').click(function() {
  $('.l_floor div').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('id');
  otdelka = id;
  $('.l_center .maket_floor').css('background', 'url("img/' + id + '_m.png") no-repeat');
  l_calc();
})


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


$.lockfixed("#callback3otz", {
  offset: {
    top: 10,
    bottom: 1100
  }
});


$('#callback-send_otz').click(function() {
  var name = $('#callback3otz .v_name').val();
  var tel = $('#callback3otz .v_tel').val();
  var txt = $('#callback3otz .v_text').val();
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
      } else {
        alert('Заявка успешно отправлена');
      };
    }
  });
});
$(".v_tel3").inputmask("+7 (999) 999-99-99");
$('#callback-send3').click(function() {
  var name3 = $('.v_name3').val();
  var tel3 = $('.v_tel3').val();
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
      } else {
        alert('Заявка успешно отправлена');
      };
    }
  });
});
