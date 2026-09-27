const showNumber = 4
var currentCategory = "coffee"
var selecetdSize = ""


function createItem(data, index) {
    return `<div class="preview${(index >= showNumber ? " hide-item" : "")}" onclick="showModal(${index })">
                        <div class="box"><img src="${data.image_path}" alt="item"></div>
                        <div class="description">
                            <div class="title">
                                <h3>${data.name}</h3>
                                <p class="medium">${data.description}</p>
                            </div>
                            <h3>$${data.price}</h3>
                        </div>
                    </div>
    `
}

function loadCategory(category) {
    fetch("./products.json")
        .then((res) => res.json())
        .then((json) => {
            list = ""
            json[category].forEach((element, ind) => {
                list+=createItem(element, ind)
            });
            document.getElementById("catalog").innerHTML=list
        })
        .catch((e) => console.error(e));
}

function selectCategory(category){
    if (currentCategory != category){
        document.getElementById(category).classList.add("selected");
        document.getElementById(currentCategory).classList.remove("selected");
        loadCategory(category);
        currentCategory = category;
    }
}

function showAll(){
    var items = document.getElementsByClassName("hide-item");
    for (let el of items) {
        el.classList.remove("hide-item");
    }
    //document.getElementById("loadall").style.display="none";
}

function formModal(data){
    let sizeOptions = "";
    let additives = "";

    for(let opt in data.sizes){
        if (sizeOptions.length == 0) {
            selecetdSize = opt
        }
        sizeOptions += `<div id="${opt}" class="option flexbox${sizeOptions.length == 0 ? " selected" : ""}" onclick="selectSize(this.id)" data-value="${data.sizes[opt]["add-price"]}">
                                        <div class="opt-symbol"><p class="link">${opt}</p></div>
                                        <div class="opt-text">${data.sizes[opt].size}</div>
                                    </div>`
        
    }

    data.additives.forEach((item, ind) => {
        additives += `<div id="option-${ind + 1}"  class="option" onclick="addAdditivities(this.id)" data-value="${item["add-price"]}">
                                        <div class="opt-symbol"><p class="link">${ind + 1}</p></div>
                                        <div class="opt-text"><p class="link">${item.name}</p></div>
                                    </div>`
    })

    return `<div class="modal-content flexbox">
                <div class="box"><img src="${data.image_path}" alt="item"></div>
                    <div class="modal-description">
                        <div class="title">
                            <h3>${data.name}</h3>
                            <p class="medium">${data.description}</p>
                        </div>
                        <div class="add">
                             <p class="medium">Size</p>
                             <div class="options">${sizeOptions}</div>
                        </div> 
                        <div class="add">
                            <p class="medium">Additives</p>
                            <div class="options">${additives}</div>
                        </div>
                        <div id="total">
                            <h3>Total:</h3>
                            <h3 id="price" data-value="${data.price}">$${data.price}</h3>
                        </div>
                        <div id="alert">
                            <img src="images/icons/info-empty.svg" alt="item">
                            <p class="caption">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                        </div>
                        <div class="button-seconadry" onclick="closeModal()"><p class=link">Close</p></div>
                    </div>
                </div>
            </div>`
}

function showModal(ind) {
    fetch("./products.json")
        .then((res) => res.json())
        .then((json) => {
            document.getElementById("modal").innerHTML=formModal(json[currentCategory][ind])
        })
        .catch((e) => console.error(e));

    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("modal");

    console.log(modal.getElementsByClassName("selected"))
    modal.style.display = "none";
}


function selectSize(size) {
    console.log(size)
    console.log(selecetdSize)
    if (selecetdSize != size){
        document.getElementById(size).classList.add("selected");
        document.getElementById(selecetdSize).classList.remove("selected");
        selecetdSize = size;
        calculatePrice()
    }
}

function addAdditivities(add) {
    document.getElementById(add).classList.toggle("selected");
    calculatePrice()
}


function calculatePrice(){
    var selectedOptions = modal.getElementsByClassName("selected")
    var priceTag = document.getElementById("price");
    let price = Number(priceTag.dataset.value)
    for (let opt of selectedOptions) {
        price += Number(opt.dataset.value)
    }
    priceTag.innerHTML = `$${price.toFixed(2)}`;

}

loadCategory(currentCategory)
