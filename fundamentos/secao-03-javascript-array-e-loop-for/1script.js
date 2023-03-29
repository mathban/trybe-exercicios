/*1 - Elabore alguns códigos e imprima o resultado no console usando o console.log,
um para cada operação aritmética básica. 
Seu código deve ter duas variáveis, a e b, definidas no começo com os valores 
que serão operados. Escreva códigos para:*/

let a = 5;
let b = 10;

console.log("Soma:" + " " + (a + b));
console.log("Subtração:" + " " + (a - b));
console.log("Multplicação:" + " " + (a * b));
console.log("Divisão:" + " " + (a / b));
console.log("Resto da Divisão:" + " " + (a % b));
console.log("Exponenciação:" + " " + (a ** b));

/*2 - Utilize if/else para escrever um código que retorne o maior de dois números. 
Defina, no começo do seu código, duas variáveis com os valores que serão comparados.*/

let num21 = 40;
let num22 = 80;

if(num21 > num22){
console.log("O número é maior");}
else{
console.log("O número é MENOR");}

/*3 - Utilize if/else para escrever um código que retorne o maior de três
números. Defina, no começo do seu código, três variáveis com os valores
que serão comparados.*/

let num31 = 10;
let num32 = 20;
let num33 = 30;
let maiorNum;

if(num31 > num32 && num31 > num33){console.log(num31 "- É o maior número.")}