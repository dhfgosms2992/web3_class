
/**************************** 
 무브 슬라이드

    가운데를 중심으로 이동하는 이미지 슬라이드 (센터모드)

    1. 이전 버튼
    2. 다음 버튼
    3. 네비게이션
    4. 페이드 인/아웃
    5. 자동 재생    (마우스 오버시 멈춤)
    
**************************** */


//  자동 재생 멈춤 여부
let pause = false


// 문서준비 이벤트
$(function(){
    // 1. 슬라이드 크기 계산 
    // - 슬라이드 영역 지정
    // 2. 이전 이미지 세팅
    // - 슬라이드를 절반으로 나누어서 앞으로 가져올 슬라이드 지정

    // 이미지 슬라이드
    let list = $('.slide-list') // <ul> : 이미지 슬라이드 박스
    let item = $('.slide-item') // <li> : 각 슬라이드 태그를 노드 리스트로 가져옴

    // 현재 슬라이드 위치/인텍스
    let currentNo = 1
    let currentIndex = 0
    let currentPosition = 0  // 왼족으로부터 떨어진 위치 (left)


    // <li> 태그들의 가로/세로/개수
    let slideWidth = item.width()  // 슬라이드 가로크기 함수 width()
    let slideHieight = item.height() // 슬라이드 세로크기 함수 height()

    let slideCount = item.length // 슬라이드 개수 변수 length

    // 1. 슬라이드의 크기 계산
    // - 슬라이드 영역 지정
    // - 슬라이드크기  : 각 슬라이드 가로 크기 X 슬라이드 개수
    let totalSlideWidth = slideWidth * slideCount
    //  2050px  totalSlideWidth +50 = (50 은 고정값)
    list.css ({width : totalSlideWidth + 50}) 

    // 2. 이전 이미지 세팅
    // - 슬라이드를 절반으로 나누어서 앞으로 가져올 슬라이드 지정
    // - 앞으로 가져올 슬라이드 개수
    //  : 5 / 2 = 2.5, parseInt(2.5) --(정수)--> 2
    let initNum = parseInt(slideCount/2)

    for( let i = 0; i < initNum; i++){
        // A.prependTo(B) : A를 부모요소(B) 의 가장 첫번째 자식 요소로 추가
        $('.slide-item:last-child').prependTo(list)
    }

    // 3.  슬라이드 위치 조정
    // 현재 위치 -= (각 슬라이드크기) * (앞으로 가져온 슬라이드 개수)
    //           -=     (400    *    2)
    //  현재 위치 = -800px (왼쪽으로 끌려간다)
    currentPosition -= slideWidth * initNum
    list.css({left : currentPosition})
               
    // 4. 페이지 네비게이션
    // 슬라이드 개수만큼  점의 요소를 생성
    for (let i = 0; i < slideCount; i++) {
        let dot = "<a href='#' class='dot'></a>"
        $('.dots-box').append(dot)
    }

    // 첫번째 점을 active
    $('.dot:first-child').addClass('active')

    // 5. 페이드 인/아웃 활성화된 이미지를 제외한 나머지를 fade 처리
    // $('.slide-item').stop().animate({opacity : 0.2},1000)
    // $('.slide-item img').stop().css({filter : 'brightness(0.5)'},1000)

    // 페이드 아웃
    $('.slide-item img').addClass('bright-10')

    // (가운데-첫번째 슬라이드만) 페이드 인
    $('.slide-item:nth-child(' + (initNum+1) +') img').removeClass('bright-10')
    // 띄어쓰기ㅁimg (ㅁ 부분은 띄어쓰기) why 태그별로 나눠야하니까 ex ('.slide-item img')
    $('.slide-item:nth-child(' + (initNum+1) +') img').addClass('bright-100')


// ---------------------------------------------------------------------------------------------
//  에러 났던 코드 (수정)



// 6. 이전 버튼(◀) 클릭 이벤트

$('.prev').on('click', function() {
    // 1) 맨 오른쪽 슬라이드가 맨 왼쪽으로 이동
    // let currentPosition = 0
    // let slideWidth = item.width()  슬라이드 가로크기 함수 width()
    // 맨 오른쪽 스라이드가 맨 왼쪽으로 움직이면서 순환해야하기때문에 
    // currentPosition -= slideWidth  만큼 뻄
    currentPosition -= slideWidth 
    list.css({left : currentPosition})
    $('.slide-item:last-child').prependTo(list)

    // 2) 슬라이드 전체가 오른쪽 ◀ button  클릭시 왼쪽으로 슬라이드구동 1초당
    currentPosition += slideWidth
    // list = let list = $('.slide-list')
    list.stop().animate({left : currentPosition},1000)

    // 3) 페이드  인/아웃
    // .slide-item img 에 addclass 로추가된 css 로스타일을 준  bright10 를 추가해서 적용
    $('.slide-item img').addClass('bright-10')
    $('.slide-item:nth-child('+ (initNum+1) +') img').removeClass('bright-10')

    $('.slide-item:nth-child('+ (initNum+1) +') img').addClass('bright-100')
    $('.slide-item img').removeClass('bright-100')

    // 페이지 네비게이션  클릭시 클릭한 위치에 맞는 점 위치  
    if(currentNo == 1){
        // let currentNo = 1
        // let slideCount = item.length // 슬라이드 개수 변수 length
        currentNo = slideCount
    } else {
        currentNo --
    }
    // let currentIndex = 0
    currentIndex = currentNo -1 

    // 슬라이드를 넘길때마다 .dot 가상 클래스인 active 가 지워진다
    $('.dot').removeClass('active')
    $('.dot:nth-child('+ currentNo +')').addClass('active')
    

    })



    // -----------------------------------------------------------------------
    //  7. 다음 버튼(▶) 클릭 이벤트
    $('.next').on('click' , function(){
        //  1) 맨 왼쪽 슬라이드가 맨 오른 쪽으로 이동한다.
        // let currentPosition = 0
        // let slideWidth = item.width()  슬라이드 가로크기 함수 width()
        // 맨 왼쪽 슬라이드가 맨 오른으로 움직이면서 순환해야하기때문에 
        // currentPosition += slideWidth  만큼 오른쪽으로 이동
        currentPosition += slideWidth
        // list = let list = $('.slide-list')
        list.css({left: currentPosition})
        $('.slide-item:first-child').appendTo(list)

        // 2) 슬라이드 전체가 왼쪽으로 이동한다.
        currentPosition -= slideWidth
        list.stop().animate({left: currentPosition},1000)

        // 3) 페이드 인/아웃
        $('.slide-item img').addClass('bright-10')
        $('.slide-item:nth-child('+ (initNum+1) +') img').removeClass('bright-10')

        $('.slide-item:nth-child('+ (initNum+1) +') img').addClass('bright-100')
        $('.slide-item img').removeClass('bright-100')


        // 페이지 네비게이션  클릭시 클릭한 위치에 맞는 점 위치 
        // let slideCount = item.length  슬라이드 개수 변수 length 
        if(currentNo == slideCount){
            currentNo = 1
        } else {
            currentNo ++
        }
        // let currentIndex = 0
        currentIndex = currentNo - 1 

        //  클릭한 dot 위치 표시 ○ = active 시 -> ●
        $('.dot').removeClass('active')
        $('.dot:nth-child('+ currentNo +')').addClass('active')

    })

    // 8. 페이지 네비게이션 클릭 이벤트 (.dot)
    $('.dot').on('click' , function(){
        //  현재(.dot) 선택한 네비게이션 Index 
        let index = $(this).index() // this = .dot // index() 함수  

        // 클릭한 위치와 현재 위치의 차이
        // 3 - 1 = 2 (다음) 오른쪽
        // 1 - 3 = -2 (이전) 왼쪽
        // gap 절대값 let currentIndex = 0 (index 0 번째)
        let gap = index - currentIndex
        
        /*Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다. 
        x가 양수이거나 0이라면 x를 리턴하고, 
        x가 음수라면 x의 반대값, 즉 양수를 반환합니다.*/
        let absGap = Math.abs(gap)

        // 음수 방향  ◀ (왼쪽)
        if( gap < 0 ) {
            currentPosition -= (slideWidth*absGap)
            list.css( { left : currentPosition} )

            for (let i = 0; i < absGap; i++) {
                $('.slide-item:last-child').prependTo(list)
            }

            currentPosition += (slideWidth*absGap)
            list.animate({ left : currentPosition}, 1000)
        }


        // 양수 방향 ▶ (오른쪽)
        if( gap > 0 ) {
            currentPosition += (slideWidth*absGap)
            list.css( { left : currentPosition} )

            for (let i = 0; i < absGap; i++) {
                $('.slide-item:first-child').appendTo(list)
            }

            currentPosition -= (slideWidth*absGap)
            list.animate({ left : currentPosition}, 1000)
        }


        // 이동한 위치의 인덱스로 초기화
        currentIndex = index
        currentNo = currentIndex + 1

        //  페이드 인/아웃
        $('.slide-item img').addClass('bright-10')
        $('.slide-item:nth-child('+ (initNum+1) +') img').removeClass('bright-10')

        $('.slide-item:nth-child('+ (initNum+1) +') img').addClass('bright-100')
        $('.slide-item img').removeClass('bright-100')

        // 클릭하 dot 위치 표시 ○ = active 시 -> ●
        $('.dot').removeClass('active')
        $('.dot:nth-child(' + currentNo + ')').addClass('active')

    })

    // 9. 자동재생
    let timer = setInterval( function(){
        // 요소.trigger(이벤트 타입)
        // -요소에 이벤트를 강제 발생시키는 메서드
        if (!pause){
            $('.next').trigger('click')
        }
    },3000)

    //  슬라이드 위에 mouseover 시 멈춤 
    $('.slide-list, btn-box, dots-box').on('mouseover', function(){
        // let pause = false
        pause = true
    })



    //  슬라이드 위에 mouseout 시 다시 작동
    $('.slide-list, btn-box, dots-box').on('mouseout', function(){
        // let pause = false
        pause = false
    })


})