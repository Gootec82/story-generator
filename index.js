function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Great story generator",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#story-generator-form");
poemFormElement.addEventListener("submit", generateStory);