var btnTranslate = document.querySelector(`#translate-button`);
var txtInput = document.querySelector(`#input-text`);
var txtOutput = document.querySelector(`#output-text`);

var serverURL = `https://api.funtranslations.com/translate/pirate.json`;

function translationURL(text) {
    return serverURL = serverURL + `?` + `text=` + text; 
}

function errorHandler(error) {
    console.log(`Error has occured!`, error);
    alert(`Something's wrong with server. Try again later!`);
}

function clickHandler() {
    txtOutput.innerText = "";
    var inputText = txtInput.value;

    fetch(translationURL(inputText)) 
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })

    .catch(errorHandler);
};

btnTranslate.addEventListener(`click`, clickHandler)