import { tokenToString } from "typescript";
import { twoFer } from "./twoFer";

let p = (a: any) => console.log(a);

p(twoFer("test"));
function devideN(num: number, devide: number): boolean {
  return num % devide ? false : true;
}
