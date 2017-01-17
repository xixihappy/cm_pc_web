$(function () {
    // 中和应泰跑马灯
    $("#recruitlist").slide({mainCell: ".als-wrapper", effect: "leftLoop", autoPlay: false});
    $('.pagination a').click(function () {
        $(this).siblings().removeClass('active1');
        $(this).addClass('active1');
        console.info(this);
        if ($(this).hasClass('left_arrow')) {
            $(this).siblings().removeClass('left_active');
            $(this).siblings().removeClass('right_active');
            $(this).addClass('left_active');
        } else {
            $(this).siblings().removeClass('right_active');
            $(this).siblings().removeClass('left_active');
            $(this).addClass('right_active');
        }
    });
});