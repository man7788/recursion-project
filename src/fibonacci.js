function fibs(n) {
  let array = [0, 1];

  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return array.slice(0, 1);
  }

  for (let i = 0; i < n - 2; i++) {
    array.push(array[i] + array[i + 1]);
  }
  return array;
}

function fibsRec(n, i = 0, array = [0, 1]) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return array.slice(0, 1);
  }
  if (n === array.length) {
    return array;
  }
  array.push(array[i] + array[i + 1]);
  return fibsRec(n, i + 1, array);
}

// console.log(fibs(8));

// console.log(fibsRec(8));
export { fibs, fibsRec };
