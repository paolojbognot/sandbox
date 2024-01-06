const colorArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "brown",
  "white",
  " black",
  "gray",
];

function randomColor(colorChoices) {
  let selection = Math.floor(Math.random() * (colorChoices.length - 1));
  let result = colorChoices[selection];
  console.log(result);
  return result;
}

randomColor(colorArray);
