/*
 * @Author: MingYuan
 * @Date:   2017-03-18 12:16:04
 * @Last Modified by:   MingYuan
 * @Last Modified time: 2017-03-18 12:17:18
 */

'use strict';
$(function() {

    var startValue = "";
    for (var i = 0; i < $(".text-num").length; i++) {
        var oText = parseInt($(".text-num").eq(i).text());
        var array = new Array();
        var aBox = array.push(oText);
    }

    NumbersAnimate.Target = $(".text-num");
    NumbersAnimate.Numbers = parseInt($(".text-num").text());
    NumbersAnimate.Duration = 1500;
    NumbersAnimate.Animate();
});
var NumbersAnimate = {
    Target: null,
    Numbers: 0,
    Duration: 500,
    Animate: function() {
        var array = NumbersAnimate.Numbers.toString().split("");
        $(".text-num").empty();
        //遍历数组
        for (var i = 0; i < array.length; i++) {
            var currentN = array[i];
            //数字append进容器
            var t = $("<small></small>");
            $(t).append("<small class=\"childNumber\">" + array[i] + "</small>");
            $(t).css("margin-left", 18 * i + "px");

            $(NumbersAnimate.Target).append(t);
            //生成滚动数字,根据当前数字大小来定
            for (var j = 0; j <= currentN; j++) {
                var tt;
                if (j == currentN) {
                    tt = $("<small class=\"main\"><small>" + j + "</small></small>");
                } else {
                    tt = $("<small class=\"childNumber\">" + j + "</small>");
                }
                $(t).append(tt);
                $(tt).css("margin-top", (j + 1) * 25 + "px");
            }
            $(t).animate({
                marginTop: -((parseInt(currentN) + 1) * 25) + "px"
            }, NumbersAnimate.Duration, function() {
                $(this).find(".childNumber").remove();
            });
        }
    },
    ChangeNumber: function(numbers) {


        var oldArray = NumbersAnimate.Numbers.toString().split("");
        var newArray = numbers.toString().split("");
        for (var i = 0; i < oldArray.length; i++) {
            var o = oldArray[i];
            var n = newArray[i];
            if (o != n) {
                var c = $($(".main")[i]);
                var num = parseInt($(c).html());
                var top = parseInt($($(c).find("small")[0]).css("marginTop").replace('px', ''));

                for (var j = 0; j <= n; j++) {
                    var nn = $("<small>" + j + "</small>");
                    if (j == n) {
                        nn = $("<small>" + j + "</small>");
                    } else {
                        nn = $("<small class=\"yy\">" + j + "</small>");
                    }
                    $(c).append(nn);
                    $(nn).css("margin-top", (j + 1) * 25 + top + "px");
                }
                var margintop = parseInt($(c).css("marginTop").replace('px', ''));
                $(c).animate({
                    marginTop: -((parseInt(n) + 1) * 25) + margintop + "px"
                }, NumbersAnimate.Duration, function() {
                    $($(this).find("small")[0]).remove();
                    $(".yy").remove();
                });
            }
        }
        NumbersAnimate.Numbers = numbers;
    },

    RandomNum: function(m, a) {
        var Range = a - m;
        var Rand = Math.random();
        return (m + Math.round(Rand * Range));
    }
}
