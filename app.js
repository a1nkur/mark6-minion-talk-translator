const translatorBtn = document.getElementById("btn");

translatorBtn.addEventListener("click", handleBtnClick);

const inputContainer = document.getElementById("textArea");
const outputContainer = document.querySelector("#outputBox");

const url = "https://api.funtranslations.com/translate/minion.json";

function handleBtnClick(event) {
  const input = inputContainer.value;
  const finalURL = constructURL(input);
  console.log(finalURL);
  fetch(finalURL)
    .then(response => response.json())
    .then(json => {
      outputContainer.innerText = json.contents.translated;
    })
    .catch(err => alert(err));
}

function constructURL(inputText) {
  const encodedURI = encodeURI(inputText);
  return `${url}?text=${encodedURI}`;
}
