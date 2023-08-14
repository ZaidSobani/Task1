
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
    document.getElementById("editTable").style.display = "none";

}
function edit() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("addToTable").style.display = "none";
    document.getElementById("editTable").style.display = "block";
    console.log(test13.id);
    document.getElementById("questions_field").value = faqs[faqs.length - 1].question;
    document.getElementById("answers_field").value = faqs[faqs.length - 1].answer;
}
function createFaq() {
    let input1 = document.getElementById("questions_field").value;
    let input2 = document.getElementById("answers_field").value;

    faqs.push({question:input1, answer:input2});

    const faqOutput = document.getElementById("faqTable1");
    /*for(let i=0; i<faqs.length; i++) {
        faqOutput.innerHTML = faqOutput.innerHTML + "<div><span>-" + (i+1) + "-</span><span>" + 
        faqs[i].question + "</span><span>" + faqs[i].answer + "</span></div>"; 
    }*/
    faqOutput.innerHTML = faqOutput.innerHTML + "<tr id='test12' class='faqTable2'><td><span>" +faqs.length + 
    "</span></td><td><span id='test13.id'>" + faqs[faqs.length - 1].question + 
    "</span></td><td><span id='test13_id'>" + faqs[faqs.length - 1].answer + 
    "</span></td><td><span><button onclick='edit("+ indexOfId() +")'>" + 
    "Edit" + "</button></span></td></tr>";

    //faqOutput.appendChild(document.createElement("tr"));

    localStorage.setItem("faqs", JSON.stringify(faqs));

    
    function indexOfId() {
        // id = "ques" +faqs.indexOf(faqs[faqs.length]);
        var test131 = document.getElementsByTagName("tr");
        for (let j= 0; j < test131.length; j++) {
            var test13 = test131[j];
            test13.setAttribute("id", j + 1);
            test13.id = j+1;
            return test13.id;
        }
    }    
    console.log(indexOfId());

    
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("ques_container").style.display = "none";

    //document.getElementById("bottomBorder").style.borderBottom = "none";    
}
function editFaq() {
    let input1 = document.getElementById("questions_field").value;
    let input2 = document.getElementById("answers_field").value;

    faqs.push({question:input1, answer:input2});

    document.getElementById("test12_a").innerHTML = document.getElementById("questions_field").value;
    document.getElementById("test12_b").innerHTML = document.getElementById("answers_field").value

    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("ques_container").style.display = "none";
}

function closeFaq() {
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addToTable").style.display = "none";
}



