
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

    if (faqs) {

        faqs = JSON.parse(faqStorage);
    }
    else {
        var x = Math.random()
        var y = Math.random()
        var z = Math.random()
        faqs = new Array();
        faqs.push(new Faq(x, "question1", "answer1", true));
        faqs.push(new Faq(y, "question2", "answer2", true));
        faqs.push(new Faq(z, "question3", "answer3", true));

        localStorage.setItem("faqs", JSON.stringify(faqs));
    }


    const faqsOutput = document.getElementById("faqTable");

    for (let i = 0; i < faqs.length; i++) {

        faqsOutput.innerHTML = faqsOutput.innerHTML + buildFaqHtml(faqs[i], i);

    }

    document.getElementById("displayPublish-" + x).innerHTML = "Published";
    document.getElementById("displayPublish-" + y).innerHTML = "Published";
    document.getElementById("displayPublish-" + z).innerHTML = "Published";
    
}

function addFaq() {
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("addToTable").style.display = "block";
    document.getElementById("editTable").style.display = "none";

    document.getElementById("questionLabel").style.display = "none";    
    document.getElementById("questionField").style.border = ""; 
    document.getElementById("answerLabel").style.display = "none";    
    document.getElementById("answerField").style.border = "";  

    document.getElementById("questionField").value = "";
    document.getElementById("answerField").value = "";
}

function edit(id) {
    faqIndexToEdit = faqs.findIndex(faqObj => faqObj.id == id);
    const faq = faqs[faqIndexToEdit];

    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("addToTable").style.display = "none";
    document.getElementById("editTable").style.display = "block";

    document.getElementById("questionField").value = faq.question;
    document.getElementById("answerField").value = faq.answer;
}

function createFaq() {
    const input1 = document.getElementById("questionField").value;
    const input2 = document.getElementById("answerField").value;
    const randomId = Math.random();
    const faq = new Faq(randomId, input1, input2, ifPublished());


    if(input1 == "" && input2 == "") {
        document.getElementById("questionLabel").style.display = "block";    
        document.getElementById("questionField").style.border = "2px solid #ed1c24"; 
        document.getElementById("answerLabel").style.display = "block";    
        document.getElementById("answerField").style.border = "2px solid #ed1c24";  
     }
     else if(input1 == "") {
        document.getElementById("questionLabel").style.display = "block";    
        document.getElementById("questionField").style.border = "2px solid #ed1c24";  
        document.getElementById("answerLabel").style.display = "none";    
        document.getElementById("answerField").style.border = "";  
     }
     else if(input2 == "") {
        document.getElementById("answerLabel").style.display = "block";    
        document.getElementById("answerField").style.border = "2px solid #ed1c24"; 
        document.getElementById("questionLabel").style.display = "none";    
        document.getElementById("questionField").style.border = ""; 
     }
    else {

        faqs.push(faq);

        const faqsOutput = document.getElementById("faqTable");
        faqsOutput.innerHTML = faqsOutput.innerHTML + buildFaqHtml(faq, (faqs.length - 1))
    
        localStorage.setItem("faqs", JSON.stringify(faqs));
        
        displayPublish(faq.id);
    
        document.getElementById("questionContainer").style.display = "none";
    }
    
    // document.getElementById("publishValidation").style.display = "none";
    // document.getElementById("unpublishValidation").style.display = "none";
    // document.getElementById("questionContainer").style.filter = "blur(0)";

}


function editFaq() {

    const faq = faqs[faqIndexToEdit];
    faq.question = document.getElementById("questionField").value;
    faq.answer = document.getElementById("answerField").value;              //no need to push replacing existing values
    faq.published = ifPublished()
    
    const faqOutput = document.getElementById("faq-" + faq.id);
    faqOutput.innerHTML = buildFaqInnerHtml(faq, faqIndexToEdit);

    localStorage.setItem("faqs", JSON.stringify(faqs));

    displayPublish(faq.id);

    document.getElementById("questionContainer").style.display = "none";
    // document.getElementById("publishValidation").style.display = "none";
    // document.getElementById("unpublishValidation").style.display = "none";
    // document.getElementById("questionContainer").style.filter = "blur(0)";

    // if(faq.published == true) {
    //     document.getElementById("mySelect").value = "publish";
    // }
    // else {
    //     document.getElementById("mySelect").value = "unpublish";
    // }
}

function removeFaq(id) {

    const rowHtml = document.getElementById("faq-" + id);
    rowHtml.remove();

    const faqIndexToRemove = faqs.findIndex(faq => faq.id == id);
    faqs.splice(faqIndexToRemove, 1);

    localStorage.setItem("faqs", JSON.stringify(faqs));
}

function ifPublished() {
    if (document.getElementById("mySelect").value == "publish") {
        let input3 = true;
        return input3;
    }
    else {
        let input3 = false;
        return input3;
    }
}

function closeFaq() {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("addToTable").style.display = "none";
    document.getElementById("editTable").style.display = "none";
}

function buildFaqHtml(faq, index) {

    return "<tr id='faq-" + faq.id + "' class='faq-table' >" + buildFaqInnerHtml(faq, index) + "</tr>";
}

function buildFaqInnerHtml(faq, index) {

    return "<td><span>" + faq.question + "</span></td><td><span>" + faq.answer +
        "</span></td><td><span id='displayPublish-" + faq.id + "'></span></td><td><span><button class='edit-faq' onclick='edit(" + faq.id + ")'>" + "Edit" +
        "</button></span></td><td><span><button class='remove-faq' onclick='removeValidation(" + faq.id + ")'><span class='material-symbols-outlined  button-color'>" +
        "delete" + "</span></button></span></td>";

}

function removeValidation(id) {

    document.getElementById("deleteValidation").style.display = "block";
    document.getElementById("approveValidation").onclick = function() {
        removeFaq(id);
        document.getElementById("deleteValidation").style.display = "none";
    } 
    document.getElementById("closeValidation").onclick = function() {
        document.getElementById("deleteValidation").style.display = "none";
    }
    
} 

function displayPublish(id) {
    if(document.getElementById("mySelect").value == "publish") {
        document.getElementById("displayPublish-" + id).innerHTML = "Published"
    }
    else {
        document.getElementById("displayPublish-" + id).innerHTML = "Unpublished"
    }
}



// function createValidation() {
//     if(ifPublished()) {
//         document.getElementById("publishValidation").style.display = "block";
//         document.getElementById("createPublishedFaq").style.display = "block";
//         document.getElementById("updatePublishedFaq").style.display = "none";
//         document.getElementById("createUnpublishedFaq").style.display = "none";
//         document.getElementById("updateUnpublishedFaq").style.display = "none";
//         document.getElementById("questionContainer").style.filter = "blur(4px)";
//     }
//     else {
//         document.getElementById("unpublishValidation").style.display = "block";
//         document.getElementById("createUnpublishedFaq").style.display = "block";
//         document.getElementById("updateUnpublishedFaq").style.display = "none";
//         document.getElementById("createPublishedFaq").style.display = "none";
//         document.getElementById("updatePublishedFaq").style.display = "none";
//         document.getElementById("questionContainer").style.filter = "blur(4px)";
//     }
// }

// function updateValidation() {
//     if(ifPublished()) {
//         document.getElementById("publishValidation").style.display = "block";
//         document.getElementById("updatePublishedFaq").style.display = "block";
//         document.getElementById("createPublishedFaq").style.display = "none";
//         document.getElementById("updateUnpublishedFaq").style.display = "none";
//         document.getElementById("createUnpublishedFaq").style.display = "none";
//         document.getElementById("questionContainer").style.filter = "blur(4px)";
//     }
//     else {
//         document.getElementById("unpublishValidation").style.display = "block";
//         document.getElementById("updateUnpublishedFaq").style.display = "block";
//         document.getElementById("createUnpublishedFaq").style.display = "none";
//         document.getElementById("updatePublishedFaq").style.display = "none";
//         document.getElementById("createPublishedFaq").style.display = "none";
//         document.getElementById("questionContainer").style.filter = "blur(4px)";
//     }
// }

// function returnToContainer() {
//     document.getElementById("publishValidation").style.display = "none";
//     document.getElementById("unpublishValidation").style.display = "none";
//     document.getElementById("questionContainer").style.filter = "blur(0)";
// }

// document.getElementById("questionField").oninvalid = function() {
//     document.getElementById("questionLabel").style.display = "block";
// }