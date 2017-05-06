document.write("<script  src='js/matchmedia.js'></script>");



/*设置字符串长度*/
function set_Chapter(str, len) {
    var sAr = str.match(/[^\x00-\xff]/ig);
    var strL = str.length + (sAr == null ? 0 : sAr.length);
    if (strL > len) {
        sArr = str.split("");
        m = 0; //字符宽度（中文为2，英文、数字为1）
        n = 0; //字符个数
        for (i = 0; i < sArr.length; i++) {
            if (m < len - 2) {
                var strA = sArr[i].match(/[^\x00-\xff]/ig); //判断是否为中文
                n += 1; //记录字符个数
                if (strA == null) {
                    m += 1; //否，字符宽度+1
                } else {
                    m += 2; //是，字符宽度+2
                }
            }
        }
        return str.substring(0, n) + '……';
    } else {
        return str;
    }
}

$(function() {
    function set_subNav() {
        if (matchMedia("screen and (max-width:1200px)").matches) {
            $(".main-nav li.level-1").each(function(index, element) {
                subNav = $(this).find(".subNav").text();
                if (subNav != "") {
                    $(this).children("a").attr("href", "javascript:void(0);");
                    $(this).children("a").click(function() {
                        $(this).parent("li.level-1").siblings("li.level-1").removeClass("active-nav");
                        $(this).parent("li.level-1").siblings("li.level-1").find(".subNav").slideUp();
                        var display_subNav = $(this).siblings(".subNav").css('display');
                        if (display_subNav == "none") {
                            $(this).parent("li.level-1").addClass("active-nav");
                            $(this).siblings(".subNav").slideDown();

                        } else {
                            $(this).siblings(".subNav").slideUp(200, function() {
                                $(this).parent("li.level-1").removeClass("active-nav");
                            });
                        }

                    })
                }
            });
        } else {
            $(".main-nav li.level-1").each(function(index, element) {
                href_value = $(this).children("a").attr("href_value");
                $(this).children("a").attr("href", href_value);
                $(this).hover(function() {
                    $(".subNav").css({
                        "display": "none"
                    });
                    $(this).addClass("active-nav");

                    $(this).find(".subNav").slideDown(500);
                }, function() {
                    $("ul.main-nav>li.level-1").removeClass("active-nav");
                    $(this).find(".subNav").slideUp(200);
                    $(".subNav").css({
                        "display": "none"
                    });
                })
            })
        }
    }
    set_subNav();


    set_width = 300;



    $("li.tree2>a").each(function() {
        strText_tree2 = $(this).text();
        $(this).text(set_Chapter(strText_tree2, 22));
        $(this).click(function() {
            var ul_tree3 = $(this).siblings("ul");
            if (ul_tree3.length > 0) {
                ul_tree3_display = ul_tree3.css("display");
                if (ul_tree3_display == "none") {
                    $(this).siblings("ul").slideDown(500);
                    $(this).parent(".tree2").addClass("tree2-on");
                } else {
                    $(this).siblings("ul").slideUp(500);
                    $(this).parent(".tree2").removeClass("tree2-on");
                }
            }
        })
    })
    $("li.tree3>a").each(function() {
        if ($(this).parent().hasClass("tree3-on")) {
            $(this).parents(".tree2").addClass("tree2-on");
        }
        strText_tree3 = $(this).text();
        $(this).text(set_Chapter(strText_tree3, 29));
        $(this).click(function() {
            var ul_tree4 = $(this).siblings("ul");
            if (ul_tree4.length > 0) {
                ul_tree4_display = ul_tree4.css("display");
                if (ul_tree4_display == "none") {
                    $(this).siblings("ul").slideDown(500);
                } else {
                    $(this).siblings("ul").slideUp(500);
                }
            }
        })
    })
    $("li.tree4>a").each(function() {
        if ($(this).parent().hasClass("tree4_on")) {
            $(this).parents(".tree2").addClass("tree2-on");
            $(this).parents(".tree3").addClass("tree3-on");
            $(this).parents("ul").css("display", "block");
        }
        strText_tree4 = $(this).text();
        $(this).text(set_Chapter(strText_tree4, 22));
    })


});
