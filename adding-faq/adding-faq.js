
var faqs;
var faqIndexToEdit;

class Faq {
    constructor(id, question, answer, published = false) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.published = published;
    }
}

window.onload = function () {

    faqStorage = localStorage.getItem("faqs");

    if (faqStorage) {

        faqs = JSON.parse(faqStorage);
    }
    else {
        faqs = new Array();
        faqs.push(new Faq(Math.random(), "question1", "answer1", true));
        faqs.push(new Faq(Math.random(), "question2", "answer2", true));
        faqs.push(new Faq(Math.random(), "question3", "answer3", true));

        localStorage.setItem("faqs", JSON.stringify(faqs));
    }


    const faqsOutput = document.getElementById("faqTable");

    for (let i = 0; i < faqs.length; i++) {

        faqsOutput.innerHTML = faqsOutput.innerHTML + buildFaqHtml(faqs[i], i);

    }
    
}


function addFaq() {
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("addToTable").style.display = "block";
    document.getElementById("editTable").style.display = "none";

    document.getElementById("questionField").value = "";
    document.getElementById("answerField").value = "";

    removeValidation();
}

function edit(id) {
    faqIndexToEdit = faqs.findIndex(faqObj => faqObj.id == id);
    const faq = faqs[faqIndexToEdit];

    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("addToTable").style.display = "none";
    document.getElementById("editTable").style.display = "block";
    
    document.getElementById("questionField").value = faq.question;
    document.getElementById("answerField").value = faq.answer;

    removeValidation();
}


function createFaq() {
    const questionValue = document.getElementById("questionField").value;
    const answerValue = document.getElementById("answerField").value;

    if(checkValidation(questionValue, answerValue)) {
        return;
    }

    const randomId = Math.random();
    let publishValue = +document.getElementById("mySelect").value;
    const faq = new Faq(randomId, questionValue, answerValue, publishValue);
    faqs.push(faq);

    const faqsOutput = document.getElementById("faqTable");
    faqsOutput.innerHTML = faqsOutput.innerHTML + buildFaqHtml(faq, (faqs.length - 1));
    
    localStorage.setItem("faqs", JSON.stringify(faqs));
        
    document.getElementById("questionContainer").style.display = "none";
}

function updateFaq() {
    const faq = faqs[faqIndexToEdit];
    faq.question = document.getElementById("questionField").value;
    faq.answer = document.getElementById("answerField").value;              //no need to push replacing existing values
    if(checkValidation(faq.question, faq.answer)) {
        return;
    }

    faq.published = +document.getElementById("mySelect").value;
    
    const faqOutput = document.getElementById("faq-" + faq.id);
    faqOutput.innerHTML = buildFaqInnerHtml(faq, faqIndexToEdit);

    localStorage.setItem("faqs", JSON.stringify(faqs));

    document.getElementById("questionContainer").style.display = "none";
}

function checkValidation(questionValue, answerValue) {
    let validationTest = false;

    const questionLabel = document.getElementById("questionLabel");
    const questionField = document.getElementById("questionField");
    const answerLabel = document.getElementById("answerLabel");
    const answerField = document.getElementById("answerField");

    if(questionValue == "" && answerValue == "") {                   //without it the validation will appear on one field
        questionLabel.style.display = "block";    
        questionField.classList.add("validation-border");
        answerLabel.style.display = "block";    
        answerField.classList.add("validation-border");

        validationTest = true;
    }
    else if(questionValue == "") {
        questionLabel.style.display = "block";    
        questionField.classList.add("validation-border");
        answerLabel.style.display = "none";    
        answerField.classList.remove("validation-border");
        
        validationTest = true;
    }
    else if(answerValue == "") {
        answerLabel.style.display = "block";    
        answerField.classList.add("validation-border");
        questionLabel.style.display = "none";    
        questionField.classList.remove("validation-border");
        
        validationTest = true;
    }
    return validationTest;
}

function removeValidation() {
    document.getElementById("questionLabel").style.display = "none";    
    document.getElementById("answerLabel").style.display = "none";    
    document.getElementById("questionField").classList.remove("validation-border");
    document.getElementById("answerField").classList.remove("validation-border");
}


function closeFaq() {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("addToTable").style.display = "none";
    document.getElementById("editTable").style.display = "none";
    
    removeValidation()
}


function confirmationRemove(id) {

    document.getElementById("deleteConfirmation").style.display = "block";
    document.getElementById("approveConfirmation").onclick = function() {
        removeFaq(id);
    }
}

function removeFaq(id) {

    const rowHtml = document.getElementById("faq-" + id);
    rowHtml.remove();

    const faqIndexToRemove = faqs.findIndex(faq => faq.id == id);
    faqs.splice(faqIndexToRemove, 1);

    localStorage.setItem("faqs", JSON.stringify(faqs));

    document.getElementById("deleteConfirmation").style.display = "none";
}

function closeConfirmation() {
    document.getElementById("deleteConfirmation").style.display = "none";
}


function buildFaqHtml(faq, index) {

    return "<tr id='faq-" + faq.id + "' class='faq-table' >" + buildFaqInnerHtml(faq, index) + "</tr>";
}

function buildFaqInnerHtml(faq, index) {

    return "<td><span>" + faq.question + "</span></td><td><span>" + faq.answer +
        "</span></td><td><span>" + (faq.published ? "Published" : "Unpublished") + "</span></td><td><span><button class='edit-faq' onclick='edit(" + faq.id + ")'>" + "Edit" +
        "</button></span></td><td><span><button class='remove-faq' onclick='confirmationRemove(" + faq.id + ")'><span class='material-symbols-outlined  button-color'>" +
        "delete" + "</span></button></span></td>";

}



