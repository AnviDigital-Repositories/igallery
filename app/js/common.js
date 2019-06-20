var $body = $('body');
function bodyFreezeScroll() {
    var bodyWidth = $body.innerWidth();
    $body.css('overflow', 'hidden');
    $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
}

function bodyUnfreezeScroll() {
    var bodyWidth = $body.innerWidth();
    $body.css('marginRight', '0');
    $body.css('overflow', 'auto');
}

$(document).ready(function () {

    //btn-menu
    $('.header-btn-menu').click(function(){
        $(this).toggleClass('btn-active');
        $('.header-drop').slideDown(300).addClass('active');
        setTimeout(function(){
            $('.header-drop-close').addClass('active');
        }, 500);

        if (!$(this).hasClass('btn-active')) {
            $('.header-drop').slideUp(300).removeClass('active');
        }
    });
    $('.header-drop-close').click(function(e){
        e.preventDefault();
        $('.header-drop-close').removeClass('active');
        $('.header-btn-menu').removeClass('btn-active');
        setTimeout(function(){
            $('.header-drop').removeClass('active');
        }, 500);
    });

    var curentValue, totalValue;
    $('.plus').click(function(){
        curentValue = $(this).parent().find('.header-basket-input').val();
        totalValue = +curentValue + 1;
        $(this).parent().find('.header-basket-input').val(totalValue);
    });
    $('.minus').click(function(){
        curentValue = $(this).parent().find('.header-basket-input').val();
        totalValue = +curentValue - 1;
        if (totalValue  < 0) {
            totalValue  = 0
        }
        $(this).parent().find('.header-basket-input').val(totalValue);
    });

    $(".header-item.hover").hover(function () {
        $(".overlay").addClass('active');
        bodyFreezeScroll();
        if ($(".header-btn-menu").hasClass('btn-active')) {
            $('.header-drop').slideUp(300);
            $(".header-btn-menu").toggleClass('btn-active');
        }
    }, function(){
        $(".overlay").removeClass('active');
        bodyUnfreezeScroll();
    });

    $(".header-drop .header-list").mouseover(function () {
        $(".overlay").addClass('active');
    });
    $(".header-drop .header-list").mouseout(function () {
        $(".overlay").removeClass('active');
    });


    //login step


    $('.first-step').submit(function(e){
        e.preventDefault();
       $(this).removeClass('active');
       $('.second-step').addClass('active');
       $('.login-step-item').eq(0).addClass('active').siblings().removeClass('active');
    });

    //register popup

    $('.header-link_register').click(function(e){
        e.preventDefault();
        $('.register_user').addClass('active');
        bodyFreezeScroll();
    });

    $('.header-link_artist').click(function(e){
        e.preventDefault();
        $('.register_artist').addClass('active');
        bodyFreezeScroll();
    });

    $('.register-close').click(function(e){
        e.preventDefault();
        $('.register').removeClass('active');
        bodyUnfreezeScroll();
        setTimeout(function(){
            $('.register-thank').removeClass('active');
            $('.register-left').removeClass('close');
            $('.register-right').removeClass('open');
            $('.register-main').removeClass('active');
            $('.package').slideUp();
        }, 500)
    });

    $('.register-left-scrolling').click(function(e){
        e.preventDefault();
        $(this).addClass('hide');
        $('.register-main').addClass('active');
        $('.package').slideDown();
    });
    $('.register-form_user').submit(function(e){
        e.preventDefault();
        $(this).closest('.register').find('.register-left').addClass('close');
        $(this).closest('.register').find('.register-right').addClass('open');
        $(this).closest('.register').find('.register-thank').addClass('active');
    });
    $('.register-form_artist').submit(function(e){
        e.preventDefault();
        var checkedIndex = $('.package-radio:checked').closest('.package-item').index();
        if(checkedIndex == 0) {
            $(this).closest('.register').find('.register-left').addClass('close');
            $(this).closest('.register').find('.register-right').addClass('open');
            $(this).closest('.register').find('.register-thank').addClass('active');
        }
        else {
            $('.register-left-content').addClass('hide');
            $('.register-payment').addClass('active');
        }
    });
    $('.package-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //freeze scroll

    $('.register-form').find('.login-form-input').focus(function(){
        $('.register-left-scrolling').addClass('hide');
        $('.register-main').addClass('active');
        $('.package').slideDown();
    });

    //artist slider

    var mySwiper = new Swiper ('.artist-slider', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 0,
        direction: 'horizontal',
        initialSlide: 1,
        centeredSlides: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.swiper-button-next.sixth-btn',
            prevEl: '.swiper-button-prev.sixth-btn',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 25,
                simulateTouch: true
            }
        }
    });

    //paper sliders

    var mySwiper7 = new Swiper ('.paint-form-slider', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 25,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next.seventh-btn',
            prevEl: '.swiper-button-prev.seventh-btn',
        },
        breakpoints: {
            1360: {
                spaceBetween: 50,
                slidesPerView: 4,
            },
            1020: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            320: {
                slidesPerView: 3,
                spaceBetween: 10,
            }
        }
    });

    //home sliders

    var mySwiper3 = new Swiper ('.home-four-slider', {
        // Optional parameters
        slidesPerView: 6,
        spaceBetween: 50,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next.first-btn',
            prevEl: '.swiper-button-prev.first-btn',
        },
        breakpoints: {
            1360: {
                spaceBetween: 50,
                slidesPerView: 4,
            },
            1020: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    var mySwiper4 = new Swiper ('.home-fifth-slider', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next.second-btn',
            prevEl: '.swiper-button-prev.second-btn',
        },
        breakpoints: {
            1360: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1020: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
    $('.home-fifth-slider .swiper-slide-prev').prevAll().addClass('hide');
    mySwiper4.on('slideChangeTransitionEnd', function () {
       $('.home-fifth-slider .swiper-slide-prev').prevAll().addClass('hide');
    });

    var mySwiper5 = new Swiper ('.home-second-slider', {
        // Optional parameters
        slidesPerView: 5,
        spaceBetween: 10,
        direction: 'horizontal',
        simulateTouch: false,
        initialSlide: 2,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next.third-btn',
            prevEl: '.swiper-button-prev.third-btn',
        },
        breakpoints: {
            767: {
                slidesPerView: 3,
                loop: true,
                simulateTouch: true
            },
            480: {
                slidesPerView: 2
            }
        }
    });

    var mySwiper6 = new Swiper ('.home-gallery-flex', {
        // Optional parameters
        slidesPerView: 6,
        spaceBetween: 0,
        direction: 'horizontal',
        simulateTouch: false,
        initialSlide: 3,
        navigation: {
            nextEl: '.swiper-button-next.fourth-btn',
            prevEl: '.swiper-button-prev.fourth-btn',
        },
        breakpoints: {
            767: {
                slidesPerView: 3,
                simulateTouch: true
            },
            480: {
                centeredSlides: true,
                slidesPerView: 2
            }
        }
    });
    //info slider

    var mySwiper2 = new Swiper ('.info-right-slider', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 0,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        }
    });

    //blog slider

    var galleryThumbs = new Swiper('.blog-slider-thumbs', {
        spaceBetween: 0,
        slidesPerView: 1,
        effect: 'fade',
        speed: 1000,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.blog-slider-top', {
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 1000,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    //artist tabs
    function checkArtistHeight(){
        return (
            $('.artist-fourth-overflow').height()
        )
    }
    var contentHeight = checkArtistHeight();
    $('.artist-fourth-content').css('height', contentHeight/1.5);
    $('.artist-fourth-more').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.artist-fourth-content').toggleClass('active');
        contentHeight = checkArtistHeight();
        if ($(this).hasClass('active')) {
            $('.artist-fourth-content').css('height', contentHeight);
        }
        else {
            $('.artist-fourth-content').css('height', contentHeight/1.5);
        }
    });
    $('.artist-fourth-link').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        var dropHeight = $(this).closest('.artist-fourth-item').find('.artist-fourth-drop-overflow').outerHeight();
        if($(this).hasClass('active')) {
            $(this).text('-');
            $(this).closest('.artist-fourth-item').find('.artist-fourth-drop').css('height', dropHeight);
            contentHeight = $('.artist-fourth-content').height() + $(this).closest('.artist-fourth-item').find('.artist-fourth-drop-overflow').outerHeight();
            $('.artist-fourth-content').css('height', contentHeight);
        }
        else  {
            $(this).text('+');
            $(this).closest('.artist-fourth-item').find('.artist-fourth-drop').css('height', 0);
            contentHeight = $('.artist-fourth-content').height() - $(this).closest('.artist-fourth-item').find('.artist-fourth-drop-overflow').outerHeight();
            $('.artist-fourth-content').css('height', contentHeight);
        }
    });

    //add photo

    $('.add-file').change(function(){
        var fileName = this.files[0].name;
        $(this).parent().parent().find('.register-form-img').attr('src', 'img/' + fileName);
        if($(this).parent().hasClass('paint-form-label')) {
            $('.picture-img').attr('src', 'img/' + fileName);
        }
    });

    //delete photo

    $('.register-form-photo_del').click(function(e){
        e.preventDefault();
        $(this).parent().find('.register-form-img').attr('src', '');
    });

    //payment
    $('.register-payment-label').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.register-payment-form').submit(function(e){
        e.preventDefault();
        $('.register-payment').removeClass('active');
        $('.register-card').addClass('active');
        $(this).closest('.payment-popup-item').removeClass('active').siblings().addClass('active');
    });
    $('.register-card-form').submit(function(e){
        e.preventDefault();
        $('.register_artist').find('.register-left').addClass('close');
        $('.register_artist').find('.register-right').addClass('open');
        $('.register_artist').find('.register-thank').addClass('active');
    });

    //card mask
    $('.login-form-input_card').mask("9999 9999 9999 9999");

    //phone mask

    $('.purchase-form-phone').mask("(99) 99 99 99");

    //custom select

    $('.select_month').nSelect({
        firstTitle : 'Month'
    });
    $('.select_year').nSelect({
        firstTitle : 'Year'
    });
    $('.select_code').nSelect();

    $('.select_adress').nSelect({
        firstTitle : 'טקסט'
    });

    $('.select_type').nSelect();

    $('.select_change').nSelect({
        afterChange: function() {
            var optionIndex = $('.select_change').parent().find('._active').index();
            $('.change-item').eq(optionIndex).addClass('active').siblings().removeClass('active');
        }
    });


    //gallery grid

    var $grid = $('.gallery-main').masonry({
        itemSelector: '.gallery-item',
        percentPosition: true,
        gutter: '.gutter-sizer'

    });

    var $grid2 = $('.account-fifth-main').masonry({
        itemSelector: '.gallery-item',
        percentPosition: true,
        gutter: '.gutter-sizer2'

    });

    //gallery like

    $('.gallery-item-like').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    //open filter

    $('.gallery-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.gallery-filter').toggleClass('active');
        $('.gallery-main').toggleClass('active');
        setTimeout(function(){
            $grid.masonry('layout');
        }, 10);

    });

    // range

    $(".range-line").slider({
        min: 0,
        max: 5000,
        values: [0,5000],
        step: 100,
        range: true,
        stop: function(event, ui) {
            $(".minCost").val($(".range-line").slider("values",0));
            $(".maxCost").val($(".range-line").slider("values",1));
        },
        slide: function(event, ui){
            $(".minCost").val($(".range-line").slider("values",0));
            $(".maxCost").val($(".range-line").slider("values",1));
        },
    });
    $(".maxCost").change(function(){
        let value1 = $(".minCost").val();
        let value2 = $(".maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $(".minCost").val(value1);
        }
        $(".range-line").slider("values",0,value1);
    });
    $(".minCost").change(function(){
        let value1 = $(".minCost").val();
        let value2 = $(".maxCost").val();

        if (value2 > 5000) { value2 = 5000;
            (".maxCost").val(5000)
        }

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $(".maxCost").val(value2);
        }
        $(".range-line").slider("values",1,value2);
    });

    //custom scroll filter drop
    $(".gallery-form-drop-scroll").mCustomScrollbar();

    //filter drop item
    $('.gallery-form-top').click(function(){
       $(this).toggleClass('active');
       $(this).parent().find('.gallery-form-drop').slideToggle();
        var topFilterPosition = $('.gallery-main')[0].getBoundingClientRect().top;
        var totalFilterHeight = windowHeight - topFilterPosition;
        $('.gallery-form').css('height', totalFilterHeight);
    });


    //sticky filter

    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0", offset: "-75"}});
    if ($('.gallery-form').length > 0) {
        var heightDuration = $('.gallery-flex').height() - $('.gallery-form').outerHeight() - $('.gallery-form').offset().top - 50;
    }
    if (heightDuration < 1) {
        heightDuration = 1;
    }
    var scene = new ScrollMagic.Scene({
        triggerElement: ".gallery-filter", // point of execution
        duration: heightDuration, // pin element for the window height - 1
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
        .setPin(".gallery-form") // the element we want to pin
        .addTo(controller);

    //adaptive height
    if($('.gallery-main').length > 0) {
        var windowHeight = $(window).height();
        var topFilterPosition = $('.gallery-main')[0].getBoundingClientRect().top;
        var totalFilterHeight = windowHeight - topFilterPosition;
        $('.gallery-form').css('height', totalFilterHeight);
    }


    //smooth scroll

    $(".scroll-link").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    //sticky photo

    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0", offset: "-215"}});
    if ($('.page-right').length > 0) {
        var heightDuration2 = $('.page-flex').height() - $('.page-right-sticky').outerHeight() - $('.page-right-sticky').offset().top;
    }
    if (heightDuration2 < 1) {
        heightDuration2 = 1;
    }
    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".page-right-sticky", // point of execution
        duration: heightDuration2, // pin element for the window height - 1
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
        .setPin(".page-right-sticky") // the element we want to pin
        .addTo(controller2);

    //purchase forms

    $('.purchase-form_first').submit(function(e){
        e.preventDefault();
        $(this).hide().next().show();
        $('html,body').scrollTop(0);
    });
    $('.purchase-form_second .purchase-back').click(function(e){
        e.preventDefault();
        $('.purchase-form_first').show().next().hide();
        $('html,body').scrollTop(0);
    });
    $('.purchase-form_second').submit(function(e){
        e.preventDefault();
        $('.purchase-popup').addClass('active');
        bodyFreezeScroll();
    });
    $('.purchase-popup-close').click(function(e){
        e.preventDefault();
        $('.purchase-popup').removeClass('active');
        bodyUnfreezeScroll();

    });

    //account tabs

    $('.account-right-link').click(function(e){
        e.preventDefault();
        var tabIndex = $(this).index();
        $('.account-left').addClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        $('.account-left-item').eq(tabIndex + 1).addClass('active').siblings().removeClass('active');
        $('.account-left-sticky').eq(tabIndex).addClass('active').siblings().removeClass('active');
        checkTabHeight();
        checkFormHeight();
        checkStickHeight();
        checkCalendarHeight();
        $(window).scrollTop(0);

        if($('.account-fifth').hasClass('active')) {
            // hide new item after 3 second
            setTimeout(function(){
                $('.account-fifth-overlay').addClass('hide');
            }, 2500);
        }
    });

    $('.account-left-block').click(function(){
        $('.account-left').removeClass('active');
        $('.account-flex').height($('.account-right').outerHeight());
    });

    function checkTabHeight(){
        var tabHeight = $('.account-left-item.active').outerHeight();
        var stickHeight = $('.account-left-sticky.active').outerHeight();
        $('.account-left-bottom').height(tabHeight);
        if($(window).width() < 767) {
            $('.account-flex').height(tabHeight);
        }
    }
    function checkStickHeight(){
        var stickHeight = $('.account-left-sticky.active').outerHeight();
        $('.account-left-top').height(stickHeight);


    }
    function checkCalendarHeight() {
        var calendarHeight = $('.calendar-index.active').outerHeight();
        $('.calendar').height(calendarHeight);
    }
    checkStickHeight();
    checkTabHeight();
    checkCalendarHeight();

    //tabs calendar
    $('.account-third-tabs-link').click(function(e){
       e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active');
       var tabIndex = $(this).index();
       $('.calendar-index').eq(tabIndex).addClass('active').siblings().removeClass('active');
        checkCalendarHeight();
        checkTabHeight();
    });

    //menu calendar

    $('.calendar-flex-link').click(function(){
       $(this).toggleClass('active');
    });

    // delete image calendar

    $('.calendar-item-link_delete').click(function(e){
        e.preventDefault();
        $('.delete-popup').addClass('active');
        bodyFreezeScroll();
    });

    //check height renew subscription

    function checkFormHeight() {
        var formHeight = $('.account-sixth-change-item.active').outerHeight();
        $('.account-sixth-change').css('height', formHeight);
    }
    checkFormHeight();

    $('.account-sixth-btn').click(function(e){
        e.preventDefault();
        $('.account-sixth-change-item').eq(0).removeClass('active').next().addClass('active');
        $('.account-fifth-top').hide();
        checkFormHeight();
        setTimeout(function(){
            checkTabHeight();
            checkStickHeight();
        });

    });

    $('.account-sixth-form').submit(function(e){
        e.preventDefault();
        $('.account').hide();
        $('.payment-popup').addClass('active');
        $(window).scrollTop(0);
    });

    //search popup

    $('.header-search').click(function(e){
        e.preventDefault();
        $('.search-popup').addClass('active');
        bodyFreezeScroll();
    });
    $('.search-popup-close').click(function(e){
        e.preventDefault();
        $('.search-popup').removeClass('active');
        bodyUnfreezeScroll()
    });

    //help popup

    $('.header-btn, .header-menu-help').click(function(e){
        e.preventDefault();
       $('.help-popup').addClass('active');
       bodyFreezeScroll();
    });

    $('.help-popup-close').click(function(e){
        e.preventDefault();
        $('.help-popup').removeClass('active');
        bodyUnfreezeScroll();
    });

    //label calendar
    $('.calendar-graf-item').hover(function(e){
        e.preventDefault();
        var _this = $(this);
        _this.closest('.calendar-left').find('.calendar-label').addClass('active');
        _this.addClass('active').siblings().removeClass('active');
        var leftGutter = 15;
        var leftPosition = _this.position().left;
        var topPosition = _this.position().top;
        var labelWidth = _this.closest('.calendar-left').find('.calendar-label').outerWidth() + leftGutter;
        var contentWidth = _this.closest('.calendar-left').find('.calendar-graf').outerWidth();

        if (leftPosition + labelWidth < contentWidth) {
            _this.closest('.calendar-left').find('.calendar-label').css({'left': leftPosition + leftGutter, "top": topPosition - 35})
        }
        else if(leftPosition + labelWidth > contentWidth) {
            _this.closest('.calendar-left').find('.calendar-label').css({'left': leftPosition - labelWidth + 10, "top": topPosition - 35})
        }
    }, function(){
        $(this).closest('.calendar-left').find('.calendar-label').removeClass('active');
        $(this).removeClass('active');
    });

    //mobile menu

    $('.header-list').click(function(){
        if($(window).width() <= 1020) {
            $(this).toggleClass('active');
            $(this).find('.header-first').toggleClass('active');
        }
    });

    //drop list

    $('.package-left-btn').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().find('.package-left-list').slideToggle();
      setTimeout(function(){
          checkFormHeight();
          checkTabHeight()
      },300)

    });

    // custom input

    $('.login-form-row').hover(function(){
        $(this).addClass('hover').siblings().removeClass('hover')
    }, function(){
        $(this).removeClass('hover');
    });

    $('.login-form-input').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
    });

    //question drop

    $('.infos-item_question .infos-item-block').click(function(e){
        e.preventDefault();
        $(this).parent().find('.infos-item-drop').toggleClass('active');
        $(this).parent().toggleClass('active');
    });

    //color drop

    $('.color-active').click(function(){
        $(this).parent().find('.color-drop').toggleClass('active');
    });

    $('.color-drop-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var rgb = $(this).css('background-color').match(/\d+/g);
        var r   = parseInt(rgb[0], 10);
        var g   = parseInt(rgb[1], 10);
        var b   = parseInt(rgb[2], 10);
        var hex = '#'+ r.toString(16) + g.toString(16) + b.toString(16);
        $(this).closest('.color-item').find('.color-active').css('background-color', hex);
        $(this).closest('.color-item').find('.color-input').val(hex);
        if ($(this).parent().hasClass('color-drop_bg')) {
            $('.paint-first-right').css('background-color', hex);
            $('.paint-first-right').css('background-image', 'none');
        }
    });

    //change bg paint

    $('.paint-first-circle').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
       var imageUrl = 'img/paint-bg' + $(this).index() + '.jpg';
       $('.paint-first-right').css('background-image', 'url(' + imageUrl + ')');
    });

    //change color

    function LightenDarkenColor(col, amt) {
        var usePound = false;
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
        var num = parseInt(col,16);
        var r = (num >> 16) + amt;
        if (r > 255) r = 255;
        else if  (r < 0) r = 0;
        var b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) b = 255;
        else if  (b < 0) b = 0;
        var g = (num & 0x0000FF) + amt;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    }

    // var NewColor = LightenDarkenColor("#F06D06", 20)

    $('.paint-line-btn').click(function(){
        var rgb = $(this).parent().find('.color-active').css('background-color').match(/\d+/g);
        var r   = parseInt(rgb[0], 10);
        var g   = parseInt(rgb[1], 10);
        var b   = parseInt(rgb[2], 10);
        var hex = '#'+ r.toString(16) + g.toString(16) + b.toString(16);
        if ($(this).hasClass('paint-line-btn_minus')) {
            var NewColor = LightenDarkenColor(hex, 20);
            $(this).parent().find('.color-active').css('background-color', NewColor);
            $('.paint-first-right').css('background-color', NewColor);
            $('.paint-first-right').css('background-image', 'none');
        }
        else {
            var NewColor = LightenDarkenColor(hex, -20);
            $(this).parent().find('.color-active').css('background-color', NewColor);
            $('.paint-first-right').css('background-color', NewColor);
            $('.paint-first-right').css('background-image', 'none');
        }
    });

    //paint more

    $('.paint-first-btn').click(function(e){
        e.preventDefault();
        $('body').removeClass('custom-body');
        $('.hide-block').css('height', 'auto');
        $('.paint-form-row-relative').addClass('active');
        $('html, body').animate({scrollTop:$('#scroll-block').position().top - $('.header').outerHeight()}, 500);
    });

    //frame popup

    $('.gallery_frame .gallery-item-block').click(function(e){
        e.preventDefault();
        $('.frame').addClass('active');
        var pictureSrc = $(this).find('.gallery-item-img').attr('src').split('.')[0] + '-big.' + $(this).find('.gallery-item-img').attr('src').split('.')[1];
        $('.frame-right-picture').attr('src', pictureSrc)
    });

    $('.frame-close').click(function(e){
        e.preventDefault();
        $('.frame').removeClass('active');
    });

});
$('.register-left-scroll').scroll(function(){
    $('.register-left-scrolling').addClass('hide');
    $('.register-main').addClass('active');
    $('.package').slideDown();
});
$(document).mouseup(function (e) {
    var container = $(".color");
    if (container.has(e.target).length === 0){
        $('.color-drop').removeClass('active');
    }
});