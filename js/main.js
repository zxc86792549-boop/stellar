AOS.init({
    duration: 1000, //1초
    dealy: 0,
});

//popup
$(".close_01").click(function () {
    $(".main_popup_01").fadeOut()
});
$(".close_02").click(function () {
    $(".main_popup_02").fadeOut()
});


//visual
const visual_list = new Swiper(".visual_list", {
    autoplay: { // 자동슬라이드
        delay: 3000, // 3초 대기시간
        disableOnInteraction: false, //스와이프 후 자동 재생 비활성화 되지 않음
    },
    pagination: { // 동그라미 이동방향
        el: ".swiper-pagination",
        type: "bullets", //버튼 종류 설명 "bullets" | "fraction" | "progressbar"
        clickable: true, // 버튼 클릭 여부
    },
    speed: 3000, // 슬라이드가 넘어갈때 속도0.3초 (기본값)
    loop: true, // 기본값 false (슬라이드 반복)
});

//intro
window.addEventListener('scroll', function () {
    const logo = document.getElementById('logo');
    if (window.scrollY > 50) {
        logo.src = "logo.png";
    } else {
        logo.src = "logo_05.png";
    }
});

//point
const point_list = new Swiper(".point_list", {
    autoplay: { // 자동슬라이드
        delay: 3000, // 3초 대기시간
        disableOnInteraction: false, //스와이프 후 자동 재생 비활성화 되지 않음
    },
    pagination: { // 동그라미 이동방향
        el: ".swiper-pagination",
        type: "bullets", //버튼 종류 설명 "bullets" | "fraction" | "progressbar"
        clickable: true, // 버튼 클릭 여부
    },
    speed: 2000, // 슬라이드가 넘어갈때 속도0.3초 (기본값)
    loop: true, // 기본값 false (슬라이드 반복)
});

//rooms
const rooms_list01 = new Swiper(".rooms_list01", {
    navigation: { // 양옆에 < >
        nextEl: ".swiper-button-next", //다음버튼
        prevEl: ".swiper-button-prev", //이전버튼
    },
    loop: true, // 기본값 false (슬라이드 반복)
})
const rooms_list02 = new Swiper(".rooms_list02", {
    navigation: { // 양옆에 < >
        nextEl: ".swiper-button-next", //다음버튼
        prevEl: ".swiper-button-prev", //이전버튼
    },
    loop: true, // 기본값 false (슬라이드 반복)
})
const rooms_list03 = new Swiper(".rooms_list03", {
    navigation: { // 양옆에 < >
        nextEl: ".swiper-button-next", //다음버튼
        prevEl: ".swiper-button-prev", //이전버튼
    },
    loop: true, // 기본값 false (슬라이드 반복)
})

//special
const special_list = new Swiper(".special_list", {
    autoplay: { // 자동슬라이드
        delay: 2000, // 3초 대기시간
        disableOnInteraction: false, //스와이프 후 자동 재생 비활성화 되지 않음
    },
    slidesPerView: 1.5,
    breakpoints: {
        750: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    spaceBetween: 30, // 슬라이드 사이 간격 (단위:px)});
    centeredSlides: true, //기본값 false
    speed: 3000, // 슬라이드가 넘어갈때 속도0.3초 (기본값)
    loop: true, // 기본값 false (슬라이드 반복)
});


//banner
$(".banner_list ul li").eq(0).fadeIn();
let num = 0;
setInterval(() => {
    if (num < 3) {
        num++;
    } else {
        num = 0;
    }
    $(".banner_list ul li").eq(num).fadeIn().siblings().fadeOut();
}, 3000);

