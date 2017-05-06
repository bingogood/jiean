/*
 * @Author: MingYuan
 * @Date:   2017-03-17 16:50:50
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-03-27 16:28:09
 */

'use strict';
$(function() {
    /*banner动画*/
    var mySwiper = new Swiper('.banner-container', {
        autoplay: 5000,
      	 loop: true,
        speed: 1000,
        grabCursor: true,
        eventTarget: 'banner-container',
        pagination: '.pagination',
        paginationClickable: true,
        paginationElement: 'a',
        onSlideChangeStart: function(swiper) {
            $(".swiper-slide").find('img').removeClass('animated bounceInDown');
            $(".swiper-slide").find('a').removeClass('animated customFadeInUp');
            $(".swiper-slide").find('.banner-icon').removeClass('animated click');
            $(".swiper-slide").eq(mySwiper.activeIndex).find('img').addClass('animated bounceInDown');
            $(".swiper-slide").eq(mySwiper.activeIndex).find('a').addClass('animated customFadeInUp');

            $(".swiper-slide").eq(mySwiper.activeIndex).find('.banner-icon').addClass('animated click');
        },
        onTouchMove: function(swiper) {
            $(".swiper-slide").each(function() {
                if (!$(this).hasClass('swiper-slide-active')) {
                    $(this).find('img').hide();
                    $(this).find('.banner-icon').hide();
                }
            });
        },
        onTouchEnd: function(swiper) {
            $(".swiper-slide").each(function() {
                $(this).find('img').show();
                $(this).find('.banner-icon').show();
            });
        },
        onSlideChangeEnd: function(swiper) {
            mySwiper.startAutoplay();
        }

    })

    /*选项卡动画*/
    var tabsSwiper = new Swiper('.tab-container', {
        speed: 500,
        onSlideChangeStart: function() {
            $(".tabframe a.active").removeClass('active')
            $(".tabframe  a").eq(tabsSwiper.activeIndex).addClass('active')
        }
    })
    $(".tabframe a").on('touchstart mousedown', function(e) {
        e.preventDefault()
        $(".tabframe .active").removeClass('active')
        $(this).addClass('active')
        tabsSwiper.swipeTo($(this).index())
    })
    $(".tabframe a").click(function(e) {
        e.preventDefault()
    })

    function getTop() {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if (top < 600) {
            $(".rightside-wrapper").css("top", "600px")
        }
    }
    getTop();
    /*返回顶部*/
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失

    $(window).scroll(function() {
        /*if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(1500);
        } else {
            $("#back-to-top").fadeOut(1500);
        }*/
        getTop();
    });

    //当点击跳转链接后，回到页面顶部位置

    $("#back-to-top").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


});

