var sliderChair = document.querySelectorAll(".sliderChair");
var arrow_left = document.querySelector(".arrow_left");
var arrow_right = document.querySelector(".arrow_right");

arrow_left.addEventListener("click", function(event) {
    console.log("Huuura clicknięto!");
    if (sliderChair[0].dataset.image == 0) {
        sliderChair[0].dataset.image = 1;
        sliderChair[1].dataset.image = 0;

        sliderChair[0].classList.remove("invisible");
        sliderChair[1].classList.add("invisible");
        sliderChair[2].classList.add("invisible");
    } else if (sliderChair[2].dataset.image == 0) {
        sliderChair[2].dataset.image = 1;
        sliderChair[0].dataset.image = 0;

        sliderChair[2].classList.remove("invisible");
        sliderChair[0].classList.add("invisible");
        sliderChair[1].classList.add("invisible");
    } else if (sliderChair[1].dataset.image == 0) {
        sliderChair[1].dataset.image = 1;
        sliderChair[2].dataset.image = 0;

        sliderChair[1].classList.remove("invisible");
        sliderChair[2].classList.add("invisible");
        sliderChair[0].classList.add("invisible");
    }

})

arrow_right.addEventListener("click", function(event) {
    console.log("clicnięto prawe !");
    if (sliderChair[0].dataset.image == 0) {
        sliderChair[0].dataset.image = 1;
        sliderChair[1].dataset.image = 0;

        sliderChair[0].classList.remove("invisible");
        sliderChair[1].classList.add("invisible");
        sliderChair[2].classList.add("invisible");
    } else if (sliderChair[1].dataset.image == 0) {
        sliderChair[1].dataset.image = 1;
        sliderChair[2].dataset.image = 0;

        sliderChair[1].classList.remove("invisible");
        sliderChair[0].classList.add("invisible");
        sliderChair[2].classList.add("invisible");
    } else if (sliderChair[2].dataset.image == 0) {
        sliderChair[2].dataset.image = 1;
        sliderChair[0].dataset.image = 0;
       
        sliderChair[2].classList.remove("invisible");
        sliderChair[1].classList.add("invisible");
        sliderChair[0].classList.add("invisible");
    }

})
