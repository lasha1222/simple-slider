function init() {
    var slider = $('ul');
    var counter = slider.find('li').length;
    var currentSlide = 1;
    var slideWidth = $('.frame').width();
    var animation = false;

    $('ul').width(counter * slideWidth);

    $('.button').on('click', function() {
        if (animation) {
            return;
        }
        if ($(this).hasClass('right')) {
            if (currentSlide == counter) {
                currentSlide = 1;
            }
            else {
                currentSlide += 1;
            }
        }
        else {
            if (currentSlide == 1) {
                currentSlide = counter;
            }
            else {
                currentSlide -= 1;
            }
        }
        animation = true;
        slider.animate({left: -slideWidth * (currentSlide - 1)}, 700, function() {
            animation = false;
        });
    });
}
init();