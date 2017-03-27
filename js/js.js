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


     if ((email.value.indexOf("@") >= 1) && (email.value.length >= 3)) {
          console.log("Meil OK");
     } else if (email.value.indexOf("@") == 0) {
          allErrors.push("Niepoprawny adres e-mail, wpisz nazwę przed '@'");
          formValidation = false;
     } else if ((email.value.indexOf("@") >= 1) && (email.value.length < 3)) {
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
          setTimeout(function () {
               form.submit();
          }, 3000);
     } else {
          for (var i = 0; i < allErrors.length; i++) {
               var p =document.createElement("p");

               p.innerText = allErrors[i];

               errorDiv.appendChild(p);
          }
     }



});
