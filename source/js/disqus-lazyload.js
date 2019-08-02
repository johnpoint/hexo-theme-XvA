window.onscroll = function (e) {
    scrollFunc();
    if (scrollDirection == 'down') {
        if (isInViewPortOfOne($('#disqus_thread')[0]) && status == 0) {
            disqusload();
            status = 1;
            $('#loaddisqus')[0].innerText = "";
        }
    }
}