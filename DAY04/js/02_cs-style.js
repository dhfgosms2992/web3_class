//  문서 준비 이벤트
// $(function(){

//})


$(function(){
    // $('선택자').css('스타일','속성자')
    $('#item1').css('color','red')

    $('#item2 .inner').css('transform','rotate(45deg)')

    $('#item3 .inner').css('opacity','0.5')

    // 여러개의 스타일 속성을 지정할때,
    /*
       {
           '스타일1' : '속성값1',
           '스타일2' : '속성값2',
           '스타일3' : '속성값3',
       }
    */
//    따옴포를 붙이면, 케밥케이스 ('-' 을 사용한 규칙)
    $('#item4 .inner').css({
        'color' : 'hotpink',
        'font-size' : '50px',
        'border' : '1px solid blue',
        'width' : '400px',
        'height' : '400px',
        'line-height' : '400px'
    })

//    따옴포를 붙이면, 카델 케이스 (2번째 단어부터 첫글자 대문자)
    $('#item5 .inner').css({
         color : 'black',
         fontSize : '50px',
        border : '1px solid blue',
        width : '400px',
        height : '400px',
        lineHeight : '400px'
    })
})