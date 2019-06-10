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
        $('.header-drop').slideDown(300);

        if (!$(this).hasClass('btn-active')) {
            $('.header-drop').slideUp(300);
        }
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

    $(".header-item").mouseover(function () {
        $(".overlay").addClass('active');
        if ($(".header-btn-menu").hasClass('btn-active')) {
            $('.header-drop').slideUp(300);
            $(".header-btn-menu").toggleClass('btn-active');
        }
    });
    $(".header-item").mouseout(function () {
        $(".overlay").removeClass('active');
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
        console.log(checkedIndex);
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
        direction: 'horizontal'
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
    });

    var mySwiper4 = new Swiper ('.home-fifth-slider', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next.second-btn',
            prevEl: '.swiper-button-prev.second-btn',
        },
    });
    mySwiper4.slideTo(4, false,false);
    mySwiper4.on('slideChange', function () {
        $('.swiper-slide-next').next().next().addClass('hide')
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
        // freeMode: true,
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
        console.log(fileName);
        $(this).parent().parent().find('.register-form-img').attr('src', 'img/' + fileName);
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


    //input hover
    // $('.login-form-input').hover(function(){
    //     if(!$(this).is(':focus')) {
    //         $(this).parent().find('.login-form-title').addClass('active');
    //     }
    // },function(){
    //     $(this).parent().find('.login-form-title').removeClass('active');
    // });
    // $('.login-form-input').click(function(){
    //     $(this).parent().find('.login-form-title').removeClass('active');
    // });

    //card mask
    // $('.login-form-input_card').mask("9999 9999 9999 9999");

    //phone mask

    // $('.purchase-form-phone').mask("(99) 99 99 99");

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

    //gallery grid

    var $grid = $('.gallery-main').masonry({
        itemSelector: '.gallery-item',
        percentPosition: true,
        gutter: 30

    });

    var $grid2 = $('.account-fifth-main').masonry({
        itemSelector: '.gallery-item',
        percentPosition: true,
        gutter: 110

    });
    //
    // var $grid3 = $('.blog-main').masonry({
    //     itemSelector: '.gallery-item',
    //     percentPosition: true,
    //     gutter: 30
    //
    // });

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

    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0", offset: "0"}});
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

    //sticky tabs
    function stickyTabs() {
        var controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0", offset: "0"}});
        if ($('.account-right').length > 0) {
            var heightDuration3 = $('.account-left-item.active').outerHeight() - $('.account-right-sticky').height();
        }
        if (heightDuration3 < 1) {
            heightDuration3 = 1;
        }

        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".account-right-sticky", // point of execution
            duration: heightDuration3, // pin element for the window height - 1
            reverse: true // allows the effect to trigger when scrolled in the reverse direction
        })
            .setPin(".account-right-sticky") // the element we want to pin
            .addTo(controller3);
    }
    // stickyTabs();

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
        $(this).addClass('active').siblings().removeClass('active');
        $('.account-left-item').eq(tabIndex + 1).addClass('active').siblings().removeClass('active');
        checkTabHeight();
        checkFormHeight();
        // stickyTabs();

        if($('.account-fifth').hasClass('active')) {
            // hide new item after 3 second
            setTimeout(function(){
                $('.account-fifth-overlay').addClass('hide');
            }, 2500);
        }
    });

    function checkTabHeight(){
        var tabHeight = $('.account-left-item.active').outerHeight();
        $('.account-left').height(tabHeight);
    }
    checkTabHeight();

    //tabs calendar
    $('.account-third-tabs-link').click(function(e){
       e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active');
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
        console.log(formHeight)
    }
    // checkFormHeight();

    $('.account-sixth-btn').click(function(e){
        e.preventDefault();
        $('.account-sixth-change-item').eq(0).removeClass('active').next().addClass('active');
        checkFormHeight();
        setTimeout(function(){
            checkTabHeight();
        });

    });

    $('.account-sixth-form').submit(function(e){
        e.preventDefault();
        $('.account').hide();
        $('.payment-popup').addClass('active');
        $(window).scrollTop(0);
    });

});
$('.register-left-scroll').scroll(function(){
    $('.register-left-scrolling').addClass('hide');
    $('.register-main').addClass('active');
    $('.package').slideDown();
});

$(document).mouseup(function (e) {
    var container = $(".delete-popup-content");
    if (container.has(e.target).length === 0){
        $('.delete-popup').removeClass('active');
        bodyUnfreezeScroll()
    }
});