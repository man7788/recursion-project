function mergeSort(list, array = [], array2 = [], split = true, i = 0) {
  // if (i > 50) {
  //   console.log(i);
  //   return array2;
  // }

  if (list.length > 0 && array.length === 0) {
    const left = list.slice(0, list.length / 2);
    const right = list.slice(list.length / 2, list.length);
    array.push(left, right);
    console.log(array);
    return mergeSort(list, array);
  }

  if (array.length > 0 && split === true) {
    if (array.length === list.length) {
      split = false;
    } else {
      let fresh = [];
      array.forEach((element) => {
        if (element.length > 1) {
          const left = element.slice(0, element.length / 2);
          const right = element.slice(element.length / 2, element.length);
          fresh.push(left, right);
        } else {
          fresh.push(element);
        }
      });
      array = fresh;
      console.log(array);
    }
    return mergeSort(list, array, array2, split);
  }

  if (array2[0] !== undefined) {
    if (array2[0].length === list.length) {
      return array2[0];
    }
  }

  if (array.length > 0) {
    if (array[i] === undefined) {
      i = 0;
      array = array2;
      array2 = [];
      return mergeSort(list, array, array2, split, i);
    }

    let merged = [];
    if (array[i] !== undefined) {
      if (array[i + 1] !== undefined) {
        array[i].forEach((x) => {
          array[i + 1].forEach((y) => {
            // This sorting method doesn't work if numbers are duplicated
            if (x < y && !merged.includes(x)) {
              merged.push(x);
            } else if (y < x && !merged.includes(y)) {
              merged.push(y);
            }
          });
        });

        array[i].forEach((x) => {
          if (!merged.includes(x)) {
            merged.push(x);
          }
        });

        array[i + 1].forEach((x) => {
          if (!merged.includes(x)) {
            merged.push(x);
          }
        });
        array2.push(merged);
      }

      if (array[i + 1] === undefined) {
        array2[array2.length - 1].forEach((x) => {
          if (x < array[i] && !merged.includes(x)) {
            merged.push(x);
          } else if (x > array[i] && !merged.includes(x)) {
            merged.push(array[i][0]);
          }
        });
        array2[array2.length - 1].forEach((x) => {
          if (!merged.includes(x)) {
            merged.push(x);
          }
        });
        array[i].forEach((x) => {
          if (!merged.includes(x)) {
            merged.push(x);
          }
        });

        array2[array2.length - 1] = merged;
      }
      console.log(array2);
    }
    return mergeSort(list, array, array2, split, i + 2);
  }
}
export default mergeSort;

// Make numbers in list compare to each other,
// regardless of how many of them.

// if num[0] < num[i]
// add num[0] to list
// else num[i+1] // Use recursion to return i+1 and list

// Split list into two halves,
// base case to start merging if list only have one number.
// Run spliting in parallel left right.

// if list length > 0
// slice list (0, length / 2)
// slice list (length / 2, 0)
// if list length === 1
// merge lists
