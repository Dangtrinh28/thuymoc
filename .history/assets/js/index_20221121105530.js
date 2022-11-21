(function ($) {
    "use strict";

    // wow js 
    new WOW().init();

    //counter-up
    $('[data-toggle="counter-up"]').counterUp({
        delay:10,
        time: 2000
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // testimonial-carousel
    $(".testimonial-carousel").owlCarousel(
        {
            autoplay:true,
            smartSpeed: 1500,
            center: true,
            margin:24,
            dots:true,
            loop:true,
            nav:false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    item: 3
                }
            }
        }
    );
        // 
        $(window).scroll(function() {
            if($(this).scrollTop()> 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        $('.back-to-top').click(function() {
            $('html, body').animate({scrollTop: 0},100, 'easeInOutExpo');
            return false;
        })

       
})(jQuery);

// var btn = document.getElementById('btn');
// btn.addEventListener('click',function(event){
//     event.preventDefault()
//     var name = document.getElementById('name').value;
//     var number = document.getElementById('number').value;
//     var Email = document.getElementById('Email').value;
//     var quality = document.getElementById('quality').value;
//     var time = document.getElementById('time').value;
//     var date = document.getElementById('date').value;
//     var message = document.getElementById('message').value;

//     var body = `Tên khách hàng: ${name} <br> Số điện thoại: ${number} <br> Tên gmail của quý khách; ${Email} <br> Số lượng khách hàng: ${quality} <br> 
//     Thời gian đặt bàn: ${time} <br> Ngày đặt bàn: ${date} <br> Yêu cầu của khách hàng: $P{message}`
// }    

// function sendEmail() {
//     Email.send({
//         secureToken: "06f3c4df-af7a-4956-9b7b-b84d23b0b14e",
//         // Host : "smtp.elasticemail.com",
//         Username : "nguyencaodangtrinhtv3@gmail.com",
//         // Password : "ctjtbdmbjeyisbhm",
//         Password : "52507B1483EAD82ADC9AF5AD8669F1F92B4",
//         To : 'dtrinhit04@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New contact from Enquiry",
//         // Body : `Tên khách hàng: ${name} <br> Số điện thoại: ${number} <br> Tên gmail của quý khách; ${Email} <br> Số lượng khách hàng: ${quality} <br> 
//         // Thời gian đặt bàn: ${time} <br> Ngày đặt bàn: ${date} <br> Yêu cầu của khách hàng: $P{message}`

//         Body : "this is a body"
//     }).then(
//       message => alert(message),
//     );
// }

function sendEmail() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var Email = document.getElementById('Email').value;
    var quality = document.getElementById('quality').value;
    var time = document.getElementById('time').value;
    var date = document.getElementById('date').value;
    var message = document.getElementById('message').value;



    Email.send({
        secureToken: "06f3c4df-af7a-4956-9b7b-b84d23b0b14e",
        To : 'nguyencaodangtrinhtv3@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
         Body : `Tên khách hàng: ${name} <br> Số điện thoại: ${number} <br> Tên gmail của quý khách; ${Email} <br> Số lượng khách hàng: ${quality} <br> 
 Thời gian đặt bàn: ${time} <br> Ngày đặt bàn: ${date} <br> Yêu cầu của khách hàng: $P{message}`
    }).then(
      message => alert(message)
    );
}

