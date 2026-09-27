let storage = window.localStorage;
let cur = 2;


let load = 0;
setDark(storage.getItem("dark-theme"));
load = 1;

function change() {
    let img = document.getElementById("burger")
    
    img.setAttribute("src", `images/icons/menu-${document.getElementById("bmenu-main").classList.toggle("opened") ? "open" : "close"}.svg`)
    
   
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
}
function resize() {
    if (window.innerWidth > 768) {
        closeMenu()
    }
}