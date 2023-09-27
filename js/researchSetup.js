$(document).ready(function () {
    var index=0;
    $('.cir').click(function(){
        $(this).addClass('cr').siblings().removeClass('cr');
        var index=$(this).index();
        $('.img').eq(index).fadeIn(0).siblings().fadeOut(0);
    });
    $('.pre').click(function(){
        index--;
        if(index<0){index=3}
        $('.img').eq(index).fadeIn(0).siblings().fadeOut(0);
        $('.cir').eq(index).addClass('cr').siblings().removeClass('cr');
    });
    $('.next').click(function(){
        index++;
        if(index>3){index=0}
        $('.img').eq(index).fadeIn(0).siblings().fadeOut(0);
        $('.cir').eq(index).addClass('cr').siblings().removeClass('cr');
    });
});

//Get the button:
mybutton = document.getElementById("backTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
