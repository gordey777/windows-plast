<?
  if( (isset($_POST['name']) && $_POST['name']!="") && (isset($_POST['tel']) && $_POST['tel']!="")){
    $to = 'ilyashut@gmail.com';
    $subject = 'Обратный звонок';
    $message = '
      <html>
      <head>
        <title>'.$subject.'</title>
      </head>
      <body>
        <p>Имя: '.$_POST['name'].'</p>
        <p>Телефон: '.$_POST['tel'].'</p>
        <p>Текст: '.$_POST['txt'].'</p>
        <p>Тип: '.$_POST['type'].'</p>
      </body>
      </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
    echo 'ok';
  }
?>
