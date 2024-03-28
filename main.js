new WOW().init();

$(document).ready(preloderFunction());

function preloderFunction() {
  setTimeout(function () {
    document.getElementById("page-top").scrollIntoView();

    $("#ctn-preloader").addClass("loaded");
    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      $(this).delay(2000).fadeOut();
    }
  }, 1500);

}

function afterLoad() {}


$(document).ready(  
  handleCursor()
);


$(".box-video").click(function(){
  $('iframe',this)[0].src += "&amp;autoplay=1";
  $(this).addClass('open');
});





$('.owl_carousel2').owlCarousel({
  nav: true,
  dots: false,
   rtl: true,
  navText: [
    '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
  ],
  responsiveClass: true,
  singleItem:true ,
          items:1,
})

$('.owl_carousel ').owlCarousel({
  nav: true,
  dots: true,
   rtl: true,
  margin: 30,
  navText: [
    '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
  ],
  responsiveClass: true,
  singleItem:true ,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})


$('.owl_carousel1').owlCarousel({
  nav: true,
  dots: false,
   rtl: true,
  margin: 30,
  navText: [
    '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
  ],
  responsiveClass: true,
  singleItem:true ,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})


function handleCursor() {
  const cursorInner = document.querySelector(".cursor-inner"),
    cursorOuter = document.querySelector(".cursor-outer");
  let n,
    i = 0,
    o = !1;
  window.onmousemove = function (s) {
    o ||
      (cursorOuter.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (cursorInner.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (n = s.clientY),
      (i = s.clientX);
  };
  if (document.querySelector(".cursor-pointer")) {
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover"),
          cursorOuter.classList.add("cursor-hover");
      });
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover"),
          cursorOuter.classList.remove("cursor-hover");
      }),
      (cursorInner.style.visibility = "visible"),
      (cursorOuter.style.visibility = "visible");
  }
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      cursorInner.classList.add("cursor-hover"),
        cursorOuter.classList.add("cursor-hover");
    });
  });
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      cursorInner.classList.remove("cursor-hover"),
        cursorOuter.classList.remove("cursor-hover");
    });
  }),
    (cursorInner.style.visibility = "visible"),
    (cursorOuter.style.visibility = "visible");
}