
var faqs;

window.onload = function () {

    faqs = JSON.parse(localStorage.getItem("faqs"));

    const faqOutput = document.getElementById("faqOutput");
    let counter = 1;
    for(let i = 0; i < faqs.length; i++) {
        if(faqs[i].published == true) {

            faqOutput.innerHTML += "<li><div id='questionOutput-" + faqs[i].id + "' class='question-output'><div class='question-container'><span class='counter'>" + counter + 
            "</span><span>" + faqs[i].question + "</span></div><div class='button-container'><span onclick='expandButton(" + faqs[i].id + ")' id='expandButton-" + faqs[i].id + 
            "' class='expand-button'>" + "+" + "</span><span onclick='collapseButton(" + faqs[i].id + ")' id='collapseButton-" + faqs[i].id + "' class='collapse-button'>" + "-" + 
            "</span></div></div><div id='answerOutput-" + faqs[i].id + "' class='answer-output'><span>" + faqs[i].answer + "</span></div></li>"

            counter += 1;

        }
        
    }
    
}

function expandButton(id) {

    let OutputExpand = document.querySelectorAll( "[id^='answerOutput-']" );
    let buttonExpand = document.querySelectorAll( "[id^='expandButton-']" );
    let buttonCollapse = document.querySelectorAll( "[id^='collapseButton-']" );
    let questionMargin = document.querySelectorAll( "[id^='questionOutput-']" );
    Array.from( OutputExpand ).forEach( s => (s.style.display = "none") );
    Array.from( buttonExpand ).forEach( s => (s.style.display = "inline") );
    Array.from( buttonCollapse ).forEach( s => (s.style.display = "none") );
    Array.from( questionMargin ).forEach( s => (s.style.marginBottom = "20px") );


    document.getElementById("answerOutput-" + id).style.display = "block";
    document.getElementById("expandButton-" + id).style.display = "none";
    document.getElementById("collapseButton-" + id).style.display = "inline";
    document.getElementById("questionOutput-" + id).style.marginBottom = "0px"
    
}

function collapseButton(id) {

    document.getElementById("answerOutput-" + id).style.display = "none";
    document.getElementById("expandButton-" + id).style.display = "inline";
    document.getElementById("collapseButton-" + id).style.display = "none";
    document.getElementById("questionOutput-" + id).style.marginBottom = "20px"

}

// function clickA(id) {

//     let AnswerExpand = document.querySelectorAll( "[id^='faqAnswer-']" );
//     let clickAExpand = document.querySelectorAll( "[id^='clickA-']" );
//     let clickBExpand = document.querySelectorAll( "[id^='clickB-']" );
//     let listExpand = document.querySelectorAll( "[id^='list-']" );
//     Array.from( AnswerExpand ).forEach( s => (s.style.display = "none") );
//     Array.from( clickAExpand ).forEach( s => (s.style.display = "inline") );
//     Array.from( clickBExpand ).forEach( s => (s.style.display = "none") );
//     Array.from( listExpand ).forEach( s => (s.style.border = "none") );
//     Array.from( listExpand ).forEach( s => (s.style.marginBottom = "-100px") );

//     document.getElementById("faqAnswer-" + id).style.display = "block";
//     document.getElementById("clickA-" + id).style.display = "none";
//     document.getElementById("clickB-" + id).style.display = "inline";
//     document.getElementById("list-" + id).style.border = "1px solid #dee2e6";
//     document.getElementById("list-" + id).style.marginBottom = "0px";
    
// }
// function clickB(id) {
//     document.getElementById("faqAnswer-" + id).style.display = "none";
//     document.getElementById("clickA-" + id).style.display = "inline";
//     document.getElementById("clickB-" + id).style.display = "none";
//     document.getElementById("list-" + id).style.border = "none";
//     document.getElementById("list-" + id).style.marginBottom = "-100px";
// }



