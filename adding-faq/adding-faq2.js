var faqs;

window.onload = function () {

    faqs = JSON.parse(localStorage.getItem("faqs"));

    if (!faqs) {

        faqs = new Array();


        localStorage.setItem("faqs", JSON.stringify(faqs));
    }

    const faqsDiv = document.getElementById('faqs');

    for (let i = 0; i < faqs.length; i++) {

        faqsDiv.innerHTML = faqsDiv.innerHTML + '<div><span>-' + (i + 1) + '-</span><span>' + faqs[i].question + '</span><span>' + faqs[i].answer + '</span></div>';
    }

}

function addFaq() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("addFaq").style.display = "block";
}

function createFaq() {

    let input2 = document.getElementById("questions_field").value;
    let input3 = document.getElementById("answers_field").value;

    faqs.push({ question: input2, answer: input3 });

    const faqsDiv = document.getElementById('faqs');
    faqsDiv.innerHTML = faqsDiv.innerHTML + '<div><span>-' + faqs.length + '-</span><span>' + faqs[faqs.length -1].question + '</span><span>' + faqs[faqs.length -1].answer + '</span></div>';

    
    localStorage.setItem("faqs", JSON.stringify(faqs));
}

let faq_template = new Array()

class faq_table {
    constructor(questions, answers, index) {
        this.index = index;
        this.questions = questions;
        this.answers = answers;
    }
}


let input1 = document.getElementById("index").value;
let input2 = document.getElementById("questions_field").value;
let input3 = document.getElementById("answers_field").value;

let test = new faq_table(input2, input3, input1)                      //could be let
adding_index = test.input1
faq_template[adding_index] = new faq_table(input2, input3, input1)

document.getElementById("adding_0").onclick = function () {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_0").style.display = "block";
}



document.getElementById("edit_0").onclick = function () {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_0").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_0").innerHTML;
    document.getElementById("answers_field").value = document.getElementById("answers_output_0").innerHTML;

}




document.getElementById("add_0").onclick = function () {
    let input1 = 0;
    let input2 = document.getElementById("questions_field").value;
    let input3 = document.getElementById("answers_field").value;
    faq_template[0] = new faq_table(input2, input3, input1);
    document.getElementById("index_output_0").innerHTML = faq_template[0].index + 1;
    document.getElementById("questions_output_0").innerHTML = faq_template[0].questions;
    document.getElementById("answers_output_0").innerHTML = faq_template[0].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    //faq_template.push(faq_template[0]);
    faq_template.push(faq_template[0].index);
    faq_template.push(faq_template[0].questions);
    faq_template.push(faq_template[0].answers);

    document.getElementById("add_0").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_1").style.display = "table-row";

    document.getElementById("adding_0").style.display = "none";
    document.getElementById("edit_0").style.display = "inline";
}


    

document.getElementById("closeAdding").onclick = function () {
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("add_0").style.display = "none";
    document.getElementById("add_1").style.display = "none";
    document.getElementById("add_2").style.display = "none";
    document.getElementById("add_3").style.display = "none";
    document.getElementById("add_4").style.display = "none";
    document.getElementById("add_5").style.display = "none";
    document.getElementById("add_6").style.display = "none";
    document.getElementById("add_7").style.display = "none";
    document.getElementById("add_8").style.display = "none";
    document.getElementById("add_9").style.display = "none";
}

document.getElementById("submitToFaq").onclick = function () {
    localStorage.setItem("faqArray", JSON.stringify(faq_template));
}

/*if (!sessionStorage.getItem("faqPage")) {
    let addjson = JSON.stringify(faq_template);
    sessionStorage.setItem("faqPage", addjson);
}*/


/*document.getElementById("btest2").onclick = function() {
    document.getElementById("test2").innerHTML = faq_template[1].answers;
}
*/