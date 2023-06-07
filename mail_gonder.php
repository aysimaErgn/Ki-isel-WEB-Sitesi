<?php
if (isset($_POST['submit'])) {
    $to = 'aysimaenine@gmail.com';
    $subject = 'E-posta Konusu';
    $message = 'Bu bir test e-postasıdır.';
    $headers = 'From: gonderen@example.com' . "\r\n" .
        'Reply-To: gonderen@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'E-posta başarıyla gönderildi.';
    } else {
        echo 'E-posta gönderilirken bir hata oluştu.';
    }
}
?>