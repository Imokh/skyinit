//首屏导航栏js
var rNav = document.getElementById('rNav');

for (var i = 1; i < rNav.children.length; i++) {
    rNav.children[i].onmouseover = function () {
        this.className += " cur"

    }
    rNav.children[i].onmouseout = function () {
        this.className = "";
    }

}
//右上公众号展示区音乐符js
var music = document.getElementById('music');
var arr = [18, 16, 14, 12];
var ran;
setInterval(function () {
    for (var i = 0; i < music.children.length; i++) {
        ran = parseInt(Math.random() * 5);
        music.children[i].style.height = arr[ran] + 'px'
    }
}, 150);


//字体主题
var font = document.getElementById('font');

//下载区域
var down = document.getElementById('down');

//二屏新闻
var zixun = document.getElementById('zixun');
//新闻文本
var text_new = document.getElementById('text_new');
//text_new.style.display = 'none';


function getStyle(obj, attr) {

    if (window.getComputedStyle) {

        // 这相当于就是在判断浏览器是否支持这个方法
        // console.log(window.getComputedStyle(obj)[attr]);
        return window.getComputedStyle(obj)[attr];

    } else {

        // console.log(obj.currentStyle[attr]);
        return obj.currentStyle[attr];

    }
}

//新闻图片
var pictrue_new = document.getElementById('pictrue_new');
//pictrue_new.style.display = 'none';
var pictrue;
var timeID;
$('.part_3').css('opacity', 0);
document.onmousewheel = function (e) {
    e = e || window.event;
    pictrue = getStyle(pictrue_new, 'opacity');

    if (pictrue == 0) {
        if (e.deltaY == -100 || e.wheelDelta == 120) {
            if ($('.part_1').hasClass('cur')) {
                return;
            }
            $('.part_3').fadeOut(400);
            setTimeout(function () {
                zixun.style.opacity = 1;
                zixun.style.transform = 'translate(0,0)';
            }, 500);

            setTimeout(function () {
                text_new.style.opacity = 1;
                text_new.style.transform = 'translate(0,0)';
            }, 1000)

            setTimeout(function () {
                pictrue_new.style.opacity = 1;
                pictrue_new.style.transform = 'translate(0,0)';
            }, 1500);
            $('.part_2').addClass('cur');
            $('.part_3').removeClass('cur');
        }
        if (e.deltaY == 100 || e.wheelDelta == -120) {
            if ($('.part_3').hasClass('cur')) {
                return;
            }
            font.style.opacity = 0;
            font.style.transform = 'translate(0,-30px)';

            setTimeout(function () {
                down.style.opacity = 0;
                down.style.transform = 'translate(0,-30px)';
            }, 800);

            setTimeout(function () {
                zixun.style.opacity = 1;
                zixun.style.transform = 'translate(0,0)';
            }, 1500);

            setTimeout(function () {
                text_new.style.opacity = 1;
                text_new.style.transform = 'translate(0,0)';
            }, 2000)

            setTimeout(function () {
                pictrue_new.style.opacity = 1;
                pictrue_new.style.transform = 'translate(0,0)';
            }, 2500);
            $('.part_2').addClass('cur');
            $('.part_1').removeClass('cur');
            $('.box').animate({
                'top': 92 + '%',
                'opacity': 0.8
            }, 2000);

            //二屏新闻图片区
            var index = 0;
            timeID = setInterval(function () {
                $('#pictrue_new>div').eq(index).addClass('cur').siblings().removeClass('cur');
                index++;
                if (index == 4) {
                    index = 0;
                }
            }, 2000);
        }
    }

    if (pictrue == 1) {

        if (e.deltaY == -100 || e.wheelDelta == 120) {

            pictrue_new.style.opacity = 0;
            pictrue_new.style.transform = 'translate(0,-30px)';

            setTimeout(function () {
                text_new.style.opacity = 0;
                text_new.style.transform = 'translate(0,-30px)';
            }, 800);

            setTimeout(function () {
                zixun.style.opacity = 0;
                zixun.style.transform = 'translate(0,-30px)';
            }, 1500);

            setTimeout(function () {
                down.style.opacity = 1;
                down.style.transform = 'translate(0,0)';
            }, 2000);

            setTimeout(function () {
                font.style.opacity = 1;
                font.style.transform = 'translate(0,0)';
            }, 2500);
            $('.part_1').addClass('cur');
            $('.part_2').removeClass('cur');
            $('.box').animate({
                'top': 61 + '%',
                'opacity': 0.6
            }, 2000);
            clearInterval(timeID);
        }
        if (e.deltaY == 100 || e.wheelDelta == -120) {
            if (pictrue == 1) {

                pictrue_new.style.opacity = 0;
                pictrue_new.style.transform = 'translate(0,-30px)';

                setTimeout(function () {
                    text_new.style.opacity = 0;
                    text_new.style.transform = 'translate(0,-30px)';
                }, 800);

                setTimeout(function () {
                    zixun.style.opacity = 0;
                    zixun.style.transform = 'translate(0,-30px)';
                }, 1500);

                setTimeout(function () {
                    $('.part_3').animate({
                        'opacity': 1
                    }, 2000)
                    $('.part_3').addClass('cur');
                    $('.part_2').removeClass('cur');
                }, 2000);
            }
        }
    }
};












