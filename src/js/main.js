// aos
AOS.init({
    duration: 1200,
  })
  
  // aos end
$(document).ready(() => {

    const backToTop = $('#backToTop')
    const amountScrolled = 300

    $(window).scroll(() => {
        $(window).scrollTop() >= amountScrolled
            ? backToTop.fadeIn('fast')
            : backToTop.fadeOut('fast')
    })

    backToTop.click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 600)
        return false
    })
})
//back to top/

// loader
var loader = document.querySelector('.loader');

var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

$(document).ready(function () {
    setTimeout(function () {
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        loader.style.display = "none";
    }, 3000);

});



// su ehtiyatlari
document.addEventListener("DOMContentLoaded", function () {
    var nmrWaterDivs = document.querySelectorAll('.nmr-water');

    // Fərqli şəkillərin yollarını təyin edən array
    var imgSrcs = [
        './src/img/iconhover1.png',
        './src/img/iconhover2.png',
        './src/img/iconhover3.png',
        './src/img/iconhover4.png'
    ];

    nmrWaterDivs.forEach(function (nmrWaterDiv, index) {
        var aTag = nmrWaterDiv.querySelector('.nmr-water-abs');
        var img = nmrWaterDiv.querySelector('.nmr-water-top-img');

        aTag.addEventListener('mouseover', function () {
            img.src = imgSrcs[index]; // Fərqli şəkillərin yollarını təyin et
        });

        aTag.addEventListener('mouseout', function () {
            img.src = './src/img/icon' + (index + 1) + '.png'; // İlkin şəkillərin yolu
        });
    });
});


$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: true, // 顯示點點
    responsive: {
        0: {
            items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
            items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1000: {
            items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

