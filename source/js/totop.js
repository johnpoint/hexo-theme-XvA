var timer = null;
function totop() {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            scrollTo(0, oTop - 50);
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
};

$('.totop')[0].style.display = "none";

var topstatus = 0;
window.onscroll = function (e) {
    scrollFunc();
    if (scrollDirection == 'up') {
        if (isInViewPortOfOne($('.totop')[0]) && topstatus == 1) {
            topstatus = 0;
            $('.totop')[0].style.display = "";
        }
    }
    if (scrollDirection == 'down') {
        if (isInViewPortOfOne($('.totop')[0]) && topstatus == 0) {
            topstatus = 1;
            $('.totop')[0].style.display = "none";
        }
    }
}