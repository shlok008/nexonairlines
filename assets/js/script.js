// main script starts here
var interleaveOffset = 0.5;

var swiperOptions = {
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    progress: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }
    },
    touchStart: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function (speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    },
  },
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// main script ends here

// Effects after hovering on the first p element of each page that is associated with the class main-subtext currently commented out.
// let mainText = $(".main-subtext").text();
/*-------- 
$(document).ready(function () {
  $(".main-subtext").mouseover(function () {
    $(".main-subtext").removeClass().addClass("bold-subtext");
  });
});
--------*/
$(document).ready(function () {
  $(".main-subtext").hover(
    function () {
      $(this).addClass("bold-subtext");
      $(this).removeClass("main-subtext");
    },
    function () {
      $(this).removeClass("bold-subtext");
      $(this).addClass("main-subtext");
    }
  );
});
