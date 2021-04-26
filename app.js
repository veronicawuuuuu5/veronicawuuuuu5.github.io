
//navigation pane animation
const navSlide = () => {
const burger = document.querySelector('.burgericon-homepage, .burgericon');
const nav = document.querySelector('.navlinks-homepage, .navlinks');
const navbarlinks =document.querySelectorAll('.navlinks-homepage a, .navlinks a');

burger.addEventListener('click', () => {
  //Toggle nav
  nav.classList.toggle('navlinks-active');

  //animated navLinks
  navbarlinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ''
      } else{
        link.style.animation = `navLinksFade 0.4s ease forwards ${index / 6}s`;
      }
    });
  //burger animation
  burger.classList.toggle('burgercross');

  });

};

//change header background color on homepage
var imageHeight = parseInt($('.img-homepage').css('height')),
    startheight = imageHeight / 4 * 3;

$(window).on("scroll", function() {
    if($(window).scrollTop() > startheight) {
        $(".topnav-wrapper-homepage").addClass("topnav-changecolor");
        $(".navlinks-homepage").addClass("navlinks-changecolor");
        $(".socialmedia-wrapper-homepage").addClass("socialmedia-wrapper-homepage-changecolor");
        $(".burgericon-homepage").addClass("burgericon-homepage-changecolor");
        $(".underline_menu").addClass("underline_menu-changecolor");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".topnav-wrapper-homepage").removeClass("topnav-changecolor");
       $(".navlinks-homepage").removeClass("navlinks-changecolor");
       $(".socialmedia-wrapper-homepage").removeClass("socialmedia-wrapper-homepage-changecolor");
       $(".burgericon-homepage").removeClass("burgericon-homepage-changecolor");
       $(".underline_menu").removeClass("underline_menu-changecolor");
    }
});

$(window).load(function() {
  $("body").removeClass("preload");
});

navSlide();
