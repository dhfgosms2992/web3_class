
$(function() {

    /* 
        스크롤의 방향 감지
        - 이전 스크롤 위치
        - 현재 스크롤 위치
        - 이동 크기
        - 최소 지점 (left)
        - 최대 지점 (left)
    */
    let prev = $(this).scrollTop            // 이전 스크롤 위치
    let move = 100                           // 텍스트 이동 크기
    let leftMin = -1200                     // 왼쪽 최대 지점
    let leftMax = 1200                      // 오른쪽 최대 지점

    // 스크롤 이벤트
    $(window).on('scroll', function() {
        let now = $(this).scrollTop()       // 현재 스크롤 위치
        // console.log(now)


        // 따라 다니는 플로팅 버튼
        $('.floating').stop().animate({'bottom': -now+15}, 300)

        // 스크롤 아래로 
        if( now > prev ) {
            $('header').slideUp()
        }
        // 스크롤 위로 
        else {
            $('header').slideDown()
        }
        
        // 플로팅 버튼 클릭 이벤트
        $('.floating').on('click', function() {
    
            // 스크롤 맨 위로 이동
            $('html').animate({'scroll-top' : 0}, 500)
        })
    
        //  마우스휠 스크롤 이벤트 (감지)
        $(window).on('mouseWheel' ,function(e){
            if (e.originalEvent.wheelDelta > 0){
                console.log('위')
            }else {
                console.log('아래')
            }
        })

        // scroll-title 인터렉션
        // 스크롤을 감지해서 왼쪽으로 움직입니다.
        let titleOffset = $('.scroll-title').offset()   // offset() 위치를 가져온다.
        let left = titleOffset.left
        // console.log 로 스크롤 작동시 택스트 (왼쪽에서부터) 떨어진 위치
        console.log(titleOffset.left)
        
         
            //  if (now > prev){
                //  스크롤 을 올릴시
            //      $('.scroll-title').animate({'left' : left-= 80}, 5)
            // } else {
                //  스크롤 내릴시
            //     $('.scroll-title').animate({'left' : left+= 80}, 5)
            // }
        

        /* 
            now 가 preve 보다 크고 left 가 leftMin 보다 크고
            now 가 0보다크고 now 가 1000보다는 작을때 왼쪽으로 -=move
        */
        if( now > prev && left > leftMin && now > 0 && now < 1000 ) {
            // move 크기는 80
            $('.scroll-title').animate({'left' : left-= move}, 5)
        }
        // 반대 오른쪽 += move
         else if( now < prev && left < leftMax && now < 1000 ) {
             // move 크기는 80
            $('.scroll-title').animate({'left' : left+= move}, 5)
        }

        prev = now
    })


})