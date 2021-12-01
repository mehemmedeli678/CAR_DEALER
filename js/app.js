$(".menu-icon").click(function(){
    $(".mobile-search-list").hide(500)
    $(".mobile-menu-list").toggle(500)
    $(".white-cover").show()
})
$("header .menu ul li a").click(function(event){
  event.preventDefault()
  $("header .menu ul li a").css("color","white")
  $(this).css("color","red")
})
$(".white-cover").click(function(){
  $(".mobile-search-list").hide(500)
  $(".mobile-menu-list").hide(500)
  $(".white-cover").hide()
})
$(".mobile-search").click(function(){
    $(".mobile-menu-list").hide(500)
    $(".mobile-search-list").toggle(500)
    $(".white-cover").show()
})
$(".searchIcon i").click(function(){
  $(".search-car").toggle(500)
})
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$(".company-list").slick({
  autoplay:true,
  slidesToShow:5,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
})
$(".same-category .listed").slick({
  autoplay:true,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
})
$(".gauto-list").slick({
  autoplay:false,
  slidesToShow:3,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
})
function myFunction(e) {
    var x = e.pageX*100/window.outerWidth/10;
    var y = e.pageY*100/window.outerHeight/10;
    $(".mouse-left").css("transform", `translate(${x}%,${y}%`)
    $(".mouse-right").css("transform", `translate(${x/2}%,${y/2}%`)
  }

  $(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>20){
            $("header").css("background-color","#323232")}
      if($(this).scrollTop()<20){
        $("header").css("background-color","transparent")
      }
    });
  });

$(".left-about .header h3").click(function(){
  $(".left-about .header h3").css("border","none")
  $(this).css("border-bottom","3px solid #db2d2e")
})
$(".left-about .header .open-general").click(function(){
  $(".general").show(500)
  $(".vehicle").hide()
  $(".features").hide()
})
$(".left-about .header .open-features").click(function(){
  $(".general").hide()
  $(".vehicle").hide()
  $(".features").show(500)
})
$(".left-about .header .open-vehicle").click(function(){
  $(".general").hide()
  $(".features").hide()
  $(".vehicle").show(500)
})

$(".advanced .close-filter p").click(function(){
  $(".car-listing .filter-list").css("transform","translateX(-100%)")
})
$(".car-listing .filter").click(function(){
  $(".car-listing .filter-list").css("transform","translateX(0%)")
})
var b=5
for (let i = 1; i <= b; i++) {
  $(".number .number-list").append(`<a href="">${i}</a>`)
}