(function ($) {
  "use strict";

  // wow js
  new WOW().init();

  //counter-up
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    // console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // testimonial-carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        item: 3,
      },
    },
  });
  //
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100, "easeInOutExpo");
    return false;
  });
})(jQuery);

// function sendEmail() {
  // var name = document.getElementById("name").value;
  // var number = document.getElementById("number").value;
  // var email = document.getElementById("email").value;
  // var quality = document.getElementById("quality").value;
  // var time = document.getElementById("time").value;
  // var date = document.getElementById("date").value;
  // var message = document.getElementById("message").value;

//   Email.send({
//     secureToken: "7b066fee-87fc-4581-a29b-e84ad506ffc2",
    // pass xcliahnbanukicoz
//     To: "nguyencaodangtrinhtv3@gmail.com",
//     From: "dtrinhit04@gmail.com",
//     Subject: "This is the subject",
//     Body: `Tên khách hàng: ${name} <br> Số điện thoại: ${number} <br> Tên gmail của quý khách; ${Email} <br> Số lượng khách hàng: ${quality} <br> 
//  Thời gian đặt bàn: ${time} <br> Ngày đặt bàn: ${date} <br> Yêu cầu của khách hàng: ${message}`,
//   })
//   .then((message) => alert(message));
// }

function sendEmail() {
  let useNames = document.getElementById("names").value;
  let numberPhone = document.getElementById("numberPhone").value;
  let email = document.getElementById("email").value;
  let qualitys = document.getElementById("qualitys").value;
  let times = document.getElementById("times").value;
  let date = document.getElementById("date").value;
  let messages = document.getElementById("messages").value;
  let body = "Tên khách hàng:" + useNames + "<br/> Số điện thoại: " + numberPhone + "<br/> Tên gmail của quý khách: " + email + "<br/> Số lượng khách hàng: " + qualitys + "<br/> Thời gian đến: " + times + "<br/> Ngày đến: " + date + "<br/> Yêu cầu của quý khách: " + messages ;


  Email.send({
    // SMTPport: 2525,
    Host : "smtp.elasticemail.com",
    Username : "nguyencaodangtrinhtv3@gmail.com",
    Password : "B2145E9AB344FD4C1D449007775D22DCDDA7",
    To : 'dtrinhit04@gmail.com',
    From : "nguyencaodangtrinhtv3@gmail.com",
    Subject : "Đặt bàn online tại Thủy Mộc for web",
    Body : body,
}).then(
  message => alert(message)
);
}

function sendEmail2 {
    let name = document.getElementById(names).value;
    let email= document.getElementById(email).value;
    let numberPhone= document.getElementById(numberPhone).value;
    let topic= document.getElementById(topic).value;
    let messages= document.getElementById(messages).value;
    let body = name + email + numberPhone + topic + messages;
  
  Email.send({
    // SMTPport: 2525,
    Host : "smtp.elasticemail.com",
    Username : "nguyencaodangtrinhtv3@gmail.com",
    Password : "B2145E9AB344FD4C1D449007775D22DCDDA7",
    To : 'dtrinhit04@gmail.com',
    From : "nguyencaodangtrinhtv3@gmail.com",
    Subject : "Đặt bàn online tại Thủy Mộc for web",
    Body : body,
}).then(
  message => alert(message)
);
}