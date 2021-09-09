let p = (a: any) => {
  console.log(a);
};
//배열길이가 11이상이면 false
//ns ,we 가 각각의 수와 차이가 나면 false
/*
best practice
export function isValidWalk(walk: string[]) {
if(walk.length !== 10) return false;
if(walk.filter(e => e === 'n').length !== walk.filter(e => e === 's').length) return false;
if(walk.filter(e => e === 'e').length !== walk.filter(e => e === 'w').length) return false;
return true;
}
*/
function isValidWalk(walk: string[]) {
  if (walk.length === 10) {
    let ns = 0;
    let we = 0;
    for (let a of walk) {
      switch (a) {
        case "n":
          ns += 1;
          break;

        case "s":
          ns -= 1;
          break;

        case "w":
          we += 1;
          break;

        case "e":
          we -= 1;
          break;
      }
    }
    if (ns == 0 && we == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

p(isValidWalk(["  "]));
