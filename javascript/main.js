let storage = window.localStorage;
let burgerCur = 0
let cur = 2;
let load = 0;

setDark(storage.getItem("dark-theme"));


function change() {
    burgerCur += 1
    let img = document.getElementById("burger")
    img.setAttribute("src", `images/icons/menu-${burgerCur%2 ? "close" : "open"}.svg`)
}

function setDark(n) {
    if (cur != n) { 
        let ligth = document.getElementById("light");
        let dark = document.getElementById("dark");

        (n == 1 ? dark : ligth).classList.add("toggler-selected");
        (n == 1 ? ligth : dark).classList.remove("toggler-selected");
        if (n == 1 || load){    
            var element = document.body;
            cur = element.classList.toggle("dark");
            storage.setItem("dark-theme", n);
        }

        let img = document.getElementById("logo")
        img.setAttribute("src", `images/logo${n == 1 ? "-dark" : ""}.png`)
    }
    
}
load = 1;