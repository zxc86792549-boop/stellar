
//a_type
const type_img = new Swiper(".type_img", {
    navigation: { // 양옆에 < >
        nextEl: ".swiper-button-next", //다음버튼
        prevEl: ".swiper-button-prev", //이전버튼
    },
    loop: true, // 기본값 false (슬라이드 반복)
    autoplay: { // 자동슬라이드
        delay: 2000, // 3초 대기시간
    },
     pagination: { // 동그라미 이동방향
                el: ".swiper-pagination",
                type: "fraction", //버튼 종류 설명 "bullets(동그란모양)" | "fraction"(숫자) | "progressbar(진행 바)"
                clickable: true, // 버튼 클릭 여부
            },
});

const facility_visual = new Swiper(".facility_visual", {
     pagination: { // 동그라미 이동방향
                el: ".swiper-pagination",
                type: "fraction", //버튼 종류 설명 "bullets(동그란모양)" | "fraction"(숫자) | "progressbar(진행 바)"
                clickable: true, // 버튼 클릭 여부
            },
    loop: true, // 기본값 false (슬라이드 반복)
    autoplay: { // 자동슬라이드
        delay: 3000, // 3초 대기시간
    },
});


