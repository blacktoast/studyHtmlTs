export function twoFer(str: string = "you"): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  return `One for ${str}, one for me.`;

  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.
}
