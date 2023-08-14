class Faq {

    constructor(question, answer) {

        this.question = question;
        this.answer = answer;
    }
}

var faqs;
var faqToEditIndex;

window.onload = function () {

    const faqStorage = localStorage.getItem("faqs");

    if (faqStorage) {

        faqs = JSON.parse(faqStorage);

    } else {

        faqs = new Array();
        faqs.push(new Faq('Question 1', 'Answer 1'));
        faqs.push(new Faq('Question 2', 'Answer 2'));
        faqs.push(new Faq('Question 3', 'Answer 3'));

        localStorage.setItem("faqs", JSON.stringify(faqs));
    }

    const faqsDiv = document.getElementById('faqs');

    for (let i = 0; i < faqs.length; i++) {

        faqsDiv.innerHTML += buildFaqHtml(faqs[i], i);
    }
}

function addFaq() {

    document.getElementById("faqForm").style.display = "block";
    document.getElementById("createFaq").style.display = "block";
    document.getElementById("updateFaq").style.display = "none";

    document.getElementById("question").value = '';
    document.getElementById("answer").value = '';
}

function createFaq() {

    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    const faq = new Faq(question, answer);

    faqs.push(faq);

    const faqsDiv = document.getElementById('faqs');
    faqsDiv.innerHTML += buildFaqHtml(faq, faqs.length - 1);

    localStorage.setItem("faqs", JSON.stringify(faqs));

    document.getElementById("faqForm").style.display = "none";
}

function editFaq(index) {

    faqToEditIndex = index;

    const faq = faqs[index];

    document.getElementById("faqForm").style.display = "block";
    document.getElementById("createFaq").style.display = "none";
    document.getElementById("updateFaq").style.display = "block";

    document.getElementById("question").value = faq.question;
    document.getElementById("answer").value = faq.answer;
}

function updateFaq() {

    const faq = faqs[faqToEditIndex];

    faq.question = document.getElementById("question").value;
    faq.answer = document.getElementById("answer").value;

    const faqDiv = document.getElementById('faq-' + faqToEditIndex);
    faqDiv.innerHTML = buildFaqInnerHtml(faq, faqToEditIndex);

    localStorage.setItem("faqs", JSON.stringify(faqs));

    document.getElementById("faqForm").style.display = "none";
}

function buildFaqHtml(faq, index) {

    return '<div id="faq-' + index + '"+ onclick="editFaq(' + index + ')" class="faq-row">' + buildFaqInnerHtml(faq, index) + '</div>';
}

function buildFaqInnerHtml(faq, index) {

    return '<span>' + (index + 1) + '</span><span> | ' + faq.question + '</span><span> | ' + faq.answer + '</span>';
}



