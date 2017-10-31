//jquery is running on load
$(function() {
    //find element by id calendar-nav and set it to variable calendar
    var calendar = $('#calendar-nav');
    //gets the psition of the calendar element relative to the top of the window
    var calendarHomeY = $(calendar).offset().top;
    //set a boolean variable called isFixed to false 
    var isFixed = false;
    //set a variable equal to the whole browser window
    var $w = $(window);

    /*
    *check to see if the window is scrolling
    *if it is do function
    */
    $w.scroll(function() {
        /*
        *sets a variable to the top of the window
        */
        var scrollTop = $w.scrollTop();

        //boolean variable to compare the top of the windows position to the calendar div top position
        var shouldBeFixed = scrollTop > calendarHomeY;

        /*
        *If the top calender position is out of the top window view
        *
        *and
        *
        *the isFixed variable is set to false
        *
        *then
        *
        *set the css for the calendar to a fixed position, the top position 0px,
        *the left postion the same as the calendars left position relitive to the left of the window, 
        *set the width to the same width as the calendar element
        */
        if (shouldBeFixed && !isFixed) {
            calendar.css({
                //breaks calendar variable from normal flow
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
                //puts calendar variable back into normal flow
                position: 'static'
            });
            isFixed = false;
        }
    });
});