function parimpar(n) {
  //função pra descobrir se um número (n) é par ou impar

  if (n % 2 == 0) {
  // se, ao dividir n por 2, o resto é zero
    return "Par!";
  } else {
    return "Ímpar!";
  }
}

console.log(parimpar(17));
// mostra se o valor n, nesse caso, 17, é par ou impar
