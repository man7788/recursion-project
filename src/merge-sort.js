function mergeSort(
  list,
  array = [],
  array2 = [],
  split = true,
  i = 0,
  j = 0,
  k = 0,
  merged = []
) {
  if (i > 50) {
    console.log(i);
    return array2;
  }
  // Split raw number list into two halves
  if (list.length > 0 && array.length === 0) {
    const left = list.slice(0, list.length / 2);
    const right = list.slice(list.length / 2, list.length);
    array.push(left, right);
    console.log(array);
    return mergeSort(list, array);
  }

  // Continue spliting until all lists have only 1 number
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

  // Base case to return sorted list
  if (array2[0] !== undefined) {
    if (array2[0].length === list.length) {
      return array2[0];
    }
  }

  // Starts merging process
  if (array.length > 0) {
    // Finishes merging all pairs in one branch, starts again with new branch
    if (array[i] === undefined) {
      i = 0;
      array = array2;
      array2 = [];
      return mergeSort(list, array, array2, split, i);
    }
    // No pair, even number list
    if (array[i + 1] === undefined && array[array.length - 1].length > 1) {
      i = 0;
      j = 0;
      k = 0;
      array2.push(array[array.length - 1]);
      array = array2;
      console.log(array2);
      array2 = [];
      return mergeSort(list, array, array2, split, i, j, k, merged);
    }

    // No pair, odd number list
    if (array[i + 1] === undefined && array[array.length - 1].length === 1) {
      let lastIndex = array2[array2.length - 1];
      const larger = lastIndex.filter((num) => num > array[i][0]);
      const smaller = lastIndex.filter((num) => num < array[i][0]);
      array2[array2.length - 1] = smaller.concat(array[i][0], larger);
      console.log(array2);
      i = 0;
      array = array2;
      array2 = [];
      return mergeSort(list, array, array2, split, i, j, k, merged);
    }
    // Finishes merging one pair of lists, go to next pair
    if (array[i][j] === undefined) {
      console.log('j undefined');
      const remains = array[i + 1].filter(
        (num) => num > merged[merged.length - 1]
      );

      remains.forEach((num) => {
        merged.push(num);
      });
      array2.push(merged);
      console.log(array2);
      i += 2;
      j = 0;
      k = 0;
      return mergeSort(list, array, array2, split, i, j, k);
    }
    // Finishes merging one pair of lists, go to next pair
    if (array[i + 1][k] === undefined) {
      console.log(array[i + 1][k]);
      console.log('k undefined');
      let remains = array[i].filter((num) => num > merged[merged.length - 1]);
      console.log(remains);
      remains.forEach((num) => {
        merged.push(num);
      });
      array2.push(merged);
      console.log(array2);
      i += 2;
      j = 0;
      k = 0;
      return mergeSort(list, array, array2, split, i, j, k);
    }

    if (array[i + 1] !== undefined) {
      // Merging two pairs of lists
      if (array[i][j] < array[i + 1][k]) {
        console.log(array[i][j]);
        merged.push(array[i][j]);
        j += 1;
        console.log(merged, `${j}j`);
        return mergeSort(list, array, array2, split, i, j, k, merged);
      }
      if (array[i][j] > array[i + 1][k]) {
        console.log(array[i + 1][k]);
        merged.push(array[i + 1][k]);
        k += 1;
        console.log(merged, `${k}k`);
        return mergeSort(list, array, array2, split, i, j, k, merged);
      }
      if (array[i][j] === array[i + 1][k]) {
        merged.push(array[i][j], array[i + 1][k]);
        j += 1;
        k += 1;
        console.log(merged, j, k);
        return mergeSort(list, array, array2, split, i, j, k, merged);
      }
    }
  }
}
export default mergeSort;

// [2, 13, 15, 18]
// [4, 9, 14, 16, 17]
