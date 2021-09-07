const dnaList = ["A", "C", "G", "T"];
const rnaList = ["U", "G", "C", "A"];

let convertDnatoRna = (d) => {
  return rnaList[dnaList.indexOf(d)];
};

export function toRna(dn) {
  let chk = false;
  let rna = [...dn];
  let t = rna.map(convertDnatoRna).map((a) => {
    a === undefined ? (chk = true) : a;
    return a;
  });

  if (chk) {
    throw new Error("Invalid input DNA.");
  } else {
    return t.join("");
  }
}
let a = "AAC";
console.log(a.split(""));
