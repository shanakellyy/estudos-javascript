let valores = [8, 1, 7, 4, 2, 9];
// declarando a variável

console.log(valores);
// mostra o array todo no console

valores.sort();
// coloca os valores em ordem crescente

valores.push(6);
// adiciona um item no final do array

console.log(`A variável tem ${valores.length} itens`);
// diz quantos itens a variável tem

for (let pos = 0; pos < valores.length; pos++) {
  // cria a variável pos pra prosição, iniciando em 0

  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
  // imprime a o valor de cada posição
}

let p = valores.indexOf(5);
// encontra em que posição um valor se encontra
// se o valor não estiver no array, retorna -1

if (p == -1) {
  console.log(`O valor não foi encontrado`);
  // caso não encontrar o valor e retornar -1, imprime essa mensagem
} else {
  console.log(`O valor está na posição ${p}`);
}
