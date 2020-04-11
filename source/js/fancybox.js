var status = 0;
$(document).ready(function() {
    $("img").each(function() {
        if ($(this).parent().hasClass("fancybox")) {
            return
        }
        if ($(this).hasClass("nofancybox")) {
            return
        }
        var alt = this.alt;
        if (alt) {
            $(this).after('<span class="caption">' + alt + "</span>")
        }
        $(this).wrap('<a href="' + ($(this).attr("data-src") == null ? this.src : $(this).attr("data-src")) + '" title="' + alt + '" class="fancybox"></a>')
    });
    $(this).find(".fancybox").each(function() {
        $(this).attr("rel", "article")
    })
});
$(document).ready(function() {
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr("rel", "gallery").fancybox({
        helpers: {
            title: {
                type: "inside"
            }
        }
    })
});
$(document).ready(function() {
    wrapImageWithFancyBox()
});

function wrapImageWithFancyBox() {
    $("img").not(".sidebar-image img").not("#author-avatar img").not(".mdl-menu img").not(".something-else-logo img").each(function() {
        var $image = $(this);
        var imageCaption = $image.attr("alt");
        var $imageWrapLink = $image.parent("a");
        var src = this.getAttribute("src");
        var idx = src.lastIndexOf("?");
        if (idx != -1) {
            src = src.substring(0, idx)
        }
        $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent("a");
        $imageWrapLink.attr("data-fancybox", "images");
        if (imageCaption) {
            $imageWrapLink.attr("data-caption", imageCaption)
        }
    });
    $().fancybox({
        selector: '[data-fancybox="images"]',
        thumbs: false,
        hash: true,
        loop: false,
        fullScreen: false,
        slideShow: false,
        protect: true,
    })
};