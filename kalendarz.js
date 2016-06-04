'use strict';
(function () {
    var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj',
        'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik',
        'Listopad', 'Grudzień'];
    var $currentMonth = $('#miesiac'),
        $currentYear = $('#rok'),
        currentDate = new Date(),
        currentMonth = currentDate.getMonth(),
        currentDay = currentDate.getDate(),
        currentYear = currentDate.getFullYear(),
        $daysOfMonth = $('.day'),
        firstDay = new Date(currentYear, currentMonth).getDay(),
        nrOfDays = daysInMonth(currentMonth, currentYear);

    $currentMonth.html(months[currentMonth]);
    $currentYear.html(currentYear);
    fillCallendar();

    function daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    function fillCallendar() {
        for (var i = firstDay, j = 0; j < nrOfDays; i++, j++) {
            $($daysOfMonth[i]).html(j + 1);
        }
    }

    function clearCallendar() {
        for (var i = 0; i < 42; i++) {
            $($daysOfMonth[i]).html('');
        }
    }

    function changeMonth(znak) {
        clearCallendar();
        currentMonth = currentMonth + znak;
        $currentMonth.html(months[currentMonth]);
        $currentYear.html(currentYear);
        firstDay = new Date(currentYear, currentMonth).getDay();
        nrOfDays = daysInMonth(currentMonth, currentYear);
        fillCallendar();
    }

    $('#lastMonth').click(function () {
        changeMonth(-1);
    });

    $('#nextMonth').click(function () {
        changeMonth(1);
    });

}) ();