const scriptURL =
  "https://script.google.com/macros/s/AKfycbx6WeQzjs0TPGXm9O3PL6JsAxYi0B0qxp8-twfamb4-nOXHqyHYphx-DwkLYAx9NsCo/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
