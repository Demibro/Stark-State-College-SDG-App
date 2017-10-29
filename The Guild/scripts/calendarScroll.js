//<![CDATA[ 

$(function() {
    // Stick the calendar to the top of the window
    var calendar = $('#calendar-nav');
    var calendarHomeY = $(calendar).offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > calendarHomeY;
        if (shouldBeFixed && !isFixed) {
            calendar.css({
                position: 'fixed',
                top: 0,
                left: $(calendar).offset().left,
                width: calendar.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            calendar.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});

//]]>