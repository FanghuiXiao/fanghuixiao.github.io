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

function showLess(id) {
    let listId = Number(id.split("_")[1]);
    Array.from(document.getElementsByClassName("lessList"+listId)).forEach(
        function(element, index, array) {
            element.classList.remove("hideList");
        }
    );
    Array.from(document.getElementsByClassName("moreList"+listId)).forEach(
        function(element, index, array) {
            element.classList.remove("showList");
        }
    );
}

function showMore(id) {
    let listId = Number(id.split("_")[1]);
    Array.from(document.getElementsByClassName("lessList"+listId)).forEach(
        function(element, index, array) {
            element.classList.add("hideList");
        }
    );
    Array.from(document.getElementsByClassName("moreList"+listId)).forEach(
        function(element, index, array) {
            element.classList.add("showList");
        }
    );
}