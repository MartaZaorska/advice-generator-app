const numberAdviceElement = document.getElementById("number");
const adviceTextElement = document.getElementById("advice");
const randomAdviceButton = document.getElementById("random-advice");

randomAdviceButton.addEventListener("click", getRandomAdvice);

async function getRandomAdvice(){
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  numberAdviceElement.innerText = data.slip.id;
  adviceTextElement.innerText = `${data.slip.advice}`;
}

getRandomAdvice();