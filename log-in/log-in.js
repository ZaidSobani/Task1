
function to_table() {
    if ((document.getElementById("userName").value == "Zaid") && (document.getElementById("password").value == "12345")) {
        window.location ='../adding-faq/adding-faq.html'
        //document.getElementById("log_out").innerHTML = "log_out"
    }
    else {
        document.getElementById("subcontainerTwo").style.display = "block"
        document.getElementById("subcontainerOne").style.filter = "blur(10px)"

        
    }
}
function close_confirm() {
    document.getElementById("subcontainerTwo").style.display = "none"
    document.getElementById("subcontainerOne").style.filter = "blur(0)"

}