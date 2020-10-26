// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 2;
let b = 5;
let c = 9;

if (a > b && a > c) {
  console.log (`a é maior número`);
} else if (b > a && b > c) {
  console.log (`b é maior número`);
} else if (c > a && c > b) {
  console.log (`c é o maior número`);
} else {
  console.log (`eles são iguais`);
}