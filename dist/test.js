"use strict";
let a;
a = new Set([1, 2, 3, 4]);
let b;
b = new Set(['a', 'b', 'c', 'd', 'a']); // the second `a` is not added
let c;
c = new Set([1, 'b', true]);
console.log(a);
console.log(b);
console.log(c);
