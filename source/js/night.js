var c = document.cookie.split(';');
for (let index = 0; index < c.length; index++) {
    c[index] = c[index].split('=')
};
var darkmode = "";
for (let index = 0; index < c.length; index++) {
    if (c[index][0].replace(' ', '') == "darkmode") {
        darkmode = c[index][1].replace(' ', '');
    }
};
function daynight() {
    if (darkmode == "day") {
        darkmode = "night";
        document.cookie = "darkmode=night;path=/;";
        $('body').addClass('night');
        $('html').addClass('night');
        $('.icon-moon')[0].style.display = "none";
        $('.icon-Sun')[0].style.display = "";
    } else {
        darkmode = "day";
        document.cookie = "darkmode=day;path=/;";
        $('body').removeClass('night');
        $('html').removeClass('night');
        $('.icon-moon')[0].style.display = "";
        $('.icon-Sun')[0].style.display = "none";
    }
};
if (darkmode == "") {
    darkmode = "day";
    $('.icon-moon')[0].style.display = "none";
} else {
    if (darkmode == "night") {
        $('body').addClass('night');
        $('html').addClass('night');
        $('.icon-moon')[0].style.display = "none";
    } else {
        $('.icon-Sun')[0].style.display = "none";
    }
}