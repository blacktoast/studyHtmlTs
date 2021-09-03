export function twoFer(str: string): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  let result: string;
  str
    ? (result = `One for ${str}, one for me.`)
    : (result = `One for you, one for me.`);
  return result;
}
