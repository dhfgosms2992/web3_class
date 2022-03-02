// 문서준비 이벤트  전체 메뉴 슬라이드업 다운

$(function () {
     $('.mainmenu').on('mouseover' , function() {
        //  메인메뉴의 모든 서브메뉴
         $('.submenu').stop().slideDown(800)
     })

     //  메인메뉴의 모든 서브메뉴
     $('.mainmenu').on('mouseout' , function() {
        $('.submenu').stop().slideUp(800)
    })
})