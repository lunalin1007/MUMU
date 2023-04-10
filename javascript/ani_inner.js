 

// 圖片

 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 每次顯示幾張 slide
    // spaceBetween: 30, // 每張 slide 之間的距離
    centeredSlides: true, // 中央對齊
    loop: true, //循環
    autoplay: true, // 自動輪播
    scrollbar: {
      el: ".swiper-scrollbar", // 指定要使用的滾動條
      draggable: true, // 滾動條是否可拖曳
      hide:true,
    },
    navigation: {
      nextEl: ".swiper-button-next", // 指定要使用的下一張按鈕
      prevEl: ".swiper-button-prev", // 指定要使用的上一張按鈕
    },
  });


// Q & A 

  // 將所有的 answer-toggle 元素加上 click 事件
 const answer_toggle = document.querySelectorAll('.answer-toggle');
 answer_toggle.forEach(function(answer_toggle){
     answer_toggle.addEventListener('click', function(){
         // 取得問題區塊和答案區塊
         const question_text = answer_toggle.querySelector('.question-text');
         const answer_text = answer_toggle.nextElementSibling;
         const btn = answer_toggle.querySelector(".btn");

         // 切換 -on class
         answer_toggle.classList.toggle('-on');
         answer_text.classList.toggle('-on');

         // 如果 -on class 被加上，就讓答案區塊的高度為自動，否則移除 max-height 屬性
         if (answer_toggle.classList.contains('-on')){
             answer_text.style.maxHeight = answer_text.scrollHeight + 'px';
             btn.classList.add("rotate");
         }else{
             answer_text.style.maxHeight = null;
             btn.classList.remove("rotate");
         };
     });
 });
 // 當瀏覽器視窗大小改變時，重設答案區塊的高度
 window.addEventListener('resize', function(){
     answer_toggle.forEach(function(answer_toggle){
         if (answer_toggle.classList.contains('-on')){
         const answer_text = answer_toggle.nextElementSibling;
         answer_text.style.maxHeight = answer_text.scrollHeight + 'px';
         };
     });
 });