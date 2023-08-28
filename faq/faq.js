
var faqs;

window.onload = function () {

    faqs = JSON.parse(localStorage.getItem("faqs"));

    const faqOutput = document.getElementById("faqOutput");
    let counter = 1;
    for(let i = 0; i < faqs.length; i++) {
        // faqIndex =  faqs.findIndex(faqObj => faqObj.id == faqs[i].id);
        // console.log(faqIndex);
        if(faqs[i].published == true) {

            faqOutput.innerHTML += "<div><li class='list' id='list-" + faqs[i].id + 
            "' ><span class='faq-list'><span class='faq-list-1'><span class='faq-list-1-a'>" +
            counter + "</span><span>" + faqs[i].question + "</span></span></span><br><span class='faq-answer' id='faqAnswer-" + 
            faqs[i].id + "'>" + faqs[i].answer + "</span></li><span id='clickA-" +faqs[i].id + 
            "' class='click-a' onclick='clickA(" + faqs[i].id + ")'>" + "+" + 
            "</span><span id='clickB-" +faqs[i].id + "' class='click-b' onclick='clickB(" + faqs[i].id + ")'>" + "-" + "</span></div>";

            counter += 1;
        }
        
    }
    
}

function clickA(id) {

    let AnswerExpand = document.querySelectorAll( "[id^='faqAnswer-']" );
    let clickAExpand = document.querySelectorAll( "[id^='clickA-']" );
    let clickBExpand = document.querySelectorAll( "[id^='clickB-']" );
    let listExpand = document.querySelectorAll( "[id^='list-']" );
    Array.from( AnswerExpand ).forEach( s => (s.style.display = "none") );
    Array.from( clickAExpand ).forEach( s => (s.style.display = "inline") );
    Array.from( clickBExpand ).forEach( s => (s.style.display = "none") );
    Array.from( listExpand ).forEach( s => (s.style.border = "none") );
    Array.from( listExpand ).forEach( s => (s.style.marginBottom = "-100px") );

    document.getElementById("faqAnswer-" + id).style.display = "block";
    document.getElementById("clickA-" + id).style.display = "none";
    document.getElementById("clickB-" + id).style.display = "inline";
    document.getElementById("list-" + id).style.border = "1px solid #dee2e6";
    document.getElementById("list-" + id).style.marginBottom = "0px";
    
}
function clickB(id) {
    document.getElementById("faqAnswer-" + id).style.display = "none";
    document.getElementById("clickA-" + id).style.display = "inline";
    document.getElementById("clickB-" + id).style.display = "none";
    document.getElementById("list-" + id).style.border = "none";
    document.getElementById("list-" + id).style.marginBottom = "-100px";
}

// function displayFaq() {
//     for(let j = 0;j < faqs.length; j++) {
//         document.getElementById("clickA-" + (j + 1)).onclick = function () {
//             document.getElementById("faqAnswer-" + (j + 1)).style.display = "block";
//             document.getElementById("clickA-" + (j + 1)).style.display = "none";
//             document.getElementById("clickB-" + (j + 1)).style.display = "inline";
//             document.getElementById("list-" + (j + 1)).style.border = "1px solid #dee2e6";
//             document.getElementById("list-" + (j + 1)).style.marginBottom = "0px";
//             for(let k = 0; k < faqs.length; k++) {
//                 if (k != j) {
//                     document.getElementById("faqAnswer-" + (k + 1)).style.display = "none";
//                     document.getElementById("clickA-" + (k + 1)).style.display = "inline";
//                     document.getElementById("clickB-" + (k + 1)).style.display = "none";
//                     document.getElementById("list-" + (k + 1)).style.border = "none";
//                     document.getElementById("list-" + (k + 1)).style.marginBottom = "-100px";
//                 }
//             }
//         }
//         document.getElementById("clickB-" + (j + 1)).onclick = function () {
//             document.getElementById("faqAnswer-" + (j + 1)).style.display = "none";
//             document.getElementById("clickA-" + (j + 1)).style.display = "inline";
//             document.getElementById("clickB-" + (j + 1)).style.display = "none";
//             document.getElementById("list-" + (j + 1)).style.border = "none";
//             document.getElementById("list-" + (j + 1)).style.marginBottom = "-100px";
//         }
//     }
// }

