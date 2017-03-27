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

});


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Zakup krzkesła
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
var transport_check = document.querySelector("#transport");
var sumPrice = document.querySelector(".sum");

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
}

function priceCheck() {
    var1 = Number(title_value.innerText);
    var2 = Number(color_value.innerText);
    var3 = Number(pattern_value.innerText);
    var4 = Number(transport_value.innerText);
    var sum = var1 + var2 + var3 + var4;
    if (sum != 0) {
        sumPrice.innerText = sum;
    }
    if (var1 == 0) {
         orderInfo.innerText = "Musisz wybrac podstawowy model krzesła";
    } else {
         orderInfo.innerText = "";
    }
    return sum;
}


application.addEventListener("click", function(event) {
     event.preventDefault();
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
        this.parentElement.classList.toggle("visible");
     //    if ()
        color.innerText = this.innerText;
        color_value.innerText = this.dataset.price;
        priceCheck()
    });
}
for (var i = 0; i < list_pattern.length; i++) {
    list_pattern[i].addEventListener("click", function(event) {
        this.parentElement.classList.toggle("visible");
        pattern.innerText = this.innerText;
        pattern_value.innerText = this.dataset.price;
        priceCheck()
    });
}


transport_check.addEventListener("click", function(event) {
    if (transport_value.innerText == "") {
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
// formularz kontaktowy
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var form = document.querySelector("form");
var email = document.getElementById("email");
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









//
