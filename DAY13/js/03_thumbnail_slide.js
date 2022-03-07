//  슬라이드 순서 번호

let slideIndex = 1;

// 문서 준비 이벤트
$(function(){
    // 슬라이드 쇼 실행
    showSlides(slideIndex)
})

// 슬라이드 함수 ()
// : n 번째 이미지를 보여준다
function showSlides(n){
    let slides = $('.myslides') // 각각의 슬라이드들
    let dots = $('.dot')       // 썸네일 이미지들  
    let captionText = $('#caption') // 이미지 제목


    // 슬라이드가  맨 마지막 도달
    // - 슬라이드 번호를 1번으로
    // slides/length : 슬라이드 개수
    if (n > slides.length){
        slideIndex = 1
    } 
    
    // 슬라이드가 맨 앞으로 도달하는경우
    // - 슬라이드 번호를 마지막으로
    if (n < 1){
        slideIndex = slides.length
    }
    
    // 모든이미지를 숨김 
    slides.css({'display' : 'none'})

    // 활성화된 썸네일을 비활성화
    dots.removeClass('active')

    
    // 선택한 번호의 슬라이드만 보여주기
    // slideIndex-1 = 배열의 첫번째 시작은 0 번째 부터이기때문에
    $( slides[slideIndex-1] ).css({'display' : 'block'})

    // 선택한 번호의 썸네일 활성화
    // $( dots[slideIndex-1] ).css({'opacity' : 1})
    $( dots[slideIndex-1] ).addClass('active')

    // 이미지 제목 갱신
    // attr()   : 속성 값을 가져오는 메서드
    captionText.text( $(dots[slideIndex-1]).attr('alt') )
}

// 썸네일 클릭 (밑에 작은 이미지)
function slide(n) {
    // function slide(n)  -> onclick="slide()" n 번째는 번호
    slideIndex = n
    showSlides(slideIndex)
}

// 화살표 클릭
function move(n) {
    slideIndex += n
    showSlides(slideIndex)

}