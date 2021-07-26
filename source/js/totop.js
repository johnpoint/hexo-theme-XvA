var timer = null;

console.log("XvA v1.0.2")

function totop() {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            scrollTo(0, oTop - 50);
            timer = requestAnimationFrame(fn)
        } else {
            cancelAnimationFrame(timer)
        }
    })
}

function judgeIfTop() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop == 0) {
        return true
    } else {
        return false
    }
}
if (judgeIfTop()) {
    $(".totop")[0].style.display = "none";
    var topstatus = 0
} else {
    $(".totop")[0].style.display = "";
    var topstatus = 1
}


var scroll = function() {
    if (judgeIfTop() && topstatus == 1) {
        $(".totop")[0].style.display = "none";
        topstatus = 0
    }
    if (!judgeIfTop() && topstatus == 0) {
        $(".totop")[0].style.display = "";
        topstatus = 1
    }
};

var waiting = false;
$(window).scroll(function() {
    if (waiting) {
        return;
    }
    waiting = true;

    scroll();

    setTimeout(function() {
        waiting = false;
    }, 800);
});