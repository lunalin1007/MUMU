document.getElementById("scroll").addEventListener("click", function() {
    var target = document.getElementById("news")
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"});
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 每次顯示幾張 slide
    spaceBetween: 30, // 每張 slide 之間的距離
    centeredSlides: true, // 中央對齊
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