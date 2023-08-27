
var faqs;

window.onload = function () {

    faqs = JSON.parse(localStorage.getItem("faqs"));
    //console.log(faqs)

    const faqOutput = document.getElementById("faqOutput");
    for(let i = 0; i < faqs.length; i++) {
         
        faqOutput.innerHTML += "<div id='faqsOutput-" + (i+1) + "'><li class='list' id='list-" + (i + 1) + 
        "' ><span class='faq-list'><span class='faq-list-1'><span class='faq-list-1-a'>" +
        (i + 1) + "</span><span>" + faqs[i].question + "</span></span></span><br><span class='faq-answer' id='faqAnswer-" + 
        (i + 1) + "'>" + faqs[i].answer + "</span></li><span class='click-a' id='clickA-" + (i + 1) +"'>" + "+" + 
        "</span><span class='click-b' id='clickB-" + (i + 1) + "'>" + "-" + "</span></div>";
        
        if(faqs[i].published == true) {
            document.getElementById("faqsOutput-" + (i + 1)).style.display = "block"
        }
        else {
            document.getElementById("faqsOutput-" + (i + 1)).style.display = "none"
            //faqs.splice((i) , 1);
        }
    }
    
    displayFaq();    
}

function displayFaq() {
    for(let j = 0;j < faqs.length; j++) {
        document.getElementById("clickA-" + (j + 1)).onclick = function () {
            document.getElementById("faqAnswer-" + (j + 1)).style.display = "block";
            document.getElementById("clickA-" + (j + 1)).style.display = "none";
            document.getElementById("clickB-" + (j + 1)).style.display = "inline";
            document.getElementById("list-" + (j + 1)).style.border = "1px solid #dee2e6";
            document.getElementById("list-" + (j + 1)).style.marginBottom = "0px";
            for(let k = 0; k < faqs.length; k++) {
                if (k != j) {
                    document.getElementById("faqAnswer-" + (k + 1)).style.display = "none";
                    document.getElementById("clickA-" + (k + 1)).style.display = "inline";
                    document.getElementById("clickB-" + (k + 1)).style.display = "none";
                    document.getElementById("list-" + (k + 1)).style.border = "none";
                    document.getElementById("list-" + (k + 1)).style.marginBottom = "-100px";
                }
            }
        }
        document.getElementById("clickB-" + (j + 1)).onclick = function () {
            document.getElementById("faqAnswer-" + (j + 1)).style.display = "none";
            document.getElementById("clickA-" + (j + 1)).style.display = "inline";
            document.getElementById("clickB-" + (j + 1)).style.display = "none";
            document.getElementById("list-" + (j + 1)).style.border = "none";
            document.getElementById("list-" + (j + 1)).style.marginBottom = "-100px";
        }
    }
}

// document.getElementById("clickA-").onclick = function () {
//     document.getElementById("faq_para1").style.display = "block"
//     document.getElementById("faq_para2").style.display = "none"
//     document.getElementById("faq_para3").style.display = "none"
//     document.getElementById("faq_para4").style.display = "none"
//     document.getElementById("faq_para5").style.display = "none"
//     document.getElementById("faq_para6").style.display = "none"
//     document.getElementById("faq_para7").style.display = "none"
//     document.getElementById("faq_para8").style.display = "none"
//     document.getElementById("faq_para9").style.display = "none"
//     document.getElementById("faq_para10").style.display = "none"
//     document.getElementById("list1").style.border = "1px solid #dee2e6"
//     document.getElementById("list2").style.border = "none"
//     document.getElementById("list3").style.border = "none"
//     document.getElementById("list4").style.border = "none"
//     document.getElementById("list5").style.border = "none"
//     document.getElementById("list6").style.border = "none"
//     document.getElementById("list7").style.border = "none"
//     document.getElementById("list8").style.border = "none"
//     document.getElementById("list9").style.border = "none"
//     document.getElementById("list10").style.border = "none"
//     document.getElementById("click1-a").style.display = "none"
//     document.getElementById("click1-b").style.display = "inline"
//     document.getElementById("click2-a").style.display = "inline"
//     document.getElementById("click2-b").style.display = "none"
//     document.getElementById("click3-a").style.display = "inline"
//     document.getElementById("click3-b").style.display = "none"
//     document.getElementById("click4-a").style.display = "inline"
//     document.getElementById("click4-b").style.display = "none"
//     document.getElementById("click5-a").style.display = "inline"
//     document.getElementById("click5-b").style.display = "none"
//     document.getElementById("click6-a").style.display = "inline"
//     document.getElementById("click6-b").style.display = "none"
//     document.getElementById("click7-a").style.display = "inline"
//     document.getElementById("click7-b").style.display = "none"
//     document.getElementById("click8-a").style.display = "inline"
//     document.getElementById("click8-b").style.display = "none"
//     document.getElementById("click9-a").style.display = "inline"
//     document.getElementById("click9-b").style.display = "none"
//     document.getElementById("click10-a").style.display = "inline"
//     document.getElementById("click10-b").style.display = "none"
//     document.getElementById("list1").style.marginBottom = "0px"
//     document.getElementById("list2").style.marginBottom = "-140px"
//     document.getElementById("list3").style.marginBottom = "-140px"
//     document.getElementById("list4").style.marginBottom = "-140px"
//     document.getElementById("list5").style.marginBottom = "-140px"
//     document.getElementById("list6").style.marginBottom = "-140px"
//     document.getElementById("list7").style.marginBottom = "-140px"
//     document.getElementById("list8").style.marginBottom = "-140px"
//     document.getElementById("list9").style.marginBottom = "-140px"
//     document.getElementById("list10").style.marginBottom = "-140px"
// }
// document.getElementById("click2").onclick = function () {
//     document.getElementById("faq_para1").style.display = "none"
//     document.getElementById("click1-a").style.display = "inline"
//     document.getElementById("click1-b").style.display = "none"
//     document.getElementById("list1").style.border = "none"
//     document.getElementById("list1").style.marginBottom = "-140px"
// }
// document.getElementById("click2-a").onclick = function () {
//     document.getElementById("faq_para2").style.display = "block"
//     document.getElementById("faq_para1").style.display = "none"
//     document.getElementById("faq_para3").style.display = "none"
//     document.getElementById("faq_para4").style.display = "none"
//     document.getElementById("faq_para5").style.display = "none"
//     document.getElementById("faq_para6").style.display = "none"
//     document.getElementById("faq_para7").style.display = "none"
//     document.getElementById("faq_para8").style.display = "none"
//     document.getElementById("faq_para9").style.display = "none"
//     document.getElementById("faq_para10").style.display = "none"
//     document.getElementById("list2").style.border = "1px solid #dee2e6"
//     document.getElementById("list1").style.border = "none"
//     document.getElementById("list3").style.border = "none"
//     document.getElementById("list4").style.border = "none"
//     document.getElementById("list5").style.border = "none"
//     document.getElementById("list6").style.border = "none"
//     document.getElementById("list7").style.border = "none"
//     document.getElementById("list8").style.border = "none"
//     document.getElementById("list9").style.border = "none"
//     document.getElementById("list10").style.border = "none"
//     document.getElementById("click2-a").style.display = "none"
//     document.getElementById("click2-b").style.display = "inline"
//     document.getElementById("click1-a").style.display = "inline"
//     document.getElementById("click1-b").style.display = "none"
//     document.getElementById("click3-a").style.display = "inline"
//     document.getElementById("click3-b").style.display = "none"
//     document.getElementById("click4-a").style.display = "inline"
//     document.getElementById("click4-b").style.display = "none"
//     document.getElementById("click5-a").style.display = "none"
//     document.getElementById("click5-b").style.display = "inline"
//     document.getElementById("click6-a").style.display = "inline"
//     document.getElementById("click6-b").style.display = "none"
//     document.getElementById("click7-a").style.display = "inline"
//     document.getElementById("click7-b").style.display = "none"
//     document.getElementById("click8-a").style.display = "inline"
//     document.getElementById("click8-b").style.display = "none"
//     document.getElementById("click9-a").style.display = "none"
//     document.getElementById("click9-b").style.display = "inline"
//     document.getElementById("click10-a").style.display = "inline"
//     document.getElementById("click10-b").style.display = "none"
//     document.getElementById("list2").style.marginBottom = "0px"
//     document.getElementById("list1").style.marginBottom = "-140px"
//     document.getElementById("list3").style.marginBottom = "-140px"
//     document.getElementById("list4").style.marginBottom = "-140px"
//     document.getElementById("list5").style.marginBottom = "-140px"
//     document.getElementById("list6").style.marginBottom = "-140px"
//     document.getElementById("list7").style.marginBottom = "-140px"
//     document.getElementById("list8").style.marginBottom = "-140px"
//     document.getElementById("list9").style.marginBottom = "-140px"
//     document.getElementById("list10").style.marginBottom = "-140px"
// }
// document.getElementById("click2-b").onclick = function () {
//     document.getElementById("faq_para2").style.display = "none"
//     document.getElementById("click2-a").style.display = "inline"
//     document.getElementById("click2-b").style.display = "none"
//     document.getElementById("list2").style.border = "none"
//     document.getElementById("list2").style.marginBottom = "-140px"
// }
// document.getElementById("click3-a").onclick = function () {
//     document.getElementById("faq_para3").style.display = "block"
//     document.getElementById("faq_para1").style.display = "none"
//     document.getElementById("faq_para2").style.display = "none"
//     document.getElementById("faq_para4").style.display = "none"
//     document.getElementById("faq_para5").style.display = "none"
//     document.getElementById("faq_para6").style.display = "none"
//     document.getElementById("faq_para7").style.display = "none"
//     document.getElementById("faq_para8").style.display = "none"
//     document.getElementById("faq_para9").style.display = "none"
//     document.getElementById("faq_para10").style.display = "none"
//     document.getElementById("list3").style.border = "1px solid #dee2e6"
//     document.getElementById("list1").style.border = "none"
//     document.getElementById("list2").style.border = "none"
//     document.getElementById("list4").style.border = "none"
//     document.getElementById("list5").style.border = "none"
//     document.getElementById("list6").style.border = "none"
//     document.getElementById("list7").style.border = "none"
//     document.getElementById("list8").style.border = "none"
//     document.getElementById("list9").style.border = "none"
//     document.getElementById("list10").style.border = "none"
//     document.getElementById("click3-a").style.display = "none"
//     document.getElementById("click3-b").style.display = "inline"
//     document.getElementById("click1-a").style.display = "inline"
//     document.getElementById("click1-b").style.display = "none"
//     document.getElementById("click2-a").style.display = "inline"
//     document.getElementById("click2-b").style.display = "none"
//     document.getElementById("click4-a").style.display = "inline"
//     document.getElementById("click4-b").style.display = "none"
//     document.getElementById("click5-a").style.display = "inline"
//     document.getElementById("click5-b").style.display = "none"
//     document.getElementById("click6-a").style.display = "inline"
//     document.getElementById("click6-b").style.display = "none"
//     document.getElementById("click7-a").style.display = "inline"
//     document.getElementById("click7-b").style.display = "none"
//     document.getElementById("click8-a").style.display = "inline"
//     document.getElementById("click8-b").style.display = "none"
//     document.getElementById("click9-a").style.display = "inline"
//     document.getElementById("click9-b").style.display = "none"
//     document.getElementById("click10-a").style.display = "inline"
//     document.getElementById("click10-b").style.display = "none"
//     document.getElementById("list3").style.marginBottom = "0px"
//     document.getElementById("list1").style.marginBottom = "-140px"
//     document.getElementById("list2").style.marginBottom = "-140px"
//     document.getElementById("list4").style.marginBottom = "-140px"
//     document.getElementById("list5").style.marginBottom = "-140px"
//     document.getElementById("list6").style.marginBottom = "-140px"
//     document.getElementById("list7").style.marginBottom = "-140px"
//     document.getElementById("list8").style.marginBottom = "-140px"
//     document.getElementById("list9").style.marginBottom = "-140px"
//     document.getElementById("list10").style.marginBottom = "-140px"
// }
// document.getElementById("click3-b").onclick = function () {
//     document.getElementById("faq_para3").style.display = "none"
//     document.getElementById("click3-a").style.display = "inline"
//     document.getElementById("click3-b").style.display = "none"
//     document.getElementById("list3").style.border = "none"
//     document.getElementById("list3").style.marginBottom = "-140px"
// }
// document.getElementById("click4-a").onclick = function () {
//     document.getElementById("faq_para4").style.display = "block"
//     document.getElementById("faq_para1").style.display = "none"
//     document.getElementById("faq_para2").style.display = "none"
//     document.getElementById("faq_para3").style.display = "none"
//     document.getElementById("faq_para5").style.display = "none"
//     document.getElementById("faq_para6").style.display = "none"
//     document.getElementById("faq_para7").style.display = "none"
//     document.getElementById("faq_para8").style.display = "none"
//     document.getElementById("faq_para9").style.display = "none"
//     document.getElementById("faq_para10").style.display = "none"
//     document.getElementById("list4").style.border = "1px solid #dee2e6"
//     document.getElementById("list1").style.border = "none"
//     document.getElementById("list2").style.border = "none"
//     document.getElementById("list3").style.border = "none"
//     document.getElementById("list5").style.border = "none"
//     document.getElementById("list6").style.border = "none"
//     document.getElementById("list7").style.border = "none"
//     document.getElementById("list8").style.border = "none"
//     document.getElementById("list9").style.border = "none"
//     document.getElementById("list10").style.border = "none"
//     document.getElementById("click4-a").style.display = "none"
//     document.getElementById("click4-b").style.display = "inline"
//     document.getElementById("click1-a").style.display = "inline"
//     document.getElementById("click1-b").style.display = "none"
//     document.getElementById("click2-a").style.display = "inline"
//     document.getElementById("click2-b").style.display = "none"
//     document.getElementById("click3-a").style.display = "inline"
//     document.getElementById("click3-b").style.display = "none"
//     document.getElementById("click5-a").style.display = "inline"
//     document.getElementById("click5-b").style.display = "none"
//     document.getElementById("click6-a").style.display = "inline"
//     document.getElementById("click6-b").style.display = "none"
//     document.getElementById("click7-a").style.display = "inline"
//     document.getElementById("click7-b").style.display = "none"
//     document.getElementById("click8-a").style.display = "inline"
//     document.getElementById("click8-b").style.display = "none"
//     document.getElementById("click9-a").style.display = "inline"
//     document.getElementById("click9-b").style.display = "none"
//     document.getElementById("click10-a").style.display = "inline"
//     document.getElementById("click10-b").style.display = "none"
//     document.getElementById("list4").style.marginBottom = "0px"
//     document.getElementById("list1").style.marginBottom = "-140px"
//     document.getElementById("list2").style.marginBottom = "-140px"
//     document.getElementById("list3").style.marginBottom = "-140px"
//     document.getElementById("list5").style.marginBottom = "-140px"
//     document.getElementById("list6").style.marginBottom = "-140px"
//     document.getElementById("list7").style.marginBottom = "-140px"
//     document.getElementById("list8").style.marginBottom = "-140px"
//     document.getElementById("list9").style.marginBottom = "-140px"
//     document.getElementById("list10").style.marginBottom = "-140px"
// }
// document.getElementById("click4-b").onclick = function () {
//     document.getElementById("faq_para4").style.display = "none"
//     document.getElementById("click4-a").style.display = "inline"
//     document.getElementById("click4-b").style.display = "none"
//     document.getElementById("list4").style.border = "none"
//     document.getElementById("list4").style.marginBottom = "-140px"
// }

    