export const colorCode = (str) => {
  let result = COLORS.indexOf(str);
  return result;
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

console.log(colorCode("grey"));
