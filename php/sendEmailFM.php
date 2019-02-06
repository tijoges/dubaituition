<?php
    
    if(($_POST['name']!="" &&  strlen($_POST['name']) < 20) && ($_POST['email']!="" &&  strlen($_POST['email']) < 30) && (strlen($_POST['msg']) < 200) ){       
        
        
        
        require 'PHPMailer-master/PHPMailerAutoload.php';
        $mail = new PHPMailer;

        //$mail->SMTPDebug = 3;                               // Enable verbose debug output                               
        
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'mail.dubai-tuitions.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'info@dubai-tuitions.com';                 // SMTP username
        $mail->Password = '#D_yJPkS,^4+';                           // SMTP password
        $mail->SMTPSecure = '';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 25;                                    // TCP port to connect to        
        
        $mail->setFrom('info@dubai-tuitions.com', 'Dubai Tuitions Email');
        $mail->addAddress('dubaituitions.info@gmail.com', 'Dubai Tuitions Admin');     // Add a recipient                        
        
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        /*
        $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name        
        */
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'New Quote From Dubai tuitions';
            $mail->Body    = '<h5 style="font-size:20px;letter-spacing:2px;"><b>Hi, We have received a quote from Dubai Tuitions </b></h5><br><pre style="font-size:16px;letter-spacing:2.1px;line-height:30px;">ID: '.$_POST['id'].'<br/>Title: '.$_POST['title'].'<br/>Name: '.$_POST['name'].'<br>Email Address: '.$_POST['email'].'<br>Contact No: '.$_POST['contactno'].'<br/>Message: <b>'.$_POST['msg'].'</b></pre><br><br>';
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            if(!$mail->send()) {
                echo 'Message could not be sent.';
                //echo 'Mailer Error: ' . $mail->ErrorInfo;
            } else {
                echo 'success';
            }
        }else{
                echo 'invalid';
        }
    

?>
