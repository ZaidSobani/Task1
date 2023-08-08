
function to_table() {
    if ((document.getElementById("user").value == "Zaid") && (document.getElementById("pass").value == "12345")) {
        window.location ='../adding-faq/adding-faq.html'
        //document.getElementById("log_out").innerHTML = "log_out"
    }
    else {
        document.getElementById("login_container_2").style.display = "block"
        document.getElementById("login_container_1").style.filter = "blur(10px)"

        
    }
}
function close_confirm() {
    document.getElementById("login_container_2").style.display = "none"
    document.getElementById("login_container_1").style.filter = "blur(0)"

}