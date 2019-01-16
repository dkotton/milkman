function runJohnCena(){
    $("#JohnCenaCantSeeMe").animate({left: $(window).width()}, 3000, "linear", function(){
        $("#JohnCenaCantSeeMe").css("left","-500px");
    });
}
if (!$("#JohnCenaCantSeeMe").length)
    $("body").append("<img id='JohnCenaCantSeeMe' src='https://gannacademy.myschoolapp.com/ftpimages/591/user/large_user3396887_1479380.JPG? resize=200,200' />");

$("#JohnCenaCantSeeMe").css({
    "position": "fixed",
    "top": "calc(50% - 128px)",
    "left": "-500px",
    "z-index": "10000000"
});
runJohnCena();