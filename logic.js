function home() {
    document.getElementById("home").style.display = "block";
    document.getElementById("TheStoryCollector").style.display = "none";
    document.getElementById("TheMushroomHouse").style.display = "none";
    document.getElementById("Florence").style.display = "none";
    document.getElementById("Halpie").style.display = "none";
    document.getElementById("Shiny").style.display = "none";
    document.getElementById("Gizem").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("homeid").className += " active";

}

function TheStoryCollector() {
    document.getElementById("home").style.display = "none";
    document.getElementById("TheStoryCollector").style.display = "block";
    document.getElementById("TheMushroomHouse").style.display = "none";
    document.getElementById("Florence").style.display = "none";
    document.getElementById("Halpie").style.display = "none";
    document.getElementById("Shiny").style.display = "none";
    document.getElementById("Gizem").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("TheStoryCollectorid").className += " active";
}

function TheMushroomHouse() {
    document.getElementById("home").style.display = "none";
    document.getElementById("TheStoryCollector").style.display = "none";
    document.getElementById("TheMushroomHouse").style.display = "block";
    document.getElementById("Florence").style.display = "none";
    document.getElementById("Halpie").style.display = "none";
    document.getElementById("Shiny").style.display = "none";
    document.getElementById("Gizem").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("TheMushroomHouseid").className += " active";
}

function Florence() {
    document.getElementById("home").style.display = "none";
    document.getElementById("TheStoryCollector").style.display = "none";
    document.getElementById("TheMushroomHouse").style.display = "none";
    document.getElementById("Florence").style.display = "block";
    document.getElementById("Halpie").style.display = "none";
    document.getElementById("Shiny").style.display = "none";
    document.getElementById("Gizem").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("Florenceid").className += " active";
}

function Halpie() {
    document.getElementById("home").style.display = "none";
    document.getElementById("TheStoryCollector").style.display = "none";
    document.getElementById("TheMushroomHouse").style.display = "none";
    document.getElementById("Florence").style.display = "none";
    document.getElementById("Halpie").style.display = "block";
    document.getElementById("Shiny").style.display = "none";
    document.getElementById("Gizem").style.display = "none";


    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("Halpieid").className += "active";
}


function Shiny() {
    document.getElementById("home").style.display = "none";
    document.getElementById("TheStoryCollector").style.display = "none";
    document.getElementById("TheMushroomHouse").style.display = "none";
    document.getElementById("Florence").style.display = "none";
    document.getElementById("Halpie").style.display = "none";
    document.getElementById("Shiny").style.display = "block";
    document.getElementById("Gizem").style.display = "none";

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("Shinyid").className += " active";
}

function Gizem() {
    document.getElementById("home").style.display = "none";
    document.getElementById("TheStoryCollector").style.display = "none";
    document.getElementById("TheMushroomHouse").style.display = "none";
    document.getElementById("Florence").style.display = "none";
    document.getElementById("Halpie").style.display = "none";
    document.getElementById("Shiny").style.display = "none";
    document.getElementById("Gizem").style.display = "block";



    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("Gizemid").className += " active";
}


document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);