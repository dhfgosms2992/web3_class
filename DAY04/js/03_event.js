// 문서 준비 이벤트

$(function() {
    // 이벤트 처리 메서드
    //  -on('이벤트 타입' , 이벤트 헨들러(콜백함수))
    // * 이벤트 타입 : click , keyup , change .........
    // * 이벤트 핸들러 : 이벤트 발생시, 실행될 함수

    // 클릭 이벤트(click)
    $('#item1').on('click' , function(){
        $('#item1').css('color', 'hotpink')
    })

    //this : 헌재 선택한 요소를 가리키는 키워드
    $('#item2').on('click' , function(){
        $(this).css('color', 'hotpink')
    })

    $('#item3').on('mouseover' , function(){
        $(this).css('color', 'hotpink')
        $(this).css('background', 'royalblue')
    })


    $('#item3').on('mouseout' , function(){
        $(this).css('color', 'white')
        $(this).css('background', '#3498db')
    })

    // 메서드 체인
    $('#item4')
        .on('mouseover' , function(){
        $(this).css('color', 'hotpink')
        $(this).css('background', 'royalblue')
        })
        .on('mouseout' , function(){
            $(this).css('color', 'white')
            $(this).css('background', '#3498db')
    })



    $('#item5')
        .on('mouseover' , function(){
        $(this).css('color', 'hotpink')
        $(this).css('background', 'royalblue')
        })
        .on('mouseout' , function(){
            $(this).css('color', 'white')
            $(this).css('background', '#3498db')
        })
        .on('click' , function(){
            $(this).css('color', 'purple')
            $(this).css('background', 'cornflowerblue')
        })
        .on('dbclick' , function(){
            $(this).css('color', 'red')
            $(this).css('background', 'black')
        })
})