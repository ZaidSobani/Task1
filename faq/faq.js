
document.getElementById("click1-a").onclick = function() {
    document.getElementById("faq_para1").style.display = "block"
    document.getElementById("faq_para2").style.display = "none"
    document.getElementById("faq_para3").style.display = "none"
    document.getElementById("faq_para4").style.display = "none"
    document.getElementById("list1").style.border = "1px solid #dee2e6"
    document.getElementById("list2").style.border = "none"
    document.getElementById("list3").style.border = "none"
    document.getElementById("list4").style.border = "none"
    document.getElementById("click1-a").style.display = "none"
    document.getElementById("click1-b").style.display = "inline"
    document.getElementById("click2-a").style.display = "inline"
    document.getElementById("click2-b").style.display = "none"
    document.getElementById("click3-a").style.display = "inline"
    document.getElementById("click3-b").style.display = "none"
    document.getElementById("click4-a").style.display = "inline"
    document.getElementById("click4-b").style.display = "none"
    document.getElementById("list1").style.marginBottom = "0px"
    document.getElementById("list2").style.marginBottom = "-140px" 
    document.getElementById("list3").style.marginBottom = "-140px" 
    document.getElementById("list4").style.marginBottom = "-140px"  
}
document.getElementById("click1-b").onclick = function() {
    document.getElementById("faq_para1").style.display = "none"
    document.getElementById("click1-a").style.display = "inline"
    document.getElementById("click1-b").style.display = "none"
    document.getElementById("list1").style.border = "none"
    document.getElementById("list1").style.marginBottom = "-140px"
}
document.getElementById("click2-a").onclick = function() {
    document.getElementById("faq_para2").style.display = "block"
    document.getElementById("faq_para1").style.display = "none"
    document.getElementById("faq_para3").style.display = "none"
    document.getElementById("faq_para4").style.display = "none"
    document.getElementById("list2").style.border = "1px solid #dee2e6"
    document.getElementById("list1").style.border = "none"
    document.getElementById("list3").style.border = "none"
    document.getElementById("list4").style.border = "none"
    document.getElementById("click2-a").style.display = "none"
    document.getElementById("click2-b").style.display = "inline"
    document.getElementById("click1-a").style.display = "inline"
    document.getElementById("click1-b").style.display = "none"
    document.getElementById("click3-a").style.display = "inline"
    document.getElementById("click3-b").style.display = "none"
    document.getElementById("click4-a").style.display = "inline"
    document.getElementById("click4-b").style.display = "none"
    document.getElementById("list2").style.marginBottom = "0px"
    document.getElementById("list1").style.marginBottom = "-140px" 
    document.getElementById("list3").style.marginBottom = "-140px" 
    document.getElementById("list4").style.marginBottom = "-140px"  
}
document.getElementById("click2-b").onclick = function() {
    document.getElementById("faq_para2").style.display = "none"
    document.getElementById("click2-a").style.display = "inline"
    document.getElementById("click2-b").style.display = "none"
    document.getElementById("list2").style.border = "none"
    document.getElementById("list2").style.marginBottom = "-140px"
}
document.getElementById("click3-a").onclick = function() {
    document.getElementById("faq_para3").style.display = "block"
    document.getElementById("faq_para1").style.display = "none"
    document.getElementById("faq_para2").style.display = "none"
    document.getElementById("faq_para4").style.display = "none"
    document.getElementById("list3").style.border = "1px solid #dee2e6"
    document.getElementById("list1").style.border = "none"
    document.getElementById("list2").style.border = "none"
    document.getElementById("list4").style.border = "none"
    document.getElementById("click3-a").style.display = "none"
    document.getElementById("click3-b").style.display = "inline"
    document.getElementById("click1-a").style.display = "inline"
    document.getElementById("click1-b").style.display = "none"
    document.getElementById("click2-a").style.display = "inline"
    document.getElementById("click2-b").style.display = "none"
    document.getElementById("click4-a").style.display = "inline"
    document.getElementById("click4-b").style.display = "none"
    document.getElementById("list3").style.marginBottom = "0px"
    document.getElementById("list1").style.marginBottom = "-140px" 
    document.getElementById("list2").style.marginBottom = "-140px" 
    document.getElementById("list4").style.marginBottom = "-140px"  
}
document.getElementById("click3-b").onclick = function() {
    document.getElementById("faq_para3").style.display = "none"
    document.getElementById("click3-a").style.display = "inline"
    document.getElementById("click3-b").style.display = "none"
    document.getElementById("list3").style.border = "none"
    document.getElementById("list3").style.marginBottom = "-140px"
}
document.getElementById("click4-a").onclick = function() {
    document.getElementById("faq_para4").style.display = "block"
    document.getElementById("faq_para1").style.display = "none"
    document.getElementById("faq_para2").style.display = "none"
    document.getElementById("faq_para3").style.display = "none"
    document.getElementById("list4").style.border = "1px solid #dee2e6"
    document.getElementById("list1").style.border = "none"
    document.getElementById("list2").style.border = "none"
    document.getElementById("list3").style.border = "none"
    document.getElementById("click4-a").style.display = "none"
    document.getElementById("click4-b").style.display = "inline"
    document.getElementById("click1-a").style.display = "inline"
    document.getElementById("click1-b").style.display = "none"
    document.getElementById("click2-a").style.display = "inline"
    document.getElementById("click2-b").style.display = "none"
    document.getElementById("click3-a").style.display = "inline"
    document.getElementById("click3-b").style.display = "none"
    document.getElementById("list4").style.marginBottom = "0px"
    document.getElementById("list1").style.marginBottom = "-140px" 
    document.getElementById("list2").style.marginBottom = "-140px" 
    document.getElementById("list3").style.marginBottom = "-140px"  
}
document.getElementById("click4-b").onclick = function() {
    document.getElementById("faq_para4").style.display = "none"
    document.getElementById("click4-a").style.display = "inline"
    document.getElementById("click4-b").style.display = "none"
    document.getElementById("list4").style.border = "none"
    document.getElementById("list4").style.marginBottom = "-140px"
}

window.onload = function() {
    let faq_template_after = JSON.parse(localStorage.getItem("faqArray"));
    document.getElementById("faq_index1").innerHTML = faq_template_after[0].index + 1;
    document.getElementById("faq_ques1").innerHTML = faq_template_after[0].questions;
    document.getElementById("faq_para1").innerHTML = faq_template_after[0].answers;
    document.getElementById("faq_index2").innerHTML = faq_template_after[1].index + 1;
    document.getElementById("faq_ques2").innerHTML = faq_template_after[1].questions;
    document.getElementById("faq_para2").innerHTML = faq_template_after[1].answers;
    document.getElementById("faq_index3").innerHTML = faq_template_after[2].index + 1;
    document.getElementById("faq_ques3").innerHTML = faq_template_after[2].questions;
    document.getElementById("faq_para3").innerHTML = faq_template_after[2].answers;
    document.getElementById("faq_index4").innerHTML = faq_template_after[3].index + 1;
    document.getElementById("faq_ques4").innerHTML = faq_template_after[3].questions;
    document.getElementById("faq_para4").innerHTML = faq_template_after[3].answers;

}



/*document.getElementById("btest3").onclick = function() {
    let faq_template_after = JSON.parse(localStorage.getItem("faqArray"));
    console.log(faq_template_after);

    document.getElementById("test4").innerHTML = "tEst";
    document.getElementById("test3").innerHTML = faq_template_after[0].questions;
}*/
/*if(!localStorage.getItem("faqArray")) { 
        
    }*/
