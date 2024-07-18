/////////////////////// nav /////////////////////////
let boxWidth = $('.hidden-menu').outerWidth();
$('#openAside').click(function(){
        $('.hidden-menu').animate({left:`0px`},500)
        $('.main-nav').animate({left:`${boxWidth}px`},500)
})
$('#closeAside').click(function(){
        $('.hidden-menu').animate({left:`-${boxWidth}px`},500)
        $('.main-nav').animate({left:`0px`},500)
})
$('.hidden-menu').css('left',`-${boxWidth}px`)



/////////////////////////toggler//////////////////////
$('.toggle').click(function(){
        $('.hidden').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
});
    
///////////////////scrolling/////////////
$('.n-link').click(function(e){
        let sec = $(e.target).attr('href')
        let secTop = $(sec).offset().secTop
        $('body,html').animate({scrollTop:secTop},2000)
})

/////////////////count down/////////////
window.onload = function() {
        countDownToTime("10 october 2024 10:00:00");
}
    
function countDownToTime(countTo) {
        let myDate = new Date(countTo);
        myDate = (myDate.getTime()/1000);
        let present = new Date();
        present = (present.getTime()/1000);
        timeRemaining = (myDate - present);  
        let days = Math.floor( timeRemaining / (24*60*60));
        let hours = Math.floor((timeRemaining - (days * (24*60*60))) / 3600);
        let mins = Math.floor((timeRemaining - (days * (24*60*60)) - (hours * 3600 )) / 60);
        let secs = Math.floor((timeRemaining - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
        $(".d").html(`${days} D`);
        $(".h").html(`${hours} h`);
        $(".m").html(`${ mins } m`);
        $('.s').html(`${ secs} s`)
        setInterval(function() {  countDownToTime(countTo); }, 1000);
}


///////////////textarea///////////////
let textarea = $('textarea')
var amount = 100
trxtarea.keyup(function() {
        var length = textarea.val().length;
        var remaining = amount-length;
        if(remaining<=0)
                $(".chars-remaining span").text("your available character finished");
        else
                $(".chars-remaining span").text(remaining);
        })