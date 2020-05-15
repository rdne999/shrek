const login = document.querySelector(".form__login");
const password = document.querySelector(".form__password");
const button = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const card = document.querySelector(".card");
const form = document.querySelector(".form");

button.addEventListener("click", function () {
  let loginInput = login.value;
  let passwordInput = password.value;

  if (loginInput === "Shrek" && passwordInput === "mal") {
    card.style.display = "block";
    form.style.display = "none";
  } else if (
    loginInput === "" ||
    loginInput === null ||
    passwordInput === "" ||
    passwordInput === null
  ) {
    alert("Doldur lan");
  } else {
    alert("Yanlış amcuk");
    login.value = "";
    password.value = "";
  }
});

button2.addEventListener("click", function () {
  window.open("shrek.html");
});
