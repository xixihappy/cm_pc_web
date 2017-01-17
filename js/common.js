$(function () {
  // 各个页面中财务等的tab切换
  $('.tab div').click(function () {
    var index=$(this).index();
    var $rect=$(this).find('span');
    var $hasactive=$rect.parents().siblings().find('span');
    console.info(index);
    $hasactive.removeClass('rect_active');
    $rect.addClass('rect_active');
    $('.container_main').eq(index).siblings().removeClass('show');
    $('.container_main').eq(index).addClass('show');
  })
})