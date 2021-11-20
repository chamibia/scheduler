
//Display today's date in header
var todayDate = moment().format('MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    //saveBtn click listener for
    $(".saveBtn").on("click", function (event) {
        //define time and description variables
        var text = $(this).siblings("description").val(); 
        var time = $(this).parent().attr("id"); 

        //save to local storage
        localStorage.setItem(text, time);
        
    }) 
    function timeTracker () {
    var timeNow = moment().hours();

    //loop over time blocks until
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]); 

        //check time and add the classes 
        if(blockTime < timeNow) {
            $(this).removeClass("future"); 
            $(this).removeClass("present");
            $(this).addClass("past"); 
        } else if (blockTime === timeNow) {
            $(this).removeClass("past"); 
            $(this).removeClass("future"); 
            $(this).addClass("present"); 
        } else {
            $(this).removeClass("present"); 
            $(this).removeClass("past"); 
            $(this).addClass("future"); 
        }
    })
}


//get item from localStorage
$("#hour8 .description").val(localStorage.getItem("hour8")); 
$("#hour9 .description").val(localStorage.getItem("hour9")); 
$("#hour10 .description").val(localStorage.getItem("hour10")); 
$("#hour11 .description").val(localStorage.getItem("hour12")); 
$("#hour12 .description").val(localStorage.getItem("hour12")); 
$("#hour13 .description").val(localStorage.getItem("hour13")); 
$("#hour14 .description").val(localStorage.getItem("hour14")); 
$("#hour15 .description").val(localStorage.getItem("hour15")); 
$("#hour16 .description").val(localStorage.getItem("hour16")); 
$("#hour17 .description").val(localStorage.getItem("hour17")); 

timeTracker (); 

}) 


