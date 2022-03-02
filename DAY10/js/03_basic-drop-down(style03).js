// 메인메뉴 - 마우스 클릭 이벤트

$(function () {
    // .on('click', function(){})
    // .on('이벤트타입' ,function(){})
    
    $('.mainmenu').on('click', function(){
        // 한메뉴당
        $(this).children('.submenu').stop().slideToggle(500)
        // 전체 메뉴
        // $('.submenu').stop().slideToggle(500)
    })
})