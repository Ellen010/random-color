const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
  "#ffb692",
  "#da4167";
  "#603140",
  "#57cc99",
  "#ee6055",
  "#0096c7",
  "#52b788",
];

function getRandomIndex() {
  return Math.floor(Math.random() * darkColorsArr.length);
}

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  const btn = document.querySelector("#btn");

  if (!btn) {
    console.error("Button not found!");
    return;
  }

  btn.addEventListener("click", function () {
    const color = darkColorsArr[getRandomIndex()];
    if (color) {
      body.style.backgroundColor = color;
      bgHexCodeSpanElement.innerText = color;
    }
  });
});
