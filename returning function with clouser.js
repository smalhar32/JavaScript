function parent() {
  const a = 5;
  const b = 6;
  function add() {
    console.log(a + b);
  }
  return add;
}

const add1 = parent();
console.dir(add1);

//Clouser is nothing but when we access value of parent function in a child function is known as clouser