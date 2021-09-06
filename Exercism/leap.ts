function devideN(num: number, devide: number): boolean {
  return num % devide ? false : true;
}

export function isLeap(year: number): boolean {
  let re = !devideN(year, 4)
    ? false
    : !devideN(year, 100)
    ? true
    : devideN(year, 400)
    ? true
    : false;

  return re;

  throw new Error("Remove this statement and implement this function");
}
