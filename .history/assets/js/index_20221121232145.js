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
  console.log("say HI")

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}