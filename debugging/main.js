function add(x, y) {
  const result = x + y;

  return result;
}


function subtract(x, y) {
  const result = x - y;

  return result;
}


function division(x, y) {
  const result = x / y;

  return result;
}



const result = division(subtract(add(100, 1000), 64), 2);

console.log(result);
