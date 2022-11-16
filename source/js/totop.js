var timer = null;

const xvaversion = "v3.10.1"

console.log("XvA " + xvaversion)

let toc = [];

$(document).ready(function () {
    let l = document.querySelectorAll(".post-toc-link");
    for (i = 0; i < l.length; i++) {
        title = decodeURIComponent(l[i].hash).replace("#", "", 1);
        toc.push({
            id: i,
            title: title,
            top: $("#" + title)[0].offsetTop
        })
    }
    toc = toc.reverse();
});

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


var scroll = function () {
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
let nowToc = -1;
let tocColor = "";
try {
    tocColor = document.querySelectorAll(".post-toc-link")[0].style.color || '';
} catch (e) {
}

$(window).scroll(function () {
    if (waiting) {
        return;
    }
    waiting = true;

    nowTop = document.documentElement.scrollTop - 200;
    if (toc.length != 0) {
        let newToc = toc[toc.length - 1].id || 0;
        for (let x = 0; x < toc.length; x++) {
            if (toc[x].top < nowTop) {
                newToc = toc[x].id;
                break;
            }
        }
        if (nowToc != newToc) {
            nowToc = newToc
            for (let x = 0; x < toc.length; x++) {
                $(".post-toc-link")[x].style.color = tocColor;
            }
            document.querySelectorAll(".post-toc-link")[newToc].style.color = "red";
        }
    }


    scroll();

    setTimeout(function () {
        waiting = false;
    }, 100);
});