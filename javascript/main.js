let storage = window.localStorage;
let cur = 2;


let load = 0;
setDark(storage.getItem("dark-theme"));
load = 1;

function change() {
    let img = document.getElementById("burger")
    let current = document.getElementById("bmenu-main").classList.toggle("opened");
    img.setAttribute("src", `images/icons/menu-${current ? "open" : "close"}.svg`)
    document.body.classList[current ? "add" : "remove"]("block-scroll")
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
function closeMenu(){
    document.getElementById("bmenu-main").classList.remove("opened")
    document.getElementById("burger").setAttribute("src", `images/icons/menu-close.svg`)
    document.body.classList.remove("block-scroll")
}

function resize() {
    if (window.innerWidth > 768) {
        closeMenu()
    }
}