// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Slider
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var arrow_left = document.querySelector(".arrow_left");
var arrow_right = document.querySelector(".arrow_right");
var chairImg = document.querySelector(".slide");
var slideImg = document.querySelector(".slider__image--Ul");
var slideImgLi = document.querySelector(".slider__image--Ul").children;

arrow_right.addEventListener("click", function(event) {
    var firstImage = slideImgLi[0];
    var firstImageClone = firstImage.cloneNode(true);
    slideImg.appendChild(firstImageClone);
    firstImage.parentNode.removeChild(firstImage);
});
arrow_left.addEventListener("click", function(event) {
    var lastImage = slideImgLi[2];
    var lastImageClone = lastImage.cloneNode(true);
    var firstImage = slideImgLi[0];
    slideImg.insertBefore(lastImageClone, firstImage);
    lastImage.parentNode.removeChild(lastImage);
});

function imgLoop() {
    var firstImage = slideImgLi[0];
    var firstImageClone = firstImage.cloneNode(true);
    slideImg.appendChild(firstImageClone);
    firstImage.parentNode.removeChild(firstImage);
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Chair order
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


var chair_title = document.querySelector(".chair_title");
var color = document.querySelector(".color");
var pattern = document.querySelector(".pattern");
var transport = document.querySelector(".transport");

var title_value = document.querySelector(".title_value");
var color_value = document.querySelector(".color_value");
var pattern_value = document.querySelector(".pattern_value");
var transport_value = document.querySelector(".transport_value");

var list_arrows = document.querySelectorAll(".list_arrow");
var list_title = document.querySelectorAll(".list_panel")[0].children;
var list_color = document.querySelectorAll(".list_panel")[1].children;
var list_pattern = document.querySelectorAll(".list_panel")[2].children;
var transport_check = document.querySelector(".transportCheck");
var sumPrice = document.querySelector(".sum");

var transportBox = document.getElementById("transport");
var application = document.querySelector(".application");
var resetButton = document.querySelector(".resetButton");
var button_chair = document.querySelector(".button_chair");
var orderInfo = document.querySelector(".orderInfo");



function reset() {
    chair_title.innerText = "Twój fotel";
    color.innerText = "";
    pattern.innerText = "";
    transport.innerText = "";
    title_value.innerText = "";
    color_value.innerText = "";
    pattern_value.innerText = "";
    transport_value.innerText = "";
    sumPrice.innerText = "";
    transportBox.checked = false;
}

function priceCheck() {
    var1 = Number(title_value.innerText);
    var2 = Number(color_value.innerText);
    var3 = Number(pattern_value.innerText);
    var4 = Number(transport_value.innerText);
    var sum = var1 + var2 + var3 + var4;
    if (sum != 0) {
        sumPrice.innerText = sum + " zł";
    } else {
        sumPrice.innerText = "";
    }
    if (var1 == 0) {
        orderInfo.innerText = "Musisz wybrac podstawowy model krzesła";
    } else {
        orderInfo.innerText = "";
    }
    return sum;
}


application.addEventListener("click", function(event) {

    if (priceCheck() > 0) {
        resetButton.style.display = "block";
        button_chair.style.marginTop = "25px";
    } else {
        resetButton.style.display = "none";
        button_chair.style.marginTop = "45px";
        orderInfo.innerText = "";
    }
});

button_chair.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var1 = Number(title_value.innerText);
    if (var1 == 0) {
        orderInfo.innerText = "Musisz wybrac podstawowy model krzesła";
    }
});

resetButton.addEventListener("click", function(event) {
    event.preventDefault();
    reset();
});


for (var i = 0; i < list_arrows.length; i++) {
    list_arrows[i].addEventListener("click", function(event) {
        event.preventDefault();
        var ul = this.nextElementSibling;
        ul.classList.toggle("visible");
    });
}
for (var i = 0; i < list_title.length; i++) {
    list_title[i].addEventListener("click", function(event) {
        this.parentElement.classList.toggle("visible");
        chair_title.innerText = this.innerText;
        title_value.innerText = this.dataset.price;
        priceCheck()
    });
}
for (var i = 0; i < list_color.length; i++) {
    list_color[i].addEventListener("click", function(event) {
        event.stopPropagation();
        this.parentElement.classList.toggle("visible");
        var1 = Number(title_value.innerText);
        if (var1 == 0) {
            orderInfo.innerText = "Musisz wybrac podstawowy model krzesła";
        } else {
            color.innerText = this.innerText;
            color_value.innerText = this.dataset.price;
            priceCheck()
        }
    });
}

for (var i = 0; i < list_pattern.length; i++) {
    list_pattern[i].addEventListener("click", function(event) {
        event.stopPropagation();
        this.parentElement.classList.toggle("visible");
        var1 = Number(color_value.innerText);
        if (var1 == 0) {
            orderInfo.innerText = "Musisz wybrac kolor krzesła";
        } else {
            pattern.innerText = this.innerText;
            pattern_value.innerText = this.dataset.price;
            priceCheck()
        }
    });
}

transport_check.addEventListener("click", function(event) {

    if (transportBox.checked == true) {
        transport_value.innerText = "200";
        transport.innerText = "Transport";
        priceCheck();
    } else {
        transport_value.innerText = "";
        transport.innerText = "";
        priceCheck();
    }
});

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Contact form
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var form = document.querySelector("form");
var email = document.getElementById("email");
var mesage = document.getElementById("mesage");
var agreement = document.getElementById("agreement");
var errorDiv = document.querySelector(".error-message");
var successDiv = document.querySelector(".success-message");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    var formValidation = true;
    var allErrors = [];
    errorDiv.innerText = ""

    var name = document.getElementById("imie").value;
    if (name.length >= 3) {
        console.log("Name OK");
    } else {
        allErrors.push("Twoje imię powinno zawierać minimum 3 znaki");
        formValidation = false;
    }


    if ((email.value.indexOf("@") >= 1) && (email.value.length >= 3) && (email.value.indexOf("@") < (email.value.length - 1))) {
        console.log("Meil OK");
    } else if (email.value.indexOf("@") == 0) {
        allErrors.push("Niepoprawny adres e-mail, wpisz nazwę przed '@'");
        formValidation = false;
    } else if ((email.value.indexOf("@") >= 1) && (email.value.indexOf("@") == email.value.length - 1)) {
        allErrors.push("Niepoprawny adres e-mail, wpisz nazwę po '@'");
        formValidation = false;
    } else {
        allErrors.push("Brak '@' w adresie email");
        formValidation = false;
    }

    var mesage = document.getElementById("mesage").value;
    if (mesage.length >= 1) {
        console.log("Mesage OK");
    } else {
        allErrors.push("Uzupełnj sekcję 'Wiadomość'");
        formValidation = false;
    }

    if (agreement.checked) {
        console.log("Agreement OK");
    } else {
        allErrors.push("Musisz wyrazić zgodę na przetwarzanie danych osobowych ");
        formValidation = false;
    }

    if (formValidation) {
        successDiv.innerText = "Wysyłam formularz, niedługo się z Tobą skontaktujemy";
        setTimeout(function() {
            form.submit();
        }, 3000);
    } else {
        for (var i = 0; i < allErrors.length; i++) {
            var p = document.createElement("p");

            p.innerText = allErrors[i];
            errorDiv.appendChild(p);
        }
    }

});
