
var faqs;

window.onload = function() {
    faqs = JSON.parse(localStorage.getItem("faqs"));

    if(!faqs) {
        faqs = new Array ();
        localStorage.setItem("faqs", JSON.stringify(faqs));
    }


    const faqOutput = document.getElementById("faqs");
    /*for(let i=0; i<faqs.length; i++) {
        faqOutput.innerHTML = faqOutput.innerHTML + "<div><span>-" + (i+1) + "-</span><span>" + 
        faqs[i].question + "</span><span>" + faqs[i].answer + "</span></div>"; 
    }*/

    /*faqOutput.innerHTML = faqOutput.innerHTML + "<table style='border-bottom:none;'><tr><th><span>" + "Index" + "</span></th><th><span>" + 
    "Question" + "</span></th><th><span>" + "Answer" + "</span></th></tr></table>";*/
}

function addFaq() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("addToTable").style.display = "block";
}
function edit() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("questions_field").value = faqs[faqs.length - 1].question;
    document.getElementById("answers_field").value = faqs[faqs.length - 1].answer;
}
function createFaq() {
    let input1 = document.getElementById("questions_field").value;
    let input2 = document.getElementById("answers_field").value;

    faqs.push({question:input1, answer:input2});

    const faqOutput = document.getElementById("faqs");
    /*for(let i=0; i<faqs.length; i++) {
        faqOutput.innerHTML = faqOutput.innerHTML + "<div><span>-" + (i+1) + "-</span><span>" + 
        faqs[i].question + "</span><span>" + faqs[i].answer + "</span></div>"; 
    }*/
    faqOutput.innerHTML = faqOutput.innerHTML + "<table class='faqTable2'><tr><td style='border-top:none'><span>" +
    faqs.length + "</span></td><td style='border-top:none'><span id=''>" + faqs[faqs.length - 1].question + 
    "</span></td><td style='border-top:none'><span>" + faqs[faqs.length - 1].answer + 
    "</span></td><td style='border-top:none'><span><button onclick='edit("+ faqs.indexOf(faqs.length) +")'>" + 
    "Edit" + "</button></span></td></tr></table>";
    
    faqOutput.appendChild(document.createElement("tr"));

    localStorage.setItem("faqs", JSON.stringify(faqs));
    for(let j = 0; j < faqs.length; j++) {
        id = "ques" + j;
    }
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("ques_container").style.display = "none";

    //document.getElementById("bottomBorder").style.borderBottom = "none";    
}
function closeFaq() {
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addToTable").style.display = "none";
}



