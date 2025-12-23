
//depth2
$(".gnb>li").mouseenter(function () {
    $(this).find(".depth2").stop().slideDown();
});

$(".gnb>li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp();
});

//mgnb
$(".btn_ham").click(function () {
  $(".mgnb_wrap").fadeIn();
});
$(".btn_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});

//header.active
$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    let isActive = false;

    // 특정 섹션만 선택 (s2, s5)
    $(".intro, .rooms, .special, .map, .travel, .type, .reservat, .facility").each(function () {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            isActive = true;
        }
    });

    if (isActive) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
});
