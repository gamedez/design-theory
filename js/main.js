$(document).ready(function () {

//модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");    
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $("body").addClass("body__no-scroll");
  };
  
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("body__no-scroll");
  }; 

  $(".modal").on("click", function() {    
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("body__no-scroll");
  });

  $(".modal__dialog").on("click", function(event) {    
    event.stopPropagation();
  });

  document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
          isEscape = (evt.key === "Escape" || evt.key === "Esc");
      } else {
          isEscape = (evt.keyCode === 27);
      }
      if (isEscape) {
          $(".modal__overlay").removeClass("modal__overlay--visible");
          $(".modal__dialog").removeClass("modal__dialog--visible");
          $("body").removeClass("body__no-scroll");
      } 
  };

  // Обработка формы отправки
    $(".phone").mask("+7(000) 000-00-00");

    $(".form").each(function() {
      $(this).validate({
      errorClass: "error",      
      messages: {
        name: {
          required: "Введите свое имя!",
          minlength: "Слишком короткое имя!",
        },
        email: {
          required: "Вы не ввели email!",
          email: "Введите ваш email в формате name@domain.com",
        },
        phone: {
          required: "Введите номер телефона!",
          minlength: "Введите телефон в формате +7(000) 000-00-00",
        },
      },
    });
    });

    $(".subscription__form").validate({
      errorClass: "invalid",
      messages: {        
        email: {
          required: "Вы не ввели email",
          email: "Введите ваш email в формате name@domain.com",
        },        
      }    
    });


//мобильное меню
var menuButton = $(".menu-button");
  menuButton.on("click", function () {  
    $(".navbar__menu").toggleClass("navbar__menu--visible");
    $(".navbar__button").toggleClass("navbar__button--visible");
    $("body").toggleClass("body__no-scroll__1");
});  

//красное сердечко
        var menuButton = $(".card-reference__heart-img");
          menuButton.on("click", function () {  
            $(this).toggleClass("card-reference__heart-img--active");
        }); 
//кнопка в избранное
        var menuButton = $(".video-row__icon");
          menuButton.on("click", function () {  
            $(this).toggleClass("video-row__icon--active");
        }); 

 //Слайдер 1

  var themeSlider = new Swiper(".slider-theme__container", {
    
    slidesPerColumnFill: 'row',
    loop: false,
    navigation: {
      nextEl: ".slide-button--next",
      prevEl: ".slide-button--prev"
    },  
    
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    breakpoints: {
      320: {slidesPerView: 2, slidesPerColumn: 2},
      510: {slidesPerView: 3, slidesPerColumn: 2},      
      767: {slidesPerView: 3, slidesPerColumn: 1, spaceBetween: 0},
      1200: {slidesPerView: 4, slidesPerColumn: 1, spaceBetween: 27}
    },
    
});

//Слайдер 2
var reviewsSlider = new Swiper(".slider-unedited__container", {
  
  loop: false,
  navigation: {
    nextEl: ".unedited__button--next",
    prevEl: ".unedited__button--prev",
  },
  slidesPerView: 5,
    spaceBetween: 30,
    
    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    breakpoints: {
      200: {slidesPerView: 1},
      480: {slidesPerView: 2, spaceBetween: 25},
      767: {slidesPerView: 3},
      992: {slidesPerView: 4},
      1200: {slidesPerView: 5}
    },
});

//видео
      var player;
        $(".video__play-big").on("click", function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
          height: "380",
          width: "100%",
          videoId: "QanMwxVsg18",
          events: {
            "onReady": videoPlay,
          }
        });
      })

    function videoPlay(event) {
      event.target.playVideo();
    }

    //плавный переход по якорю 
      var $page = $('html, body');
        $('a[href="#reference"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
      });
      var $page = $('html, body');
        $('a[href="#theme"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
      });
      var $page = $('html, body');
        $('a[href="#blog"]').click(function() {
          $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
      });
//кнопка прокрутка наверх
  var btn = $(".arrow-up");    
        $(window).scroll(function(e) {  
          if ($(window).scrollTop() > 700) {  
          btn.addClass("arrow-up--show");
        } else {
          btn.removeClass("arrow-up--show");
        }
        });
          $(".arrow-up").click(function(e) {
            e.preventDefault();
          $("body,html").animate({scrollTop:0},700);
          });
});