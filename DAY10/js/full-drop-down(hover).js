// 메인메뉴 - 마우스 클릭 이벤트

$(function () {
    // .on('click', function(){})
    // .on('이벤트타입' ,function(){})
    
    

    $('.mainmenu, .submenu').on('mouseover', function(){
        let indexDown = $(this).index()
        // alert(index)
        let down = indexDown + 1    
         $('.submenu:nth-of-type('+ down +')').stop().slideToggle(500)
         
    })



    $('.mainmenu, .submenu').on('mouseout', function(){
        let indexUp = $(this).index()
        // alert(index)
        let Up = indexUp + 1    
         $('.submenu:nth-of-type('+ Up +')').stop().slideToggle(500)
         
    })



    

})