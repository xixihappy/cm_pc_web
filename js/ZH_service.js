$(function () {
  // 中和应泰跑马灯
  $("#serviec").als({
    visible_items: 1, //可见个数
    scrolling_items: 1, //每次滚动个数
    orientation: "horizontal", //滚动方向
    circular: "yes", //是否循环滚动
    autoscroll: "no", //自动播放
    interval: 5000, //滚动间隔时间
    speed: 500, //滚动动画速度
    easing: "linear", //动画效果
    direction: "right", //滚动方向
    start_from: 0 //初始化索引，从0开始
});
  $('.pagination a').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    console.info(this);
  });
})
