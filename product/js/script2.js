$(function () {
    $(window).resize(function () {
        var width = $(window).width();

        if (width >= 768) {
            $(window).scroll(function () {
                if ($(this).scrollTop() < 59) { //113
                    $("header.down").css("display", "none");
                } else {
                    $("header.down").css("display", "block");
                }
            });
        } else if (width < 768) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 60) {
                    $(".menuTopMobile").css("display", "none");
                    $(".boxHead").css("display", "block");
                } else {
                    $(".menuTopMobile").css("display", "none");
                    $(".boxHead").css("display", "block");
                }
            });
        }
    });
    $(window).trigger("resize"); //강제로 호출하는 함수

    $(function () {
        $(".tab1").addClass("tab1_o");
        $(".tab4").addClass("tab4_o");
        $(".tab1").hover(function () {
            $(".lotte").show();
            boxHead
            $(".gsfresh,.homeplus").hide();
            $(this).addClass("tab1_o");
            $(".tab2").removeClass("tab2_o");
            $(".tab3").removeClass("tab3_o");
        });
        $(".tab2").hover(function () {
            $(".gsfresh").show();
            $(".lotte,.homeplus").hide();
            $(this).addClass("tab2_o");
            $(".tab1").removeClass("tab1_o");
            $(".tab3").removeClass("tab3_o");
        });
        $(".tab3").hover(function () {
            $(".homeplus").show();
            $(".lotte,.gsfresh").hide();
            $(this).addClass("tab3_o");
            $(".tab1").removeClass("tab1_o");
            $(".tab2").removeClass("tab2_o");
        });
        $(".tab4").hover(function () {
            $(".now").show();
            $(".free").hide();
            $(this).addClass("tab4_o");
            $(".tab5").removeClass("tab5_o");
        });
        $(".tab5").hover(function () {
            $(".free").show();
            $(".now").hide();
            $(this).addClass("tab5_o");
            $(".tab4").removeClass("tab4_o");
        });

        $('.topSlide').slick({
            slide: 'div',
            centerMode: true,
            centerPadding: '465px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 300,
            prevArrow: "<button type='button' class='slick-prev1'>Previous</button>",
            nextArrow: "<button type='button' class='slick-next1'>Next</button>",
            responsive: [ // 반응형 웹 구현 옵션
                {
                    breakpoint: 1900, //화면 사이즈 1900px 미만일때
                    settings: {
                        centerPadding: '24.4vw'
                    }
                    },
                {
                    breakpoint: 1860, //화면 사이즈 1860px
                    settings: {
                        centerPadding: '23.8vw'
                    }
                    },
                {
                    breakpoint: 1760, //화면 사이즈 1760px
                    settings: {
                        centerPadding: '22.2vw'
                    }
                    },
                {
                    breakpoint: 1650, //화면 사이즈 1650px
                    settings: {
                        centerPadding: '20.5vw'
                    }
                    },
                {
                    breakpoint: 1550, //화면 사이즈 1650px
                    settings: {
                        centerPadding: '18.5vw'
                    }
                    },
                {
                    breakpoint: 1440, //화면 사이즈 1440px
                    settings: {
                        centerPadding: '16.2vw'
                    }
                    },
                {
                    breakpoint: 1300, //화면 사이즈 1440px
                    settings: {
                        centerPadding: '12.5vw'
                    }
                    },
                {
                    breakpoint: 1200, //화면 사이즈 1200px 미만일때
                    settings: {
                        centerPadding: '0vw'
                    }
                    }
                ]
        });
        $('.topSlideMobile').slick({
            slide: 'div',
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 300
        });
        $('.box1').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: false,
            arrows: true,
            speed: 300,
            prevArrow: "<button type='button' class='slick-prev2'>Previous</button>",
            nextArrow: "<button type='button' class='slick-next2'>Next</button>"
        });
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            speed: 200,
            prevArrow: "<button type='button' class='slick-prev3'>Previous</button>",
            nextArrow: "<button type='button' class='slick-next3'>Next</button>"
        });
        $('.menuTopMobile').slick({
            variableWidth: true,
            infinite: true,
            slidesToShow: 8,
            arrows: false,
        });

        $(".menuAllSmall").click(function () {
            $(".conDown").slideToggle();
        });
    });
    /* Scroll Top */
    $(document).scroll(function () {
        if ($(document).scrollTop() < 600) {
            $(".mainScrTop").css({
                'display': 'none'
            });
        } else {
            $(".mainScrTop").css({
                'display': 'block'
            });
        }
    });
    $(".mainScrTop").click(function () {
        $(document).scrollTop(0);
    });


    $('.homespContent').slick({
        slide: 'div',
        centerMode: true,
        centerPadding: '17.5vw',
        slidesToShow: 3,
        prevArrow: $('.homespPrev'),
        nextArrow: $('.homespNext'),
        centerMode: true,
        responsive: [{
            breakpoint: 1900,
            settings: {
                centerPadding: '15vw'
            }
        }, {
            breakpoint: 1650,
            settings: {
                centerPadding: '8vw'
            }
        }, {
            breakpoint: 1440,
            settings: {
                centerPadding: '5vw'
            }
        }]
    });

    $(".g9Slide").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        //아래 동그란 버튼 제거
        prevArrow: $('.g9Prev'),
        nextArrow: $('.g9Next')
        //button custom
    });

    /* Superdeal 좋아요 */
    $(".superdealContent .section").on("mouseover focus", function () {
        $(".superHeart .ri-heart-line").on("click", function () {
            $(this).css({
                'display': 'none'
            });
            $(this).next().css({
                'display': 'inline-block'
            });
        });
        $(".superHeart .ri-heart-fill").on("click", function () {
            $(this).css({
                'display': 'none'
            });
            $(this).prev().css({
                'display': 'inline-block'
            });
        });
    });

    /* Superdeal 필터링 */
    $("spAllShow").click(function () {
        $(".spChoice").show();
        $(".spSmile").show();
        $(".spFashion").show();
        $(".spNecessity").show();
        $(".spAppliance").show();
        $(".spFood").show();
        $(".sectionAd").show();
    });

    $(".spChoiceShow").click(function () {
        $(".spFashion").show();
        $(".spNecessity").hide();
        $(".spAppliance").show();
        $(".spFood").hide();
        $(".sectionAd").hide();
    });
    $(".spSmileShow").click(function () {
        $(".spFashion").hide();
        $(".spNecessity").show();
        $(".spAppliance").hide();
        $(".spFood").show();
        $(".sectionAd").hide();
    });
    $(".spFashionShow").click(function () {
        $(".spChoice").hide();
        $(".spSmile").hide();
        $(".spFashion").show();
        $(".spNecessity").hide();
        $(".spAppliance").hide();
        $(".spFood").hide();
        $(".sectionAd").hide();
    });
    $(".spNecessityShow").click(function () {
        $(".spChoice").hide();
        $(".spSmile").hide();
        $(".spFashion").hide();
        $(".spNecessity").show();
        $(".spAppliance").hide();
        $(".spFood").hide();
        $(".sectionAd").hide();
    });
    $(".spApplianceShow").click(function () {
        $(".spChoice").hide();
        $(".spSmile").hide();
        $(".spFashion").hide();
        $(".spNecessity").hide();
        $(".spAppliance").show();
        $(".spFood").hide();
        $(".sectionAd").hide();
    });
    $(".spFoodShow").click(function () {
        $(".spChoice").hide();
        $(".spSmile").hide();
        $(".spFashion").hide();
        $(".spNecessity").hide();
        $(".spAppliance").hide();
        $(".spFood").show();
        $(".sectionAd").hide();
    });

    /* Footer _모바일 */
    $(".mobInfo").click(function () {
        $(".mobFooterContent ul").toggle();
        $(".mobToggle1").toggle();
        $(".mobToggle2").toggle();
    });
});