// main.js
$(function () {
    //toggle 버튼
    $('#toggle-btn').click(function () {
        $('#gnb ul').slideToggle(300);
    });
    
    
    var imgNum = 0; //이미지 번호
    
     // 초기화
     $('.container img')
         .hide()
         .eq(0)
         .show();
    
    // 이미지 자동 전화
    setInterval(function(){
         imgNum++; // 이미지 번호 증가
         if(imgNum > 4) imgNum = 0;
         $('.container img')
         .fadeOut()
         .eq(imgNum)
        .fadeIn();
        },5000);

         //swiper 구동
    const swiper = new Swiper('.swiper', {
        // 옵션 값
        direction: 'horizontal', //  슬라이드 가로세로 - 인디케이터 위치
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

});

