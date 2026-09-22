let storage = window.localStorage;
let burgerCur = 0

let theme = storage.getItem("dark-theme")

var element = document.body;
var cur = element.classList.toggle("dark");

if (theme == "true") {
    console.log(11)
    document.getElementById("mode").checked = true;

    element.classList.add("dark")
}
else{
    document.getElementById("mode").checked = false;
    element.classList.remove("dark")
}



function changeMode() {
    var element = document.body;
    var cur = element.classList.toggle("dark");
    let img = document.getElementById("logo")
    img.setAttribute("src", `images/logo${cur ? "-dark" : ""}.png`)
    storage.setItem("dark-theme", cur)
}

function change() {
    burgerCur += 1
    let img = document.getElementById("burger")
    img.setAttribute("src", `images/icons/menu-${burgerCur%2 ? "close" : "open"}.svg`)
}