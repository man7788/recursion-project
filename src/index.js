#!/usr/bin/node
import './style.css';
// import { fibs, fibsRec } from './fibonacci';
// import mergeSort from './merge-sort';
import mergeSort from './merge-sort';

// console.log(fibs(8));
// console.log(fibsRec(8));

console.log(mergeSort([4, 7, 2, 3, 8, 6])); // Even list no duplicate
// console.log(mergeSort([4, 7, 2, 3, 6, 8, 5])); // Odd list no duplicate
// console.log(mergeSort([4, 4, 2, 2, 8, 8])); // Even llist duplicated
// console.log(mergeSort([4, 4, 2, 2, 8, 8, 6])); // Odd list duplicated
