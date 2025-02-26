function soma(n1=0, n2=0) {
  // foi atribuido o valor de zero pra cada n
  // caso algum dos valores não for atribuido na chamada, a função vai manter o zero

  return n1 + n2
}

console.log(soma(7))
// nesse caso, como somente o n1 recebeu um valor, o n2 vai valer zero, logo o resultado será 7

console.log(soma(2, 9))
// aqui os dois n receberam valores, então a soma vai funcionar normalmente, retornando 11