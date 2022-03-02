// 메인메뉴 - 마우스 클릭 이벤트

$(function () {
    // .on('click', function(){})
    // .on('이벤트타입' ,function(){})
    
    

    $('.mainmenu').on('click', function(){
        let index = $(this).index()
        // alert(index)
        let no = index + 1    
        // // 전체 메뉴
        // $('.submenu').stop().slideToggle(500)
        // 제이쿼리에서 css 적용법 .css({'display':'none'}) ex
        // 현재 위치에서 다른 메뉴를 넘어갈때 .stop().slideUp(50) 이용해 겹치지 않게 실행
         $('.submenu').stop().slideUp(500)
         $('.submenu:nth-of-type('+ no +')').stop().slideToggle(700)

    })







})