// 문서준비 이벤트

$(function (){
    // 메인 메뉴 - 마우스 올렸을때, 이벤트
    $('.mainmenu').on('mouseover' , function(){
        let index = $(this).index()
        let no = index + 1
        // alert(no)
        $('.submenu:nth-of-type(' + no +')').addClass('active')
    })

    $('.submenu').on('mouseover' , function(){
        // this 현재 클릭한 부분만 active 
        $(this).addClass('active')
    })

    // 메인메뉴 - 마우스 벗어날때, 이벤트
    $('.mainmenu').on('mouseout' , function(){
        $(this).removeClass('active')
        $('.submenu').removeClass('active')
    })


    $('.submenu').on('mouseout' , function(){
        $(this).removeClass('active')
    })
    

})