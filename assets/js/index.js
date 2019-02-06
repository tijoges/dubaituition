$(document).ready(
    function () {
       
      
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });

        $('.sam-endmenu').click(
            function () {
                $('.main-hov-msgdrk').fadeIn();
            }
        );
        $("body").hover(function(){
            $(".dropdown-top").children(".dropdown-menu").fadeOut();
        })
        $('.sam-endmenusecond').click(
                function(){
                    $('.main-hov-msgdrk2').fadeIn();
                }
        );
        $('.main-hov-msgdrk2').click(function(e){
           if(e.target == this) {
               $('.main-hov-msgdrk2').fadeOut();
           }
        });
        $('#home-menu').submit(
            function (e) {
                e.preventDefault();
                $('.main-hov-msgdrk').fadeOut(500, function () {
                    $('.main-drk-loading').fadeIn(10);
                });
                $data = {
                    name: $('#hin_name').val(),
                    email: $('#hin_email').val(),
                    msg: $('#hin_quote').val(),
                    mobno: $('#hin_cono').val(),
                };
                $.ajax({
                    type: 'post',
                    url: 'php/sendEmail.php',
                    data: $data,
                    success: function (data) {
                        $('.main-drk-loading').fadeOut(10, function () {
                            $('.main-drk-loadingTwo').fadeIn(100);
                            if ($.trim(data) == "invalid") {
                                $('#messagehere').html('<div class="alert alert-warning alert-dismissable"> <strong>Warning! </strong> Incorrect field found. </div>');
                            } else if ($.trim(data) == "success") {
                                $('#messagehere').html('<div class="alert alert-success alert-dismissable"> <strong>Success!</strong> Your Message has been sent. </div>');
                            } else {
                                $('#messagehere').html('<div class="alert alert-danger alert-dismissable fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>    <strong>Danger!</strong> Some server error occurred!. </div>');
                            }
                            setTimeout(function () {
                                $('.main-drk-loadingTwo').fadeOut(100);
                            }, 3000);
                        });
                    }
                });
            }
        );
        $('#home-menu2').submit(
            function (e) {
                e.preventDefault();
                $('.main-hov-msgdrk2').fadeOut(500, function () {
                    $('.main-drk-loading').fadeIn(10);
                });
                $data = {
                    name: $('#thin_name').val(),
                    subject: $('#thin_subject').val(),
                    email: $('#thin_email').val(),
                    msg: $('#thin_quote').val(),
                    mobno: $('#thin_cono').val(),
                };
                $.ajax({
                    type: 'post',
                    url: 'php/sendEmailuto.php',
                    data: $data,
                    success: function (data) {
                        alert(data);
                        $('.main-drk-loading').fadeOut(10, function () {
                            $('.main-drk-loadingTwo').fadeIn(100);
                            if ($.trim(data) == "invalid") {
                                $('#messagehere').html('<div class="alert alert-warning alert-dismissable"> <strong>Warning! </strong> Incorrect field found. </div>');
                            } else if ($.trim(data) == "success") {
                                $('#messagehere').html('<div class="alert alert-success alert-dismissable"> <strong>Success!</strong> Your Message has been sent. </div>');
                            } else {
                                $('#messagehere').html('<div class="alert alert-danger alert-dismissable fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>    <strong>Danger!</strong> Some server error occurred!. </div>');
                            }
                            setTimeout(function () {
                                $('.main-drk-loadingTwo').fadeOut(100);
                            }, 3000);
                        });
                    }
                });
            }
        );
        var curid = 1;
        $('.main-hov-msgdrk').click(function (e) {
            if (e.target == this) {
                $('.main-hov-msgdrk').fadeOut();
            }

        });

        function animatesldier() {
            var next = $('.slidememain[data-this=' + curid + ']').attr('data-next');
            $('.slidememain[data-this=' + curid + ']').fadeOut(500, function () {
                $('.slidememain[data-this=' + next + ']').fadeIn(500, function () {
                    curid = next;
                    window.setTimeout(function () {
                        animatesldier();
                    }, 17500)
                });
            });
        }
        window.setTimeout(function () {
            animatesldier();
        }, 17500)
        var sliderinnner = 1;

        function animatetlst() {
            var next = $('.slidanim[data-this=' + sliderinnner + ']').attr('data-next');
            $('.slidanim[data-this=' + sliderinnner + ']').removeClass('slidnavlst-ani');
            $('.slidanim[data-this=' + next + ']').addClass('slidnavlst-ani');
            sliderinnner = next;
            window.setTimeout(function () {
                animatetlst();
            }, 3500)
        }
        window.setTimeout(function () {
            animatetlst();
        }, 3500)
        $('.btnsendquery').click(function () {
            $dtid = $(this).attr('data-id');
            $('#popup_title').html($('.IP-MainCbox[data-id=' + $dtid + ']').find('.maincontent-title').html());
            $('#popup_idno').html($('.IP-MainCbox[data-id=' + $dtid + ']').find('.sqidno').html());
            $('.model-main-box').fadeIn();
        });
        $('#btn_sendquo').click(function () {
            $('.model-main-box').fadeOut(10, function () {
                $('.main-drk-loading').fadeIn(10);
            });
            $G_Capt = $("[name='g-recaptcha-response']").val();
            $data = {
                id: $('#popup_idno').html(),
                title: $('#popup_title').html(),
                name: $('#full_name').val(),
                contactno: $('#contact_no').val(),
                email: $('#Email_address').val(),
                msg: $('#Text_messg').val(),
                g_response: $G_Capt
            };
            $.ajax({
                type: 'post',
                url: 'php/sendEmailFM.php',
                data: $data,
                success: function (data) {
                    $('.main-drk-loading').fadeOut(10, function () {
                        $showmain = false;
                        $('.main-drk-loadingTwo').fadeIn(100);
                        if ($.trim(data) == "invalid") {
                            $('#messagehere').html('<div class="alert alert-warning alert-dismissable"> <strong>Warning! </strong> Incorrect field found. </div>');
                            $showmain = true;
                        } else if ($.trim(data) == "success") {
                            $('#messagehere').html('<div class="alert alert-success alert-dismissable"> <strong>Success!</strong> Your Message has been sent. </div>');
                        } else {
                            $('#messagehere').html('<div class="alert alert-danger alert-dismissable fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>    <strong>Danger!</strong> Some server error occurred!. </div>');
                            $showmain = true;
                        }
                        setTimeout(function () {
                            $('.main-drk-loadingTwo').fadeOut(500);
                            if ($showmain) {
                                $('.model-main-box').fadeIn(100);
                            }
                        }, 2500);
                    });
                }
            });

        });
        $('.model-main-box').click(function (e) {
            if (e.target == this) {
                $('.model-main-box').fadeOut();
            }
        });
        $('#contact-submit').click(function () {
            $('#contact-submit').prop('disabled', true);
            $('#main-reply').html('<div class="alert alert-info alert-dismissable fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>    <strong>Sending!</strong> Your message is sending please wait (This may take upto one min.) <div uk-spinner></div></div>');
            $G_Capt = $("[name='g-recaptcha-response']").val();
            $data = {
                name: $('#in_name').val(),
                email: $('#in_email').val(),
                msg: $('#in_message').val(),
                mobno: $('#in_mobile').val(),
                g_response: $G_Capt
            };
            $.ajax({
                type: 'post',
                url: 'php/sendEmail.php',
                data: $data,
                success: function (data) {
                    $('#contact-submit').prop('disabled', false);
                    if ($.trim(data) == "invalid") {
                        $('#main-reply').html(' <div class="alert alert-warning alert-dismissable fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>    <strong>Error!</strong>  You have submitted invalid Entry or Empty Fields. </div>');
                    } else if ($.trim(data) == "success") {
                        $('#main-reply').html('<div class="alert alert-success alert-dismissable fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>    <strong>Success!</strong> Your Message has been sent. </div>');
                    } else {
                        $('#main-reply').html('<div class="alert alert-danger alert-dismissable fade in"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>    <strong>Danger!</strong> Some server error occurred!. </div>');
                    }
                }
            });
        });
         $postapost = ($('.sideaddposting-menu-second').width() - $('.sam-endmenusecond').height()) - 50;
        $('.sideaddposting-menu-second').css('left', '-' + $postapost + "px");
        $('.sideaddposting-menu-second').fadeIn();
        
        $(".button-collapse").sideNav(); // this code for change menu when accessing from mobile
        $postapos = ($('.sideaddposting-menu').width() - $('.sam-endmenu').height()) - 50;
        $('.sideaddposting-menu').css('left', '-' + $postapos + "px");
        $('.sideaddposting-menu').fadeIn();
        var sliderornot = true;
        $('.sam-endmenu').click(
            function () {
                var options = {};
                options['left'] = parseInt($('.sideaddposting-menu').css('left')) + 15;
                $('.sideaddposting-menu').animate(options, 200, function () {
                    var options = {};
                    options['left'] = parseInt($('.sideaddposting-menu').css('left')) - 15;
                    $('.sideaddposting-menu').animate(options, 100);
                });
                /*
                 if (sliderornot) {
                 var ponr = (25 / 100) * $('.sideaddposting-menu').width() * -1;
                 var options = {};
                 //options['left'] = ponr-1;
                 options['left'] =  ;
                 $('.sideaddposting-menu').animate(options, 2000);
                 sliderornot = false;
                 } else {
                 var options = {};
                 //options['left'] = $postapos*-1;                            
                 options['left'] = -50;
                 $('.sideaddposting-menu').animate(options, 2000);
                 sliderornot = true;
                 }
                 */
            }
        );
        $('.sam-endmenusecond').click(
            function () {
                var options = {};
                options['left'] = parseInt($('.sideaddposting-menu-second').css('left')) + 15;
                $('.sideaddposting-menu-second').animate(options, 200, function () {
                    var options = {};
                    options['left'] = parseInt($('.sideaddposting-menu-second').css('left')) - 15;
                    $('.sideaddposting-menu-second').animate(options, 100);
                });
                /*
                 if (sliderornot) {
                 var ponr = (25 / 100) * $('.sideaddposting-menu').width() * -1;
                 var options = {};
                 //options['left'] = ponr-1;
                 options['left'] =  ;
                 $('.sideaddposting-menu').animate(options, 2000);
                 sliderornot = false;
                 } else {
                 var options = {};
                 //options['left'] = $postapos*-1;                            
                 options['left'] = -50;
                 $('.sideaddposting-menu').animate(options, 2000);
                 sliderornot = true;
                 }
                 */
            }
        );
    }
);

var canvasDots = function () {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        colorDot = '#427ace',
        color = '#427ace';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.fillStyle = colorDot;
    ctx.lineWidth = .1;
    ctx.strokeStyle = color;

    var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
    };

    var dots = {
        nb: 500,
        distance: 60,
        d_radius: 50,
        array: []
    };

    function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random();
    }

    Dot.prototype = {
        create: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function () {
            for (i = 0; i < dots.nb; i++) {

                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function () {
            for (i = 0; i < dots.nb; i++) {
                for (j = 0; j < dots.nb; j++) {
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                        if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
            dot = dots.array[i];

            dot.create();
        }

        dot.line();
        dot.animate();
    }

    window.onmousemove = function (parameter) {
        mousePosition.x = parameter.pageX;
        mousePosition.y = parameter.pageY;
    }

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    setInterval(createDots, 1000 / 30);
};

window.onload = function () {
    canvasDots();
};
/*spider code bottom */

/*new SpiderController({
    'minBugs': 0,
    'maxBugs': 0,
    'mouseOver': 'die',
    'minDelay': '10'
});*/

/*spider code above */
