window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("mhead").classList.add("header_bar");
        Array.from(document.getElementsByClassName("mButton")).forEach(
            function(element, index, array) {
                element.classList.add("mButton_bar");
            }
        );
    } else {
        document.getElementById("mhead").classList.remove("header_bar");
        Array.from(document.getElementsByClassName("mButton")).forEach(
            function(element, index, array) {
                element.classList.remove("mButton_bar");
            }
        );
    }
}