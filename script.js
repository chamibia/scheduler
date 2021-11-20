
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
$("#hour-9 .description").val(localStorage.getItem("hour-9")); 
$("#hour-10 .description").val(localStorage.getItem("hour-10")); 
$("#hour-11 .description").val(localStorage.getItem("hour-12")); 
$("#hour-12 .description").val(localStorage.getItem("hour-12")); 
$("#hour-13 .description").val(localStorage.getItem("hour-13")); 
$("#hour-14 .description").val(localStorage.getItem("hour-14")); 
$("#hour-15 .description").val(localStorage.getItem("hour-15")); 
$("#hour-16 .description").val(localStorage.getItem("hour-16")); 
$("#hour-17 .description").val(localStorage.getItem("hour-17")); 

timeTracker (); 

}) 


