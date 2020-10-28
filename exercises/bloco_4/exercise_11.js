// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,00 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

// 1ª faixa: R$ 142,80
// 2ª faixa: R$ 354,80
// 3ª faixa: R$ 636,13
// 4ª faixa: R$ 869,36

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto;
let salarioSemINSS;
let salarioLiquiq;

if (salarioBruto <= 1556.94) {
   salarioSemINSS = salarioBruto - (salarioBruto * 0.08);
} else if (1556.95 <= salarioBruto <= 2594.92) {
   salarioSemINSS = salarioBruto -  (salarioBruto * 0.09);
} else if (2594.93 <= salarioBruto <= 5189.82) {
   salarioSemINSS = salarioBruto - (salarioBruto * 0.011);
} else {
   salarioSemINSS = salarioBruto - 570.88;
}

if (salarioSemINSS <= 1903.98) {
   salarioLiquiq = salarioSemINSS;
  console.log (`Esse valor é isento de IR, slário líquido = R$${salarioLiquiq}`);  
} else if (1903.99 <= salarioSemINSS <= 2826.65) {
   salarioLiquiq = salarioSemINSS - ((salarioSemINSS * 0.075) - 142.80);
  console.log (`Esse valor tem uma alíquota de 7,5% no IR e dedução de R$142,80, slário líquido = R$${salarioLiquiq}`);
} else if (2826.66 <= salarioSemINSS <= 3751.05) {
   salarioLiquiq = salarioSemINSS - ((salarioSemINSS * 0.15) - 354.80);
  console.log (`Esse valor tem uma alíquota de 15% no IR e dedução de R$636,13, slário líquido = R$${salarioLiquiq}`);
} else if (3751.06 <= salarioSemINSS <= 4664.68) {
   salarioLiquiq = salarioSemINSS - ((salarioSemINSS * 0.225) - 636.13);
  console.log (`Esse valor tem uma alíquota de 22,5% no INSS e dedução de R$636,13 no IR, slário líquido = R$${salarioLiquiq}`);
} else {
   salarioLiquiq = salarioSemINSS - ((salarioSemINSS * 0.275) - 636.13);
  console.log (`Esse valor tem uma alíquota de 27,5% no IR e dedução de R$636,13, slário 
  líquido = R$${salarioLiquiq}`);
}
