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
//     Body: `T??n kh??ch h??ng: ${name} <br> S??? ??i???n tho???i: ${number} <br> T??n gmail c???a qu?? kh??ch; ${Email} <br> S??? l?????ng kh??ch h??ng: ${quality} <br> 
//  Th???i gian ?????t b??n: ${time} <br> Ng??y ?????t b??n: ${date} <br> Y??u c???u c???a kh??ch h??ng: ${message}`,
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
  let body = "T??n kh??ch h??ng:" + useNames + "<br/> S??? ??i???n tho???i: " + numberPhone + "<br/> T??n gmail c???a qu?? kh??ch: " + email + "<br/> S??? l?????ng kh??ch h??ng: " + qualitys + "<br/> Th???i gian ?????n: " + times + "<br/> Ng??y ?????n: " + date + "<br/> Y??u c???u c???a qu?? kh??ch: " + messages ;


  Email.send({
    // SMTPport: 2525,
    Host : "smtp.elasticemail.com",
    Username : "nguyencaodangtrinhtv3@gmail.com",
    Password : "B2145E9AB344FD4C1D449007775D22DCDDA7",
    To : 'dtrinhit04@gmail.com',
    From : "nguyencaodangtrinhtv3@gmail.com",
    Subject : "?????t b??n online t???i Th???y M???c for web",
    Body : body,
}).then(
  message => alert(message)
);
}