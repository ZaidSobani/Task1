
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

 
// if(window.matchMedia("(max-width:600px)").matches) {
//     document.getElementById("navigationPart").style.display = "none";
//     document.getElementById("openMenu").onclick = function() {
//         document.getElementById("navigationPart").style.display = "block";
//         document.getElementById("openMenu").style.display = "none";
//         document.getElementById("closeMenu").style.display = "block";
//     } 
//     document.getElementById("closeMenu").onclick = function() {
//         document.getElementById("navigationPart").style.display = "none";
//         document.getElementById("openMenu").style.display = "block";
//         document.getElementById("closeMenu").style.display = "none";
//     } 
// }
// else {
//     document.getElementById("navigationPart").style.display = "block";
// }