
$(document).ready(function (){
    var date = moment().format("dddd,MMMM Do,h:mm:ss a ")
    $("#date").text(date)
    $(".saveBtn").on("click",function(){

        var timer = $(this).parent().attr("id");
        var message = $(this).siblings(".description").val();
        console.log(message);
        localStorage.setItem(timer,message);
})

function timeTrack() {
    
   var currentTime = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockTime);
        if (blockTime < currentTime) {
    
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
    //Storage
} 
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));


    timeTrack();
})