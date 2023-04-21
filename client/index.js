// function atload() {dom_rdy()}window.onload=atload;



$(document).ready(function () {
  $(".loader").addClass("loaderAnimation");
  $(".loaderBackground").addClass("loaderBackgroundAnimation");
  $(".thankYouCross").click(function () {
    $(".thankYouSection").css("display", "none");
    $(".thankYouBackground").css("display", "none");
  });
});

var headerTop = $(".header").offset().top;
// var menuTop = $(".startersMenuSection").offset().top;
$(window).scroll(function () {
  if ($(window).scrollTop() > headerTop) {
    $(".goToTop").css("display", "flex");
  } else {
    $(".goToTop").css("display", "none");
  }
});

$(".goToTop").click(function (e) {
  e.preventDefault();
  $(window).scrollTop(0);
});





$(".pizzasButton").click(function () {
  $(".menuCardsSection:not(.pizzasCardsSection)").hide();
  $(".pizzasCardsSection").toggle();
  $(".menuItemButton").not(this).removeClass("menuButtonActive");
  $(".pizzasButton").toggleClass("menuButtonActive");
});

$(".drinksButton").click(function () {
  $(".menuCardsSection:not(.drinksCardsSection)").hide();
  $(".drinksCardsSection").toggle();
  $(".menuItemButton").not(this).removeClass("menuButtonActive");
  $(".drinksButton").toggleClass("menuButtonActive");
});

$(".burgersButton").click(function () {
  $(".menuCardsSection:not(.burgersCardsSection)").hide();
  $(".burgersCardsSection").toggle();
  $(".menuItemButton").not(this).removeClass("menuButtonActive");
  $(".burgersButton").toggleClass("menuButtonActive");
});

$(".dessertsButton").click(function () {
  $(".menuCardsSection:not(.dessertsCardsSection)").hide();
  $(".dessertsCardsSection").toggle();
  $(".menuItemButton").not(this).removeClass("menuButtonActive");
  $(".dessertsButton").toggleClass("menuButtonActive");
});




// practice

$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function () {
  $slide = $('.active').width();
  console.log($('.active').position().left);

  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({
      left: '-=' + $slide
    });
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({
      left: '+=' + $slide
    });
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');

  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function (e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  } else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});


// owlcarousel

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  mouseDrag: true,
  touchDrag: true,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    650: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})



// Skroll

new Skroll()
  .add(".customerReviewCard", {
    animation: "fadeInLeft",
    duration: 1000,
  })
  .init();

new Skroll()
  .add(".offerImg", {
    animation: "fadeInLeft",
    duration: 2000,
  })
  .init();

new Skroll()
  .add(".offerCard", {
    animation: "fadeInUp",
    duration: 1500,
  })
  .init();

new Skroll()
  .add(".instagramGridContainer > .instagramGridItem:nth-child(3n) .instagramGridImg", {
    animation: "fadeInUp",
    duration: 700,
  })
  .init();

new Skroll()
  .add(".instagramGridContainer > .instagramGridItem:nth-child(3n+1) .instagramGridImg", {
    animation: "fadeInLeft",
    duration: 700,
  })
  .init();

new Skroll()
  .add(".instagramGridContainer > .instagramGridItem:nth-child(3n+2) .instagramGridImg", {
    animation: "fadeInDown",
    duration: 700,
  })
  .init();


new Skroll()
  .add(".instagramFollowButton", {
    animation: "fadeInLeft",
    duration: 700,
  })
  .init();