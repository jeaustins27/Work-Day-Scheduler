$(function () {
    // When any save button is clicked, it will take your input and the corresponding time block and save that data in local storage.
    $('.saveBtn').on('click', function () {
        var task = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // saving your input into local storage with the corresponding time-block
        localStorage.setItem(time, task);
    });

// function to check the current hour to correctly color code the time block to match past, present, and future
function taskChecker() {
    var currentHour = dayjs().hour();

    // looping through each time block 
    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr("id").split('-')[1]);

        // checking the current time against the timeblock to add the correct class for styling.
        if (currentHour > timeBlock) {
            $(this).addClass('past');
            } else if (currentHour < timeBlock) {
                $(this).addClass('future');
                $(this).removeClass('past');
            } else {
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            };
        });
    };

// running the check that loops through each time block to correctly style each time block.
taskChecker();

// Getting the stored tasks from local storage that corresponds with each time block.
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


// Displays current day in the header
$('#currentDay').text(dayjs().format('[Today is] dddd, MMMM D, YYYY[.]'));
});
