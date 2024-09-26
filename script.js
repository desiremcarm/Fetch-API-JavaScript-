const API_URL = "https://jsonplaceholder.typicode.com/users";
const API_URL_USER = API_URL + "/1";

// Add listeners to the Run code buttons
document.getElementById("getBtn").addEventListener("click", getRequest);
document.getElementById("postBtn").addEventListener("click", postRequest);
document.getElementById("putBtn").addEventListener("click", putRequest);
document.getElementById("deleteBtn").addEventListener("click", deleteRequest);

// Copy text function
async function getCopiedText(textContentId) {
  let text = document.getElementById(textContentId).innerText;
  try {
    await navigator.clipboard.writeText(text);
    toastAppear();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

// Show copy text toast
function toastAppear() {
  // Get the snackbar DIV
  let copyToast = document.getElementById("snackbar");

  // Add the "show" class to DIV
  copyToast.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    copyToast.className = copyToast.className.replace("show", "");
  }, 3000);
}

// GET REQUEST
async function getRequest() {
  fetch(API_URL_USER)
    .then((answer) => answer.json())
    .then((data) => writeInDocument("getResponse", data));
  changeVisibility("getResponse");
}

// POST REQUEST
async function postRequest() {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Desire Marron",
      email: "desiremcarm@mail.com",
    }),
  })
    .then((respuesta) => respuesta.json())
    .then((data) => writeInDocument("postResponse", data));
  changeVisibility("postResponse");
}

// PUT REQUEST
async function putRequest() {
  fetch(API_URL_USER, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Desire M. Carmona",
      email: "desire@mail.com",
    }),
  })
    .then((respuesta) => respuesta.json())
    .then((data) => writeInDocument("putResponse", data));
  changeVisibility("putResponse");
}

// DELETE REQUEST
async function deleteRequest() {
  fetch(API_URL_USER, {
    method: "DELETE",
  })
    .then((respuesta) => respuesta.json())
    .then((data) => writeInDocument("deleteResponse", data));
  changeVisibility("deleteResponse");
}

// Visibility show function
function changeVisibility(messageId) {
  let reqAnswer = document.getElementById(messageId).parentElement;
  reqAnswer.className = "show";
}

// Write API answer in the HTML
function writeInDocument(stringTheData, data) {
  document.getElementById(stringTheData).innerText = JSON.stringify(
    data,
    null,
    4
  );
}
