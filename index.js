function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e31004b3eb63aobb890f945atb455902";
  let context =
    "You are an intelligent AI please give accurate answer to any questions that is been ask by anybody. please make sure the answer is correct and straight forard to the point . You mission is to generate any question in basic HTML and separate each line with a <br /> dont mention basic html. Make sure to follow the user instructions. Sign with 'DevSpark AI' inside a <strong> element at the end of your conclution and NOT at the beginning. please give current answer.";
  let prompt = `User instructions: Give an answer to any question about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating your request ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);