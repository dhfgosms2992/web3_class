$(function() {

    // 슬라이드 이미지이동에 따른 번호 표시  79 note
    // /   1 / 9 슬래시 표시
    let slide =  $('.slide-container')
    let slideCount = $('.slide').length /2
    // alert(slideCount)

    $('#currentSlide').text(1)
    $('#slideCount').text(slideCount)

    // 슬릭 슬라이드 시작!
    $('.slide-container').slick({
        dots: true,                    // 동그란 버튼 네비게이션
        arrows: true,                  // 화살표 여부


        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:1000,                      // 슬라이드가 전환되는 시간

        variableWidth : true,             // 가변 적인 가로 사이즈 여부


        // centerMode: true,            // 센터 모드
        centerPadding: '0px',       // 센터 모드 시, 내부여백
        slidesToShow: 2,                // 보여질 슬라이드 개수
        slidesToScroll: 2,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤


        /* 효과 */
        // fade: true,
        // cssEase: 'linear',  // 일정한 속도로 


        // 네비게이션 화살표 커스텀
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></btton>',


        /* 반응형 */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
    
        ],


        // 네비게이션 닷츠 
        // 각 이미지  번호 표시  1 ~ 9   customPaging
         customPaging : function(slider, i){
            //  1 2 3 4 5 = .index() -1
             let no = $(slider.$slides[i]).index() -1
             let span = '<span class="nav-btn">' + no + '</span>'
             return span
         }

    })
     // /   1 / 9 슬래시 표시

     let pageGap = 0
    slide.on('afterChange' ,function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
        // 1 3 5 7 9
        let no = currentSlide + 1
        // 0.5 1.5 2.5 3.5 4.5  // 반올림
        no = Math.round( no / 2 )
        $('#currentSlide').text(no)
    })

})