let mytext = document.getElementById("my-text");
mytext.addEventListener("input", () => {
  let count = mytext.value.length;
  //   console.log(mytext.value, count);
  document.getElementById(
    "count-result"
  ).textContent = `total characters:${count}`;
});
let buttonEl = document.querySelector("button");
let TextEl = document.querySelector("textarea");
buttonEl.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(TextEl.value);
  speechSynthesis.speak(utterance);
});
