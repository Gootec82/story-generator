
function dispalystory(response) {
    console.log("story generated");
new Typewriter("#story", {
    strings: "Great story generator",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

let generatorInput = document.querySecletor("#user-generator");
let apikey = "e31004b3eb63aobb890f945atb455902";
let prompt = 'Generate a Story about ${generatorInput.value}';
let context = 'User instructions: You are a romantic story expert teller love to write a short story. Your mission is to generate heart warming story that touches the heart with morial lessons in basic HTML. Make sure to follow the user instructions below:';
let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}'

console.log("generating story");
console.log('prompt: ${prompt}');
console.log('context: ${context}');

axios.get(apiURL).then(dispalystory);
}

let poemFormElement = document.querySelector("#story-generator-form");
poemFormElement.addEventListener("submit", generateStory);