// 문서 준비 이벤트
$(function () {


    let status = 'off'
     
    // active 라는 가상 클래슬를 주어서 

    // 메인 메뉴 - 마우스 올렸을 때, 이벤트
    $('.mainmenu').on('mouseover', function() {
        let index = $(this).index()
        let no = index+1
        $(this).addClass('active')
        
        if( status == 'on' ){
            /* 만약에  submenu  에 status = 'on' 이 될때 
            높이에 transition 값을 none 으로 초기화*/
            $('.submenu').css({'transition' : 'none'});
        } 
        else {
            $('.submenu').css({'transition' : 'height 1s'});
        } 
        $('.submenu:nth-of-type(' + no + ')').addClass('active')
      
        status = 'on'
    })
    
    $('.submenu').on('mouseover', function() {
        $(this).addClass('active')
        status = 'on'
    })
    
    
    // 메인 메뉴 - 마우스 벗어날 때, 이벤트
    $('.mainmenu').on('mouseout', function() {
        $(this).removeClass('active')
        $('.submenu').removeClass('active')
        // status = 'off'

    })

    $('.submenu').on('mouseout', function() {
        $(this).removeClass('active')
        status = 'off'
    })



})