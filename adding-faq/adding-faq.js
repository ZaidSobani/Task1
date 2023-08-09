
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

let test = new faq_table (input2 , input3, input1)                      //could be let
adding_index = test.input1
faq_template[adding_index] = new faq_table (input2 , input3, input1)

document.getElementById("adding_0").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_0").style.display = "block";
}

document.getElementById("adding_1").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_1").style.display = "block";
}
document.getElementById("adding_2").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_2").style.display = "block";
}
document.getElementById("adding_3").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_3").style.display = "block";
}
document.getElementById("adding_4").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_4").style.display = "block";
}
document.getElementById("adding_5").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_5").style.display = "block";
}
document.getElementById("adding_6").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_6").style.display = "block";
}
document.getElementById("adding_7").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_7").style.display = "block";
}
document.getElementById("adding_8").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_8").style.display = "block";
}
document.getElementById("adding_9").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_9").style.display = "block";
}

document.getElementById("edit_0").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_0").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_0").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_0").innerHTML;

}
document.getElementById("edit_1").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_1").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_1").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_1").innerHTML; 

}
document.getElementById("edit_2").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_2").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_2").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_2").innerHTML; 

}
document.getElementById("edit_3").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_3").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_3").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_3").innerHTML; 

}
document.getElementById("edit_4").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_4").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_4").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_4").innerHTML; 

}
document.getElementById("edit_5").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_5").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_5").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_5").innerHTML; 

}
document.getElementById("edit_6").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_6").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_6").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_6").innerHTML; 

}
document.getElementById("edit_6").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_6").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_6").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_6").innerHTML; 

}
document.getElementById("edit_7").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_7").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_7").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_7").innerHTML; 

}
document.getElementById("edit_8").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_8").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_8").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_8").innerHTML; 

}
document.getElementById("edit_9").onclick = function() {
    document.getElementById("ques_container").style.display = "block";
    document.getElementById("add_9").style.display = "block";
    document.getElementById("questions_field").value = document.getElementById("questions_output_9").innerHTML; 
    document.getElementById("answers_field").value = document.getElementById("answers_output_9").innerHTML; 

}

document.getElementById("add_0").onclick = function() {
    let input1 = 0;                                                                
    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[0] = new faq_table (input2 , input3, input1);
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
document.getElementById("add_1").onclick = function() {
    let input1 = 1;                                                                 
    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[1] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_1").innerHTML = faq_template[1].index + 1;
    document.getElementById("questions_output_1").innerHTML = faq_template[1].questions;
    document.getElementById("answers_output_1").innerHTML = faq_template[1].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    //faq_template.push(faq_template[1]);
    faq_template.push(faq_template[1].index);
    faq_template.push(faq_template[1].questions);
    faq_template.push(faq_template[1].answers);

    document.getElementById("add_1").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_2").style.display = "table-row"

    document.getElementById("adding_1").style.display = "none";
    document.getElementById("edit_1").style.display = "inline";   
}
document.getElementById("add_2").onclick = function() {
    let input1 = 2;
                                                                        
    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[2] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_2").innerHTML = faq_template[2].index + 1;
    document.getElementById("questions_output_2").innerHTML = faq_template[2].questions;
    document.getElementById("answers_output_2").innerHTML = faq_template[2].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    //faq_template.push(faq_template[2]);
    faq_template.push(faq_template[2].index);
    faq_template.push(faq_template[2].questions);
    faq_template.push(faq_template[2].answers);

    document.getElementById("add_2").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_3").style.display = "table-row";
     
    document.getElementById("adding_2").style.display = "none";
    document.getElementById("edit_2").style.display = "inline";
}
document.getElementById("add_3").onclick = function() {
    let input1 = 3;
                                                                        
    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[3] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_3").innerHTML = faq_template[3].index + 1;
    document.getElementById("questions_output_3").innerHTML = faq_template[3].questions;
    document.getElementById("answers_output_3").innerHTML = faq_template[3].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    //faq_template.push(faq_template[3]);
    faq_template.push(faq_template[3].index);
    faq_template.push(faq_template[3].questions);
    faq_template.push(faq_template[3].answers);

    document.getElementById("add_3").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_4").style.display = "table-row";

    document.getElementById("adding_3").style.display = "none";
    document.getElementById("edit_3").style.display = "inline";
}
document.getElementById("add_4").onclick = function() {
    let input1 = 4;

    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[4] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_4").innerHTML = faq_template[4].index + 1;
    document.getElementById("questions_output_4").innerHTML = faq_template[4].questions;
    document.getElementById("answers_output_4").innerHTML = faq_template[4].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    //faq_template.push(faq_template[4]);
    faq_template.push(faq_template[4].index);
    faq_template.push(faq_template[4].questions);
    faq_template.push(faq_template[4].answers);

    document.getElementById("add_4").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_5").style.display = "table-row";

    document.getElementById("adding_4").style.display = "none";
    document.getElementById("edit_4").style.display = "inline";
}
document.getElementById("add_5").onclick = function() {
    let input1 = 5;

    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[5] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_5").innerHTML = faq_template[5].index + 1;
    document.getElementById("questions_output_5").innerHTML = faq_template[5].questions;
    document.getElementById("answers_output_5").innerHTML = faq_template[5].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    faq_template.push(faq_template[5].index);
    faq_template.push(faq_template[5].questions);
    faq_template.push(faq_template[5].answers);

    document.getElementById("add_5").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_6").style.display = "table-row";

    document.getElementById("adding_5").style.display = "none";
    document.getElementById("edit_5").style.display = "inline";
}
document.getElementById("add_6").onclick = function() {
    let input1 = 6;

    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[6] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_6").innerHTML = faq_template[6].index + 1;
    document.getElementById("questions_output_6").innerHTML = faq_template[6].questions;
    document.getElementById("answers_output_6").innerHTML = faq_template[6].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    faq_template.push(faq_template[6].index);
    faq_template.push(faq_template[6].questions);
    faq_template.push(faq_template[6].answers);

    document.getElementById("add_6").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_7").style.display = "table-row";

    document.getElementById("adding_6").style.display = "none";
    document.getElementById("edit_6").style.display = "inline";
}
document.getElementById("add_7").onclick = function() {
    let input1 = 7;

    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[7] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_7").innerHTML = faq_template[7].index + 1;
    document.getElementById("questions_output_7").innerHTML = faq_template[7].questions;
    document.getElementById("answers_output_7").innerHTML = faq_template[7].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    faq_template.push(faq_template[7].index);
    faq_template.push(faq_template[7].questions);
    faq_template.push(faq_template[7].answers);

    document.getElementById("add_7").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_8").style.display = "table-row";

    document.getElementById("adding_7").style.display = "none";
    document.getElementById("edit_7").style.display = "inline";
}
document.getElementById("add_8").onclick = function() {
    let input1 = 8;

    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[8] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_8").innerHTML = faq_template[8].index + 1;
    document.getElementById("questions_output_8").innerHTML = faq_template[8].questions;
    document.getElementById("answers_output_8").innerHTML = faq_template[8].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    faq_template.push(faq_template[8].index);
    faq_template.push(faq_template[8].questions);
    faq_template.push(faq_template[8].answers);

    document.getElementById("add_8").style.display = "none";
    document.getElementById("ques_container").style.display = "none";
    document.getElementById("addRow_9").style.display = "table-row";

    document.getElementById("adding_8").style.display = "none";
    document.getElementById("edit_8").style.display = "inline";
}
document.getElementById("add_9").onclick = function() {
    let input1 = 9;

    let input2 = document.getElementById("questions_field").value;                    
    let input3 = document.getElementById("answers_field").value;
    faq_template[9] = new faq_table (input2 , input3, input1);
    document.getElementById("index_output_9").innerHTML = faq_template[9].index + 1;
    document.getElementById("questions_output_9").innerHTML = faq_template[9].questions;
    document.getElementById("answers_output_9").innerHTML = faq_template[9].answers;
    document.getElementById("questions_field").value = "";
    document.getElementById("answers_field").value = "";
    document.getElementById("index").value = "";
    faq_template.push(faq_template[9].index);
    faq_template.push(faq_template[9].questions);
    faq_template.push(faq_template[9].answers);

    document.getElementById("add_9").style.display = "none";
    document.getElementById("ques_container").style.display = "none";

    document.getElementById("adding_9").style.display = "none";
    document.getElementById("edit_9").style.display = "inline";
}

document.getElementById("closeAdding").onclick = function() {
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

document.getElementById("submitToFaq").onclick = function() {
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