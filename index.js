// this is a js file
// Gabriel Batista Nunes

/*
1.
a. false
b. false
c. true
d. boolean

2.
não há number antes do prompt
vai dar os dois números juntos, por serem interpretados como texto

3.
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));
const soma = primeiroNumero + segundoNumero;
console.log(soma);

B.

1.

//a
age = Number(prompt("Sua idade"));
console.log(age);

//b
bffage = Number(prompt("Idade do seu(a) melhor amigo(a)"));
console.log(bffage);

//c
older = age > bffage;
console.log("sua idade é maior que a do(a) seu(a) amigo(a)?", older);

//d
diferença = (Number(age - bffage));
console.log ("Voce tem", diferença, "anos de diferença do(a) seu(a) amigo(a)");
*/
/*
//2.

//a
npar = Number(prompt("insira um n° par"));
console.log(npar);
//b
let rdp2 = npar % 2;
console.log(rdp2);
//c
// Sim, o reultado de todo número par é 0

//d
// Quando ímpar o resultado sempre é 1
*/

//3.
//a
/*
let age = Number(prompt("Sua idade"));
console.log("Idade em anos", age);
let meses = Number(age * 12);
console.log("Sua idade em meses:", meses);
let days = Number(meses * 30);
console.log("Sua idade em dias", days);
let hrs = Number(days * 24);
console.log("Sua idade em horas", hrs);
*/


//4
/*
let n1 = prompt("escolha um número");
let n2 = prompt("escolha outro número");
console.log(Number(n1));
console.log(Number(n2));
console.log("O", n1, "é maior que", n2, "?", n1 > n2);
console.log("O", n1, "é igual ao", n2, "?", n1 === n2);
let divd12 = Number(n1 % n2);
let divd21 = Number(n2 % n1);
let n3 = Number(0);
console.log("O", n1, "é divisível por", n2, "?", divd12 <= n3);
console.log("O", n2, "é divisível por", n1, "?", divd21 <= n3);

//OU PODE FAZER DA SEGUINTE FORMA QUE É MAIS RÁPIDA E FÁCIL
/*
console.log("O primeiro numero é maior que segundo?", 
(numeroUm > numeroDois));
console.log("O primeiro numero é igual ao segundo?", 
(numeroUm === numeroDois));
console.log("O primeiro numero é igual ao segundo?", 
Boolean(numeroUm % numeroDois));
console.log("O primeiro numero é igual ao segundo?", 
Boolean(numeroDois % numeroUm)); */

//a
/*f = 77
console.log(k = (f - 32) * (5 / 9) + 273.15);
*/
/*
//b
c = 80
console.log(f = (c) * (9 / 5) + 32);
*/

//c
/*
c = 30
f = (c) * (9 / 5) + 32;
k = (f - 32) * (5 / 9) + 273.15
console.log("30 graus em Fahrenheit é:", f, "--", "30 graus em Kelvin é", k);
*/

//d
/*
c = Number(prompt("Quantos graus para ser convertido?"));
f = (c) * (9 / 5) + 32;
k = (f - 32) * (5 / 9) + 273.15
console.log(c, "graus em Fahrenheit é:", f,"--", c, "graus em Kelvin é", k);
*/

//2
/*
//a
let qwh = Number(0.05);
let consumo = 280;
console.log("O seu consumo é de", consumo ,"quilowatt-hora, e isso dá", consumo * qwh);

//b
//let qwh = Number(0.05);
let prcconsumo = consumo * qwh
console.log("Como você tem 15% de desconto, você deve pagar", -(0.15 * prcconsumo) + prcconsumo);
*/

//3

//a
/*
let lb = 20;
let kg = lb / 2.2;
console.log("O resultado de quanto é",'lb', lb, "em kg, é:",kg);
*/

//b
/*
let oz = 10.5;
let kg = (oz / 35.273962)*10;
console.log("O resultado de quanto é", "oz", oz, "em kg, é", kg);
*/

//c
/*
let mi = 100;
let m = mi * 1609.344;
console.log("O resultado de quanto é", "mi", mi, "em m, é", m);
*/

//d
/*
let ft = 934.7;
let m = ft / 3.2808399;
console.log("O resultado de quanto é", "ft", ft, "em m, é", m);
*/

//e
/*
let gal = 103.56;
let l = gal * 4.546092;
console.log("O resultado de quanto é", "gal", gal, "em l, é", l);
*/

//f
/*
let xic = 31.61;
let l = xic * 0.2366;
console.log("O resultado de quanto é", "xic", xic, "em l, é", l);
*/

//g
let mi = prompt("Escolha uma distância em milhas");
let m = mi * 1609.344;
console.log("O resultado de quanto é", "mi", mi, "em m, é", m);
