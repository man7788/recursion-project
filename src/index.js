#!/usr/bin/node
import './style.css';
import { fibs, fibsRec } from './fibonacci';
import mergeSort from './merge-sort';

// console.log(fibs(8));
// console.log(fibsRec(8));

// console.log(mergeSort([2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(mergeSort([2, 3, 4, 5]));
// console.log(
//   mergeSort([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
// );
// console.log(
//   mergeSort([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
// );
console.log(
  mergeSort([10, 5, 7, 12, 3, 11, 8, 6, 18, 2, 15, 13, 14, 4, 9, 17, 16])
);
// console.log(mergeSort([9, 5, 7, 4, 8, 3, 6, 2]));
// console.log(
//   mergeSort([10, 10, 7, 7, 3, 3, 8, 8, 18, 18, 15, 15, 14, 14, 17, 17, 16])
// );
