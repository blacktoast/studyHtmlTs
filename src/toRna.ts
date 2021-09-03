const dnaList = ["A", "C", "G", "T"];
const rnaList = ["U", "G", "C", "A"];

let convertDnatoRna = (d) => {
  return rnaList[dnaList.indexOf(d)];
};

export function toRna(dn) {
  let chk;
  let rna = [...dn];
  rna.map(convertDnatoRna).map((a) => {
    a === undefined ? (chk = false) : a;
  });
  //console.log(rna);

  if (chk) {
    throw new Error("Invalid input DNA.");
  } else {
    return rna.join("");
  }
}
let a = "AAC";
let b = [...a];
b.map(convertDnatoRna);
console;
