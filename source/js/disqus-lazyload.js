function isInViewPortOfOne(el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    // 这里有个+100是为了提前加载+ 100
    return top <= viewPortHeight + 100
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
var check = async function () {
    while (true) {
        if (isInViewPortOfOne($('#disqus_thread')[0]) && status == 0) {
            disqusload();
            status = 1;
            $('#loaddisqus')[0].innerText = "";
            break;
        }
        await sleep(1000);
    }
}
check();