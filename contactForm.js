const scriptURL =
  "https://script.google.com/macros/s/AKfycbxFdTt2wn6rV9s0y8c4P3L2lqGyAzVeoJ7R74Oxq-KCQFBxj781MXVvLTc9ne3aQbb1/exec";
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
