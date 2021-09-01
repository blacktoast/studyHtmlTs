function p(str: any): void {
  console.log(str);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

//p(list);

function checkList(list: any): void {
  p(list.value);
}

checkList(list);
let test = {
  name: "john"
};
let testMap = new Map();
testMap.set(test, "...");
test = null;
p("test");
