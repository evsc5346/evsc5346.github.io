const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const characters = ["Jax", "Leona", "Jinx", "Ahri", "Darius", "Lux", "Ezreal"];
const places = ["the Jungle", "the Bot-Lane", "the Mid-Lane", "the Top-Lane", "the Nexus"];
const events = ["slain an enemy", "ran away", "pushed forwards", "got ganked", "got a pentakill"];
const WL = ["won the game", "lost the game"];

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);
  const randomWL = randomValueFromArray(WL);

  const storyText = `After a long day of work, you decided to play some League of Legends. You were playing as ${randomCharacter} and went into ${randomPlace}, where you find a Mordekaiser and he ${randomEvent}. In the end, your team ${randomWL}`;

  return storyText;
}

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace(randomCharacter, name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * (5 / 9)) + " Celsius";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}