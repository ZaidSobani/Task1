
function openMenu() {
    document.getElementById("navigationHeader").style.display = "block"
    document.getElementById("openMenu").style.display = "none"
    document.getElementById("closeMenu").style.display = "block"
}
function closeMenu() {
    document.getElementById("navigationHeader").style.display = "none"
    document.getElementById("openMenu").style.display = "block"
    document.getElementById("closeMenu").style.display = "none"
}

function displayNavigation(windowSize) {

    if (windowSize.matches) {
        document.getElementById("navigationHeader").style.display = "block"
    } else {
        document.getElementById("navigationHeader").style.display = "none"
    }

}
const windowSize = window.matchMedia("(min-width: 800px)")
displayNavigation(windowSize);
windowSize.addListener(displayNavigation);



// window.onscroll = function() {
//     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("header").style.backgroundColor = "rgba(0,0,0,1)"
//     }
//     else {
//         document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.5)"
//     }
// };
 


