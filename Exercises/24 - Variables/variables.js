let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/* let varAA = varA;
varA = varB;
varB = varC;
varC = varAA;
 */

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);