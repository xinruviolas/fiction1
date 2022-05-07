function about() {
    document.getElementById("about").style.display = "block";
    document.getElementById("artiststatement").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("about1").className += " active";

}

function artiststatement() {
    document.getElementById("about").style.display = "none";
    document.getElementById("artiststatement").style.display = "block";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("artiststatement1").className += " active";
}