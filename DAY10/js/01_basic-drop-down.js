//  문서준비 이벤트

$(function () {
    // 메인메뉴 - 마우스 올렸을때, 이벤트
    $('.mainmenu').on('mouseover' , function() {
        /* 애니메이션 효과를 줄때는 
        이전에 발생한 이벤트를 멈추기위해서 반드시 .stop() 실행*/
        $(this).children('.submenu').stop().slideDown(800)
    })

    // 메인메뉴 - 마우스 벗어날 때, 이벤트
    $('.mainmenu').on('mouseout' , function() {
        $(this).children('.submenu').stop().slideUp(800)
    })
})