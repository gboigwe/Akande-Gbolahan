$(document).ready(function(){
    $("#toggle4").click(function(){
        var elem = $("#toggle4").text();
        if(elem == "More Details"){
            // do something
            $("#toggle4").text("Less Details");
            $("#text4").slideDown();
        } else {
            // Do this
            $("#toggle4").text("More Details");
            $("#text4").slideUp();
        }
    });
});