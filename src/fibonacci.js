function fibs(n) {
  let f;
  let array = [0, 1];

  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return array.slice(0, 1);
  }

  for (let i = 0; i < n - 2; i++) {
    f = array[i] + array[i + 1];
    array.push(f);
  }
  return array;
}

function fibsRec(n) {}

export { fibs, fibsRec };
