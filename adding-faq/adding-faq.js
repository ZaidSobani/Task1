
var faqs;
var faqToEditIndex;

class Faq {
    constructor(id, question, answer) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.published = false;

    }
}

window.onload = function () {

    faqStorage = localStorage.getItem("faqs");

    if (faqs) {

        faqs = JSON.parse(faqStorage);
    }
    else {

        faqs = new Array();
        faqs.push(new Faq(Math.random(), "question1", "answer1"));
        faqs.push(new Faq(Math.random(), "question2", "answer2"));
        faqs.push(new Faq(Math.random(), "question3", "answer3"));

        localStorage.setItem("faqs", JSON.stringify(faqs));
    }


    const faqsOutput = document.getElementById("faqTable1");

    for (let i = 0; i < faqs.length; i++) {

        faqsOutput.innerHTML = faqsOutput.innerHTML + buildFaqHtml(faqs[i], i);
    }
}

function addFaq() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("addToTable").style.display = "block";
    document.getElementById("editTable").style.display = "none";

    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
}
function edit(index) {
    faqToEditIndex = index;
    faq = faqs[index];

    document.getElementById("ques_container").style.display = "block";
    document.getElementById("addToTable").style.display = "none";
    document.getElementById("editTable").style.display = "block";

    document.getElementById("questions_field").value = faq.question;
    document.getElementById("answers_field").value = faq.answer;
}

function createFaq() {
    const input1 = document.getElementById("questions_field").value;
    const input2 = document.getElementById("answers_field").value;
    const randomId = Math.random();
    const faq = new Faq(input1, input2, randomId);

    faqs.push(faq);

    const faqsOutput = document.getElementById("faqTable1");
    faqsOutput.innerHTML = faqsOutput.innerHTML + buildFaqHtml(faq, (faqs.length - 1))
    // faqOutput.innerHTML = faqOutput.innerHTML + "<tr id='test12' class='faqTable2'><td><span>" +faqs.length + 
    // "</span></td><td><span [id]='x'>" + faqs[faqs.length - 1].question + 
    // "</span></td><td><span id=''>" + faqs[faqs.length - 1].answer + 
    // "</span></td><td><span><button onclick='edit()'>" + 
    // "Edit" + "</button></span></td></tr>";

    localStorage.setItem("faqs", JSON.stringify(faqs));

    // function indexOfId() {
    //     // id = "ques" +faqs.indexOf(faqs[faqs.length]);
    //     var test131 = document.getElementsByTagName("tr");
    //     for (var j= 0; j < test131.length; j++) {
    //         var test13 = test131[j];
    //         test13.setAttribute("id", j + 1);
    //         test13.id = j+1;
    //         return "id is" + test13.id;
    //     }
    // }    
    // var x= setTimeout(indexOfId, 2000);
    // console.log(setTimeout(indexOfId, 2000));

    document.getElementById("ques_container").style.display = "none";

    //document.getElementById("bottomBorder").style.borderBottom = "none";    
}
function editFaq() {
    const faq = faqs[faqToEditIndex];
    faq.question = document.getElementById("questions_field").value;
    faq.answer = document.getElementById("answers_field").value;              //no need to push replacing existing values

    const faqOutput = document.getElementById("faq-" + faq.ids);
    faqOutput.innerHTML = buildFaqInnerHtml(faq, faqToEditIndex);

    localStorage.setItem("faqs", JSON.stringify(faqs));

    document.getElementById("ques_container").style.display = "none";
}

function removeFaq(id) {

    const rowHtml = document.getElementById("faq-" + id);
    rowHtml.remove();

    const faqIndex = faqs.findIndex(faq => faq.id == id);
    faqs.splice(faqIndex, 1);

    localStorage.setItem("faqs", JSON.stringify(faqs));
}

function closeFaq() {
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addToTable").style.display = "none";
    document.getElementById("editTable").style.display = "none";
}

function buildFaqHtml(faq, index) {

    return "<tr id='faq-" + faq.id + "' class='faqTable1' >" + buildFaqInnerHtml(faq, index) + "</tr>";
}

function buildFaqInnerHtml(faq, index) {

    return "<td><span>" + (index + 1) + "</span></td><td><span>" + faq.question + "</span></td><td><span>" + faq.answer +
        "</span></td><td><span><button class='editFaq' onclick='edit(" + faq.id + ")'>" + "Edit" +
        "</button></span></td><td><span><button class='removeFaq' onclick='removeFaq(" + faq.id + ")'><span class='material-symbols-outlined'>" +
        "delete" + "</span></button></span></td>";
}

function deleteFaq(faq, index) {
    return index
}