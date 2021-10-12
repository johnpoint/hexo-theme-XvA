var c = document.cookie.split(";");
for (let index = 0; index < c.length; index++) {
    c[index] = c[index].split("=");
}
var darkmode = "";
for (let index = 0; index < c.length; index++) {
    if (c[index][0].replace(" ", "") == "darkmode") {
        darkmode = c[index][1].replace(" ", "");
    }
}

function daynight() {
    if (darkmode == "day") {
        darkmode = "night";
        document.cookie = "darkmode=night;path=/;";
        document.querySelector("body").addClass("night");
        document.querySelector("html").addClass("night");
        document.querySelectorAll(".icon-moon")[0].style.display = "none";
        document.querySelectorAll(".icon-Sun")[0].style.display = "";
    } else {
        darkmode = "day";
        document.cookie = "darkmode=day;path=/;";
        document.querySelector("body").removeClass("night");
        document.querySelector("html").removeClass("night");
        document.querySelectorAll(".icon-moon")[0].style.display = "";
        document.querySelectorAll(".icon-Sun")[0].style.display = "none";
    }
}
if (darkmode == "") {
    darkmode = "day";
    document.querySelectorAll(".icon-moon")[0].style.display = "";
    document.querySelectorAll(".icon-Sun")[0].style.display = "none";
} else {
    if (darkmode == "night") {
        document.querySelector("body").addClass("night");
        document.querySelector("html").addClass("night");
        document.querySelectorAll(".icon-moon")[0].style.display = "none";
    } else {
        document.querySelectorAll(".icon-Sun")[0].style.display = "none";
    }
}