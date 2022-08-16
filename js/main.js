
let     sliderImgs   = Array.from(document.querySelectorAll(".slider-container img")),
        sliderCount = sliderImgs.length,
        currentSlider = 1,
        sliderNumberElement = document.querySelector("#slider-number"),
        prevBtn = document.getElementById("prev"),
        nextBtn = document.getElementById("next");

nextBtn.onclick  = () => { nextBtn.classList.contains('disable') ?  false : currentSlider++, checker()}
prevBtn.onclick  = () => { prevBtn.classList.contains('disable') ?  false : currentSlider--, checker()}

let ulIndicators = document.createElement("ul");
ulIndicators.id = "ul-indicators";


for (let i = 0; i < sliderCount; i++) {

    let liIndicators = document.createElement("li");

    liIndicators.appendChild(document.createTextNode(1 + i));
    liIndicators.setAttribute("data-number", i + 1);

    ulIndicators.appendChild(liIndicators);
    
}

document.getElementById("indicators").appendChild(ulIndicators);

let ulIndicatorsElement = document.getElementById("ul-indicators");
let   liElements   = Array.from(document.querySelectorAll("#ul-indicators li")); 

liElements.forEach((li) => { 
    li.addEventListener("click", () => { currentSlider = li.getAttribute("data-number"), checker()})
})

checker();

function checker() {

    removeAllActive();

    sliderNumberElement.textContent = `slide #${currentSlider} of ${sliderCount}`;

    sliderImgs[currentSlider - 1].classList.add('active');

    ulIndicatorsElement.children[currentSlider - 1].classList.add('active');


    currentSlider == 1              ? prevBtn.classList.add("disable") : prevBtn.classList.remove("disable");
    currentSlider == sliderCount    ? nextBtn.classList.add("disable") : nextBtn.classList.remove("disable");

}


function removeAllActive() {

    sliderImgs.forEach((img) => img.classList.remove("active"))

    liElements.forEach((li) => li.classList.remove("active"))

}