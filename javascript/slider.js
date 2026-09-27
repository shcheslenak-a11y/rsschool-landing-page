var slideNumber=3;
let slide = 1;

let slides = document.getElementById("slide-window");
slides.scrollLeft = slides.offsetWidth;


function scrollSlides() {

    var slides = document.getElementById("slide-window");
    var slideWidth = slides.offsetWidth;
    var current = Math.floor(slides.scrollLeft / slideWidth );

    if (slide != current) {
        let act = slides.children[slide];
        let New = slides.children[current];
        document.getElementById(`control-${act.id}`).classList.toggle("on");
        document.getElementById(`control-${New.id}`).classList.toggle("on");
        if (current == 0){
            slides.prepend(slides.lastElementChild)
            current = 1
        }
        if (current == (slideNumber - 1)){
            slides.appendChild(slides.children[0]);
            current = (slideNumber - 2)
        }
        slide = current;
    }  
}

function changeSlide(direction){
    var slides = document.getElementById("slide-window")
    var slideWidth = slides.offsetWidth;

    slides.scrollBy({
            left: direction * slideWidth, 
            behavior: 'smooth' 
    })
}

function clickControl(ind) {
    var active = Number(document.getElementsByClassName("on")[0].dataset.index);
    let rigths = active < ind ? (ind - active) : (slideNumber - active + ind)
    let lefts = active > ind ? (active - ind) : (slideNumber + active - ind)
    let dir = lefts > rigths ? 1 : -1;
    for(let i = 0; i < Math.min(lefts, rigths); i++){
        changeSlide(dir);
    }
}